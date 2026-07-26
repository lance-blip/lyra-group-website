import Link from "next/link";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

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
    icon: "01",
  },
  {
    title: "Recover consumer debt without damaging your brand",
    href: "/services#consumer",
    icon: "02",
  },
  {
    title: "Escalate with legal muscle when persuasion isn't enough",
    href: "/services#legal",
    icon: "03",
  },
  {
    title: "Outsource the chase so your team can run the business",
    href: "/services#mandate",
    icon: "04",
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
      {/* Hero — full viewport, WCAG-safe contrast */}
      <section className="hero-shell">
        <div className="hero-stars" aria-hidden />
        <div className="hero-overlay" aria-hidden />
        <div className="hero-content">
          <div className="container-lyra">
            <Reveal y={18}>
              <div className="hero-badge">No Collection. No Fee.</div>
            </Reveal>
            <Reveal delay={0.08} y={24}>
              <h1 className="heading-display mt-6 max-w-4xl">
                Your invoices are unpaid. Your cash flow is suffering. That ends
                here.
              </h1>
            </Reveal>
            <Reveal delay={0.16} y={20}>
              <p className="hero-sub mt-6">
                Lyra Group helps South African SMEs recover B2B debt —
                professionally, compliantly, and only when we succeed.
              </p>
            </Reveal>
            <Reveal delay={0.24} y={16}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-primary">
                  Get a Free Consultation
                </Link>
                <a href="#plan" className="btn-secondary">
                  See how it works
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="hero-meta mt-10">
                CDC-aligned · POPIA compliant · Female-owned · Johannesburg
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="container-lyra section-pad">
        <Reveal>
          <p className="eyebrow">The problem</p>
          <h2 className="heading-xl heading-accent-rule mt-3 max-w-3xl">
            Unpaid invoices don&apos;t just hurt your books — they stall your
            business
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {PROBLEMS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-lyra h-full border-l-4 border-l-lyra-accent-strong">
                <h3 className="heading-lg">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-lyra-muted">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.15}>
          <p className="mt-10 text-lg font-semibold text-lyra-primary">
            Hoping they&apos;ll pay is not a recovery strategy.
          </p>
        </Reveal>
      </section>

      {/* Guide */}
      <section className="border-y border-lyra-border bg-white">
        <div className="container-lyra section-pad">
          <Reveal>
            <p className="eyebrow">Your guide</p>
            <h2 className="heading-xl heading-accent-rule mt-3 max-w-3xl">
              A recovery partner who stands with you — not above you
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-lyra-muted">
              Lyra Group is founder-led by Lee-Hing Sinnye — personal service,
              compliance-first process, and female-owned pride without the
              corporate runaround. We guide SME owners through recovery so you
              can get back to running the business.
            </p>
          </Reveal>
          <Stagger className="mt-8 flex flex-wrap gap-2.5" stagger={0.08}>
            {[
              "Professional process",
              "Trust account discipline",
              "SA legislation fluency",
            ].map((chip) => (
              <StaggerItem key={chip}>
                <span className="inline-flex rounded-full border border-lyra-accent/35 bg-lyra-star/80 px-3.5 py-1.5 text-xs font-bold tracking-wide text-lyra-primary">
                  {chip}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <Link
              href="/about"
              className="mt-8 inline-flex text-sm font-bold text-lyra-accent-strong underline-offset-4 hover:underline"
            >
              Meet your guide →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Values strip — sequential reveal */}
      <section className="values-strip text-lyra-star">
        <div className="container-lyra py-12 md:py-14">
          <Stagger
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center"
            stagger={0.14}
          >
            {VALUES.map((v) => (
              <StaggerItem key={v}>
                <span className="font-serif text-sm font-bold tracking-[0.14em] text-lyra-accent sm:text-base md:text-lg">
                  {v}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Failure / Stakes */}
      <section className="container-lyra section-pad !pb-10">
        <Reveal>
          <p className="eyebrow">What delay costs you</p>
          <h2 className="heading-xl heading-accent-rule mt-3 max-w-3xl">
            Ignore it long enough and the money doesn&apos;t just wait — it
            vanishes
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {STAKES.map((s) => (
            <StaggerItem key={s.title}>
              <div className="card-lyra h-full">
                <div className="mb-3 h-1 w-10 rounded-full bg-lyra-accent-strong" />
                <h3 className="heading-lg">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-lyra-muted">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Plan */}
      <section id="plan" className="container-lyra section-pad !pt-10">
        <Reveal>
          <p className="eyebrow">The plan</p>
          <h2 className="heading-xl heading-accent-rule mt-3">
            Three steps. No upfront risk.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {PLAN.map((p) => (
            <StaggerItem key={p.step}>
              <div className="card-lyra h-full">
                <div className="font-mono text-sm font-bold text-lyra-accent-strong">
                  {p.step}
                </div>
                <h3 className="heading-lg mt-3">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-lyra-muted">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1}>
          <div className="mt-10 inline-flex rounded-full border border-lyra-accent-strong/40 bg-gradient-to-r from-lyra-star to-white px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-lyra-primary shadow-sm">
            No Collection. No Fee.
          </div>
        </Reveal>
      </section>

      {/* Success */}
      <section className="border-y border-lyra-border bg-white">
        <div className="container-lyra section-pad">
          <Reveal>
            <p className="eyebrow">Success</p>
            <h2 className="heading-xl heading-accent-rule mt-3 max-w-3xl">
              What recovery actually feels like
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {SUCCESS.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card-lyra h-full">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-lyra-accent/20 text-lyra-accent-strong">
                    <span className="text-lg" aria-hidden>
                      ✓
                    </span>
                  </div>
                  <h3 className="heading-lg">{s.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-lyra-muted">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services overview */}
      <section className="container-lyra section-pad">
        <Reveal>
          <p className="eyebrow">How we help</p>
          <h2 className="heading-xl heading-accent-rule mt-3">
            Built around the problem you&apos;re actually facing
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {SERVICES.map((s) => (
            <StaggerItem key={s.title}>
              <Link href={s.href} className="card-lyra group block h-full">
                <span className="font-mono text-xs font-bold text-lyra-accent-strong">
                  {s.icon}
                </span>
                <h3 className="heading-lg mt-3 transition group-hover:text-lyra-accent-hover">
                  {s.title}
                </h3>
                <span className="mt-4 inline-block text-sm font-bold text-lyra-accent-strong">
                  View services →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Stats with count-up */}
      <section className="relative overflow-hidden bg-lyra-primary-deep text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(212,165,116,0.2), transparent 35%), radial-gradient(circle at 80% 70%, rgba(61,79,111,0.5), transparent 40%)",
          }}
        />
        <div className="container-lyra section-pad relative z-10">
          <Reveal>
            <h2 className="max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight tracking-tight text-white">
              South African businesses are sitting on money that belongs to them
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <div>
                <div className="font-serif text-4xl font-bold text-lyra-accent sm:text-5xl md:text-6xl">
                  ~R
                  <CountUp end={2.4} decimals={1} />T
                </div>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                  Household debt context in South Africa (industry landscape)
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <div className="font-serif text-4xl font-bold text-lyra-accent sm:text-5xl md:text-6xl">
                  R
                  <CountUp end={500} />B+
                </div>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                  Non-performing loans landscape — pressure that hits SME cash
                  flow
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="mt-12 max-w-2xl text-base text-white/85">
              You don&apos;t need another lecture on the economy. You need a
              recovery plan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials placeholders */}
      <section className="container-lyra section-pad">
        <Reveal>
          <p className="eyebrow">Client voices</p>
          <h2 className="heading-xl heading-accent-rule mt-3">
            Results other business owners can feel in their cash flow
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {[
            "Construction SME",
            "Professional services",
            "Wholesale distributor",
          ].map((industry) => (
            <StaggerItem key={industry}>
              <figure className="card-lyra h-full">
                <div className="text-lyra-accent-strong" aria-label="5 stars">
                  ★★★★★
                </div>
                <blockquote className="mt-4 text-[0.95rem] italic leading-relaxed text-lyra-muted">
                  REPLACE WITH REAL QUOTE — {industry} client testimonial
                  pending Lee-Hing approval.
                </blockquote>
                <figcaption className="mt-5 text-xs font-bold uppercase tracking-wide text-lyra-primary">
                  Client name · Company · {industry}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <Link
            href="/testimonials"
            className="mt-8 inline-block text-sm font-bold text-lyra-accent-strong underline-offset-4 hover:underline"
          >
            Read more client results →
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-t border-lyra-border bg-white">
        <div className="container-lyra section-pad">
          <Reveal>
            <p className="eyebrow">Questions owners actually ask</p>
            <h2 className="heading-xl heading-accent-rule mt-3">
              Straight answers before you commit
            </h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i * 0.03, 0.2)}>
                <details className="group rounded-2xl border border-lyra-border bg-lyra-bg px-5 py-4 shadow-sm open:border-lyra-accent/40 open:shadow-md">
                  <summary className="cursor-pointer list-none font-semibold text-lyra-primary marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="mt-0.5 text-lyra-accent-strong transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm font-semibold text-lyra-primary">
                    {item.a}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-lyra-muted">
                    {item.expand}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lyra-primary-deep via-lyra-primary to-[#243556] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
        />
        <div className="container-lyra section-pad relative z-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-serif text-[clamp(1.85rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white">
              Ready to recover what&apos;s yours?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
              Free consultation. Clear next steps. No Collection. No Fee.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
              </Link>
              <Link href="/contact#whatsapp" className="btn-secondary">
                WhatsApp us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
