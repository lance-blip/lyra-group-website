import { NextResponse } from "next/server";
import { createHmac, randomUUID } from "crypto";

/**
 * Lyra chat proxy — HMAC-signs the compact JSON body and forwards to n8n.
 *
 * Canonical signature (must match n8n Verify HMAC node):
 *   hex(HMAC-SHA256(secret, JSON.stringify(payload)))  // compact, no spaces
 * Header: X-Lyra-Signature: <hex>
 *
 * Env (Wrangler secrets):
 *   N8N_CHAT_WEBHOOK_URL  e.g. https://webhooks.quikle.co.za/webhook/lyra-chat
 *   N8N_HMAC_SECRET       64-char hex shared with n8n Code node
 */

type HistoryItem = { role: "user" | "assistant"; content: string };

type ChatRequestBody = {
  message?: string;
  history?: HistoryItem[];
  sessionId?: string;
  pageUrl?: string;
};

type N8nChatResponse = {
  ok?: boolean;
  reply?: string;
  intent?: number;
  intent_label?: string;
  confidence?: number;
  handoff?: "whatsapp" | "form" | null;
  error?: string;
  branch?: number;
};

// Per-isolate rate limit (Cloudflare Workers do not share memory across isolates).
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 20;
const rateMap = new Map<string, { count: number; resetAt: number }>();

function clientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function rateLimit(ip: string): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now >= entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { ok: true, retryAfterSec: 0 };
  }
  if (entry.count >= RATE_MAX) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }
  entry.count += 1;
  return { ok: true, retryAfterSec: 0 };
}

function signCompactJson(secret: string, payload: unknown): { raw: string; signature: string } {
  // Compact JSON — identical to JS JSON.stringify / n8n JSON.stringify
  const raw = JSON.stringify(payload);
  const signature = createHmac("sha256", secret).update(raw, "utf8").digest("hex");
  return { raw, signature };
}

function sanitizeHistory(input: unknown): HistoryItem[] {
  if (!Array.isArray(input)) return [];
  const out: HistoryItem[] = [];
  for (const item of input.slice(-12)) {
    if (!item || typeof item !== "object") continue;
    const role = (item as HistoryItem).role;
    const content = String((item as HistoryItem).content || "").slice(0, 1500).trim();
    if (!content) continue;
    if (role !== "user" && role !== "assistant") continue;
    out.push({ role, content });
  }
  return out;
}

export async function GET() {
  const configured = Boolean(
    process.env.N8N_CHAT_WEBHOOK_URL && process.env.N8N_HMAC_SECRET,
  );
  return NextResponse.json({
    ok: true,
    route: "/api/chat",
    service: "lyra-group-website",
    mode: configured ? "n8n" : "unconfigured",
    message: configured
      ? "Chat API healthy — n8n HMAC proxy ready"
      : "Chat API healthy — secrets not yet configured",
  });
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "rate_limited",
        reply:
          "You are sending messages a little quickly. Please wait a moment, then try again — or use the contact form.",
        intent: 8,
        confidence: 1,
        handoff: "form",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
      },
    );
  }

  const webhookUrl = process.env.N8N_CHAT_WEBHOOK_URL || "";
  const hmacSecret = process.env.N8N_HMAC_SECRET || "";

  if (!webhookUrl || !hmacSecret) {
    return NextResponse.json(
      {
        ok: false,
        error: "unconfigured",
        reply:
          "Our chat guide is being connected. Please use the contact form or WhatsApp for a free consultation.",
        intent: 8,
        confidence: 1,
        handoff: "form",
      },
      { status: 503 },
    );
  }

  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "invalid_json",
        reply: "That message could not be read. Please try again.",
        intent: 1,
        confidence: 1,
        handoff: null,
      },
      { status: 400 },
    );
  }

  const message = String(body.message || "").slice(0, 2000).trim();
  if (!message) {
    return NextResponse.json(
      {
        ok: false,
        error: "empty_message",
        reply:
          "Send a short message and I will help — or book a free consultation on the contact page.",
        intent: 1,
        confidence: 1,
        handoff: null,
      },
      { status: 400 },
    );
  }

  const payload = {
    message,
    history: sanitizeHistory(body.history),
    sessionId: String(body.sessionId || randomUUID()).slice(0, 128),
    pageUrl: String(body.pageUrl || "").slice(0, 500),
  };

  const { raw, signature } = signCompactJson(hmacSecret, payload);

  let upstream: Response;
  try {
    upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Lyra-Signature": signature,
        "User-Agent": "LyraGroupWebsite/1.0 (+https://lyragroup.co.za)",
      },
      body: raw,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "upstream_unreachable",
        reply:
          "I could not reach our guide just now. Please try again in a moment, or use the contact form.",
        intent: 8,
        confidence: 1,
        handoff: "form",
      },
      { status: 502 },
    );
  }

  let data: N8nChatResponse = {};
  try {
    data = (await upstream.json()) as N8nChatResponse;
  } catch {
    data = {};
  }

  if (!upstream.ok) {
    const status = upstream.status === 401 ? 401 : upstream.status === 429 ? 429 : 502;
    return NextResponse.json(
      {
        ok: false,
        error: data.error || "upstream_error",
        reply:
          data.reply ||
          "Something went wrong on our side. Please use the contact form for a free consultation.",
        intent: data.intent ?? 8,
        confidence: data.confidence ?? 1,
        handoff: data.handoff ?? "form",
      },
      { status },
    );
  }

  const reply =
    (data.reply && String(data.reply).trim()) ||
    "How can I help you recover what you are owed?";

  // Soft integrity check — never leak signature details
  if (data.ok === false && data.error === "invalid_signature") {
    return NextResponse.json(
      {
        ok: false,
        error: "invalid_signature",
        reply:
          "I could not verify that request. Please refresh the page or use the contact form.",
        intent: 8,
        confidence: 1,
        handoff: "form",
      },
      { status: 401 },
    );
  }

  return NextResponse.json({
    ok: true,
    reply,
    intent: typeof data.intent === "number" ? data.intent : 1,
    intent_label: data.intent_label || null,
    confidence: typeof data.confidence === "number" ? data.confidence : 0.7,
    handoff: data.handoff === "whatsapp" || data.handoff === "form" ? data.handoff : null,
    branch: data.branch ?? data.intent ?? 1,
  });
}
