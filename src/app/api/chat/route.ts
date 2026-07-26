import { NextResponse } from "next/server";

// Node runtime — required by OpenNext Cloudflare bundler for App Router API routes.

/**
 * Spike / production chat proxy.
 * Phase 1 spike: returns 200 without calling n8n.
 * Production: HMAC-sign payload → N8N_WEBHOOK_URL (Lyra chatbot workflow).
 */
export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      route: "/api/chat",
      service: "lyra-group-website",
      mode: "spike",
      message: "Chat API healthy",
    },
    { status: 200 },
  );
}

export async function POST(request: Request) {
  let message = "";
  try {
    const body = (await request.json()) as { message?: string };
    message = (body?.message || "").toString().slice(0, 500);
  } catch {
    message = "";
  }

  return NextResponse.json(
    {
      ok: true,
      route: "/api/chat",
      mode: "spike",
      echo: message || null,
      reply:
        "Lyra chat spike is live. Full n8n → MiniMax M3 routing connects after workflow deploy.",
      handoff: null,
    },
    { status: 200 },
  );
}
