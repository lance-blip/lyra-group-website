import Link from "next/link";

const PROBLEMS = [
  {
    title: "External",
    body: "Debtors delay, dispute, or disappear while you chase politely and cash stays locked.",
  },
  {
    title: "Internal",
    body: "Your team wasn't hired to be collectors — time, focus, and morale drain every week.",
  },
  {
    title: "Philosophical",
    body: "You delivered the work. Being paid shouldn't feel like a favour.",
  },
];

const VALUES = [
  "WE FIND.",
  "WE STAND FIRM.",
  "WE ILLUMINATE.",
  "WE RISE.",
  "WE FINISH.",
];

const PLAN = [
  {
    step: "01",
    title: "Submit your mandate",
    body: "Share the debt details. We assess recoverability at no cost.",
  },
  {
    step: "02",
    title: "We pursue with precision",
    body: "Structured, lawful recovery across our 6-stage process.",
  },
  {
    step: "03",
    title: "You get paid",
    body: "Recovered funds returned. Our fee only on success.",
  },
];

const SERVICES = [
  {
    title: "Get paid on commercial invoices that have gone quiet",
    href: "/services#commercial",
  },
  {
    title: "Recover consumer debt without damaging your brand",
    href: "/services#consumer",
  },
  {
    title: "Escalate with legal muscle when persuasion isn't enough",
    href: "/services#legal",
  },
  {
    title: "Outsource the chase so your team can run the business",
    href: "/services#mandate",
  },
];

const STAKES = [
  {
    title: "Prescription risk",
    body: "Leave debt too long and the law may close the door for good.",
  },
  {
    title: "Silent write-offs",
    body: "Money already earned disappears from the balance sheet — and from your options.",
  },
  {
    title: "Cash-flow death spiral",
    body: "Unpaid invoices starve payroll, stock, and growth while you wait politely.",
  },
];

const SUCCESS = [
  {
    title: "Cash back where it belongs",
    body: "Recovered funds land in your account — not stuck in someone else's float.",
  },
  {
    title: "Your team off the chase",
    body: "Operations return to selling and delivering, not polite follow-ups.",
  },
  {
    title: "Sleep restored",
    body: "Clarity on what's being done — and a path out of the cash-flow knot.",
  },
];

const FAQS = [
  {
    q: "What happens if you can't collect?",
    a: "You pay nothing for unsuccessful recovery under our No Collection. No Fee. model.",
    expand:
      "If a debt proves unrecoverable after professional pursuit, you are not billed a success fee. We are clear upfront when a mandate is a poor fit.",
  },
  {
    q: "How do you handle debtors who dispute the debt?",
    a: "We validate the claim, document the dispute, and proceed only on a lawful, evidence-led path.",
    expand:
      "Disputes are not ignored and not bullied. Clear files protect your position and your reputation.",
  },
  {
    q: "Is there a minimum debt amount?",
    a: "We focus on commercial matters where professional recovery is economically sensible — confirmed during consultation.",
    expand:
      "Very small balances may not justify formal collection. We'll tell you honestly if internal follow-up is the better first step.",
  },
  {
    q: "How long does the process take?",
    a: "Timelines vary by debtor response and complexity — many mandates show movement within weeks, not years.",
    expand:
      "Early engagement is faster than aged books. We set expectations at mandate intake, not after the fact.",
  },
  {
    q: 'What does "No Collection. No Fee." actually include?',
    a: "Our success fee applies when we recover — you are not funding a retainer for empty activity.",
    expand:
      "Scope and commission tiers are confirmed in your mandate. Transparency over fine print.",
  },
  {
    q: "Will debt collection damage my customer relationships?",
    a: "Professional, compliant engagement is designed to recover money without scorched-earth tactics.",
    expand:
      "Tone matters. We represent your brand with firmness and respect — especially where ongoing trade may continue.",
  },
  {
    q: "Are you registered and POPIA compliant?",
    a: "Yes — compliance is framed as your protection, not our vanity credentials.",
    expand:
      "See our Compliance page for registrations, legislation, trust account handling, and POPIA commitments.",
  },
  {
    q: "Do you collect across South Africa or only Johannesburg?",
    a: "We are Johannesburg-based and support recovery matters across South Africa.",
    expand:
      "Debtors are not limited to one city. Process and compliance standards travel with the mandate.",
  },
];

export default function HomePage() {
  return (
    <div className="prose-lyra">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-lyra-primary-deep via-lyra-primary to-[#243556] text-lyra-star">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(240,230,211,0.25), transparent 28%), radial-gradient(circle at 80% 20%, rgba(212,165,116,0.18), transparent 24%), radial-gradient(circle at 60% 70%, rgba(196,120,74,0.12), transparent 30%)",
          }}
        />
        <div className="container-lyra relative section-pad !pb-20 !pt-16 md:!pt-24">
          <div className="inline-flex items-center rounded-full border border-lyra-accent/50 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-lyra-accent">
            No Collection. No Fee.
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Your invoices are unpaid. Your cash flow is suffering. That ends
            here.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-lyra-star/85 sm:text-lg">
            Lyra Group helps South African SMEs recover B2B debt —
            professionally, compliantly, and only when we succeed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-primary">
              Get a Free Consultation
            </Link>
            <a
              href="#plan"
              className="text-sm font-semibold text-lyra-accent underline-offset-4 hover:underline"
            >
              See how the process works →
            </a>
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.12em] text-lyra-star/60">
            CDC-aligned · POPIA compliant · Female-owned · Johannesburg
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="container-lyra section-pad">
        <p className="eyebrow">The problem</p>
        <h2 className="mt-2 max-w-3xl font-serif text-2xl font-semibold text-lyra-primary sm:text-3xl md:text-4xl">
          Unpaid invoices don&apos;t just hurt your books — they stall your
          business
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((item) => (
            <div key={item.title} className="card-lyra border-l-4 border-l-lyra-accent-strong">
              <h3 className="font-serif text-xl text-lyra-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-lyra-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-medium text-lyra-primary">
          Hoping they&apos;ll pay is not a recovery strategy.
        </p>
      </section>

      {/* Guide */}
      <section className="border-y border-lyra-border bg-white">
        <div className="container-lyra section-pad">
          <p className="eyebrow">Your guide</p>
          <h2 className="mt-2 max-w-3xl font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">
            A recovery partner who stands with you — not above you
          </h2>
          <p className="mt-4 max-w-2xl text-lyra-muted leading-relaxed">
            Lyra Group is founder-led by Lee-Hing Sinnye — personal service,
            compliance-first process, and female-owned pride without the
            corporate runaround. We guide SME owners through recovery so you can
            get back to running the business.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Professional process", "Trust account discipline", "SA legislation fluency"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-lyra-star/70 px-3 py-1 text-xs font-semibold text-lyra-primary"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-lyra-accent-strong hover:underline"
          >
            Talk to a real person →
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-lyra-primary text-lyra-star">
        <div className="container-lyra py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
            {VALUES.map((v) => (
              <span
                key={v}
                className="font-serif text-sm font-semibold tracking-[0.08em] text-lyra-accent sm:text-base"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Failure / Stakes — Nova amendment */}
      <section className="container-lyra section-pad !pb-8">
        <p className="eyebrow">What delay costs you</p>
        <h2 className="mt-2 max-w-3xl font-serif text-2xl font-semibold sm:text-3xl">
          Ignore it long enough and the money doesn&apos;t just wait — it
          vanishes
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {STAKES.map((s) => (
            <div key={s.title} className="rounded-xl border border-lyra-border bg-white p-5">
              <h3 className="font-serif text-lg text-lyra-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-lyra-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plan */}
      <section id="plan" className="container-lyra section-pad !pt-8">
        <p className="eyebrow">The plan</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">
          Three steps. No upfront risk.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PLAN.map((p) => (
            <div key={p.step} className="card-lyra">
              <div className="font-mono text-xs text-lyra-accent-strong">{p.step}</div>
              <h3 className="mt-2 font-serif text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-lyra-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 inline-flex rounded-full border border-lyra-accent bg-lyra-star/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-lyra-primary">
          No Collection. No Fee.
        </div>
      </section>

      {/* Success — Nova amendment */}
      <section className="border-y border-lyra-border bg-white">
        <div className="container-lyra section-pad">
          <p className="eyebrow">Success</p>
          <h2 className="mt-2 max-w-3xl font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">
            What recovery actually feels like
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SUCCESS.map((s) => (
              <div key={s.title} className="card-lyra">
                <h3 className="font-serif text-xl text-lyra-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-lyra-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="container-lyra section-pad">
        <p className="eyebrow">How we help</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
          Built around the problem you&apos;re actually facing
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="card-lyra transition hover:border-lyra-accent"
            >
              <h3 className="font-serif text-lg text-lyra-primary">{s.title}</h3>
              <span className="mt-3 inline-block text-sm font-semibold text-lyra-accent-strong">
                View services →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-lyra-primary text-lyra-star">
        <div className="container-lyra section-pad">
          <h2 className="max-w-3xl font-serif text-2xl font-semibold sm:text-3xl">
            South African businesses are sitting on money that belongs to them
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="font-serif text-3xl text-lyra-accent sm:text-4xl">
                ~R2.4T
              </div>
              <p className="mt-1 text-sm text-lyra-star/75">
                Household debt context in South Africa (industry landscape)
              </p>
            </div>
            <div>
              <div className="font-serif text-3xl text-lyra-accent sm:text-4xl">
                R500B+
              </div>
              <p className="mt-1 text-sm text-lyra-star/75">
                Non-performing loans landscape — pressure that hits SME cash flow
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm text-lyra-star/80">
            You don&apos;t need another lecture on the economy. You need a
            recovery plan.
          </p>
        </div>
      </section>

      {/* Testimonials placeholders — no fabricated amounts */}
      <section className="container-lyra section-pad">
        <p className="eyebrow">Client voices</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
          Results other business owners can feel in their cash flow
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "Construction SME",
            "Professional services",
            "Wholesale distributor",
          ].map((industry) => (
            <figure key={industry} className="card-lyra">
              <div className="text-lyra-accent">★★★★★</div>
              <blockquote className="mt-3 text-sm leading-relaxed text-lyra-muted italic">
                REPLACE WITH REAL QUOTE — {industry} client testimonial pending
                Lee-Hing approval.
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-lyra-primary">
                Client name · Company · {industry}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link
          href="/testimonials"
          className="mt-6 inline-block text-sm font-semibold text-lyra-accent-strong hover:underline"
        >
          Read more client results →
        </Link>
      </section>

      {/* FAQ */}
      <section className="border-t border-lyra-border bg-white">
        <div className="container-lyra section-pad">
          <p className="eyebrow">Questions owners actually ask</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Straight answers before you commit
          </h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-lyra-border bg-lyra-bg px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-lyra-primary marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="text-lyra-accent-strong group-open:rotate-45 transition">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm font-medium text-lyra-primary">{item.a}</p>
                <p className="mt-2 text-sm text-lyra-muted leading-relaxed">
                  {item.expand}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-lyra-primary-deep to-lyra-primary text-lyra-star">
        <div className="container-lyra section-pad text-center">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">
            Ready to recover what&apos;s yours?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-lyra-star/80">
            Free consultation. Clear next steps. No Collection. No Fee.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get a Free Consultation
            </Link>
            <Link
              href="/contact#whatsapp"
              className="text-sm font-semibold text-lyra-accent hover:underline"
            >
              WhatsApp us during business hours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
