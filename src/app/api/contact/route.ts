import { NextResponse } from "next/server";

// Node runtime — required by OpenNext Cloudflare bundler for App Router API routes.
// Worker still runs on Cloudflare with nodejs_compat.

/**
 * Spike / production contact API.
 * Phase 1 spike: returns 200 to prove API routes work on Cloudflare Workers.
 * Full form handling (email + honeypot/Turnstile) wired in Phase 2.
 */
export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      route: "/api/contact",
      service: "lyra-group-website",
      mode: "spike",
      message: "Contact API healthy",
    },
    { status: 200 },
  );
}

export async function POST(request: Request) {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  // Honeypot field: if present and filled, pretend success (spam)
  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    Boolean((body as { website?: string }).website)
  ) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  return NextResponse.json(
    {
      ok: true,
      route: "/api/contact",
      received: Boolean(body),
      mode: "spike",
      message:
        "Contact spike accepted. Email delivery wires to Lee-Hing placeholder in Phase 2.",
    },
    { status: 200 },
  );
}
