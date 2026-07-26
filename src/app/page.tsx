export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] px-6 py-16">
      <div className="mx-auto max-w-2xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C4784A]">
          Lyra Group · Spike
        </p>
        <h1 className="font-serif text-4xl font-semibold text-[#1B2A4A]">
          Cloudflare deploy spike
        </h1>
        <p className="text-lg text-[#6B6560]">
          Minimal Next.js 15 edge app to verify API routes before full Phase 1
          build. Celestial Ember tokens applied lightly.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[#1A1A1A]">
          <li>
            <a className="text-[#C4784A] underline" href="/api/contact">
              GET /api/contact
            </a>
          </li>
          <li>
            <a className="text-[#C4784A] underline" href="/api/chat">
              GET /api/chat
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
