"use client";

import Link from "next/link";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  EmberPolyhedron,
  LyraConstellation,
  PlanOrbs,
} from "@/components/three";

const PROBLEMS = [
  {
    kind: "External",
    title: "Debtors are not paying",
    body: "Invoices age. Follow-ups stall. Your team is busy delivering work — not chasing money already earned.",
  },
  {
    kind: "Internal",
    title: "Cash flow pressure is personal",
    body: "Salaries, suppliers, tax — unpaid invoices do not wait politely. The stress lands on the owner.",
  },
  {
    kind: "Philosophical",
    title: "You should not write off what is yours",
    body: "Hoping it resolves is not a recovery strategy. Professional pursuit protects the value you already created.",
  },
];

const PLAN = [
  {
    step: "01",
    title: "Submit your mandate",
    body: "Share the debt details. We validate, advise, and set expectations — no upfront fee theatre.",
  },
  {
    step: "02",
    title: "We pursue professionally",
    body: "Structured outreach, lawful pressure, clear documentation. You get status — not silence.",
  },
  {
    step: "03",
    title: "You get paid",
    body: "Recovered funds flow back to you. We only earn when recovery lands. No collection. No fee.",
  },
];

const SERVICES = [
  {
    title: "When B2B invoices go quiet",
    body: "Commercial recovery built for SME credit relationships — firm, documented, relationship-aware.",
    href: "/services#commercial",
  },
  {
    title: "When consumer accounts stall",
    body: "Compliant consumer collection with POPIA discipline and professional tone throughout.",
    href: "/services#consumer",
  },
  {
    title: "When the trail goes cold",
    body: "Skip tracing and debtor location so pursuit does not die on a wrong address.",
    href: "/services#tracing",
  },
  {
    title: "When you need the full path",
    body: "From letter of demand through structured escalation — one guide, one process.",
    href: "/services#workflow",
  },
];

const VALUES = [
  "WE FIND",
  "WE STAND FIRM",
  "WE ILLUMINATE",
  "WE RISE",
  "WE FINISH",
];

const FAQS = [
  {
    q: "What happens if you can't collect?",
    a: "You pay no collection fee on amounts we do not recover. We close with a clear outcome report so you know what was tried and why.",
  },
  {
    q: "How do you handle debtors who dispute the debt?",
    a: "We pause aggressive pursuit, request your supporting documents, and assess the dispute on facts — not pressure tactics.",
  },
  {
    q: "Is there a minimum debt amount?",
    a: "We focus on commercial matters that justify professional pursuit. Share the balance on consultation and we will advise honestly.",
  },
  {
    q: "How long does the process take?",
    a: "Many matters move within weeks; complex or disputed files take longer. Timelines depend on debtor engagement and documentation quality.",
  },
  {
    q: "Are you registered and POPIA compliant?",
    a: "Yes — compliance is how we protect you. See our Compliance page for registrations, legislation, and data commitments.",
  },
  {
    q: "What does 'No Collection. No Fee.' actually mean?",
    a: "Our collection fee is commission-based on successful recovery. If we do not collect, you do not pay that fee.",
  },
  {
    q: "Will collection damage my client relationships?",
    a: "We use professional, lawful communication. Many clients prefer a third party so the commercial relationship is not the daily chaser.",
  },
  {
    q: "Can you work with debts already prescribed or very old?",
    a: "Prescription and age change options. We assess enforceability up front and will not sell you false hope.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-shell">
        <div className="hero-stars" aria-hidden />
        <div className="hero-overlay" aria-hidden />
        <div className="hero-content">
          <div className="container-lyra hero-grid">
            <div className="hero-copy">
              <Reveal>
                <span className="hero-badge">No Collection. No Fee.</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="heading-display mt-6 max-w-4xl text-balance">
                  Your invoices are unpaid.{" "}
                  <span className="block sm:inline">Your cash flow is suffering.</span>{" "}
                  <span className="block">That ends here.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="hero-sub mt-6">
                  Professional debt recovery for South African SMEs who extended
                  credit, delivered the work, and are still waiting to be paid.
                  Lyra Group is your guide — compliant, personal, results-based.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get a Free Consultation
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    See how recovery works
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <p className="hero-meta mt-10">
                  Johannesburg · Female-owned · Compliance-first
                </p>
              </Reveal>
            </div>
            {/* Focal 3D Lyra asterism — lazy R3F, does not block first paint */}
            <div className="hero-3d" aria-hidden="true">
              <LyraConstellation hero height="100%" className="hero-3d-canvas" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────── */}
      <section className="section-pad bg-lyra-bg">
        <div className="container-lyra">
          <Reveal>
            <p className="eyebrow">The problem</p>
            <h2 className="heading-xl heading-accent-rule mt-3 max-w-2xl">
              You already earned this money. Chasing it should not be your second job.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <StaggerItem key={p.kind}>
                <article className="card-lyra h-full">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-lyra-accent-strong">
                    {p.kind}
                  </p>
                  <h3 className="heading-lg mt-3">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-lyra-muted">
                    {p.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── GUIDE ────────────────────────────────────────── */}
      <section className="section-pad bg-lyra-surface">
        <div className="container-lyra grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Your guide</p>
            <h2 className="heading-xl heading-accent-rule mt-3">
              Lyra Group stands with you — not above you
            </h2>
            <p className="mt-6 text-base leading-relaxed text-lyra-muted">
              Founded by Lee-Hing Sinnye (BBA), Lyra Group is a Johannesburg
              debt collection agency built for SME owners who need recovery
              without intimidation theatre or upfront fee traps.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-lyra-muted">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lyra-accent-strong" />
                Compliance-first pursuit that protects your reputation
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lyra-accent-strong" />
                Personal service — you know who is working your file
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lyra-accent-strong" />
                Female-owned, commission-aligned: we win when you get paid
              </li>
            </ul>
            <Link href="/about" className="btn-secondary-light mt-8">
              Meet the team behind the recovery
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-lyra-border bg-lyra-primary-deep shadow-lg">
              <LyraConstellation height={320} subtle />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-lyra-primary-deep via-lyra-primary-deep/80 to-transparent p-6 pt-16">
                <p className="font-serif text-lg text-lyra-star">
                  Named for the Lyra constellation — stars that guide value home.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES STRIP ─────────────────────────────────── */}
      <section className="values-strip py-8 md:py-10">
        <div className="container-lyra">
          <Stagger className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
            {VALUES.map((v) => (
              <StaggerItem key={v}>
                <span className="font-serif text-sm font-semibold tracking-[0.14em] text-lyra-accent sm:text-base">
                  {v}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── PLAN ─────────────────────────────────────────── */}
      <section className="section-pad bg-lyra-bg">
        <div className="container-lyra">
          <Reveal>
            <p className="eyebrow">The plan</p>
            <h2 className="heading-xl heading-accent-rule mt-3 max-w-2xl">
              Three clear steps from unpaid invoice to money in your account
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <PlanOrbs className="mt-8 hidden md:block" />
          </Reveal>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {PLAN.map((step) => (
              <StaggerItem key={step.step}>
                <article className="card-lyra h-full">
                  <span className="font-mono text-sm font-bold text-lyra-accent-strong">
                    {step.step}
                  </span>
                  <h3 className="heading-lg mt-3">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-lyra-muted">
                    {step.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="section-pad bg-lyra-surface">
        <div className="container-lyra">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2 className="heading-xl heading-accent-rule mt-3 max-w-xl">
                Recovery shaped around the problem you are actually facing
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="hidden lg:block">
              <EmberPolyhedron />
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <StaggerItem key={s.title}>
                <Link href={s.href} className="card-lyra block h-full no-underline">
                  <h3 className="heading-lg">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-lyra-muted">
                    {s.body}
                  </p>
                  <span className="mt-5 inline-block text-sm font-semibold text-lyra-accent-strong">
                    Explore service →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="mt-10">
              <Link href="/services" className="btn-secondary-light">
                View all services & rates
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="section-pad bg-lyra-primary-deep text-lyra-star">
        <div className="container-lyra">
          <Reveal>
            <p className="eyebrow !text-lyra-accent">The scale of the problem</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              South Africa&apos;s unpaid debt is not a side issue — it is a cash-flow crisis for SMEs
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="font-mono text-4xl font-bold tracking-tight text-lyra-accent sm:text-5xl">
                  <CountUp end={2.4} prefix="R" suffix="T" decimals={1} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Household debt context in South Africa — the pressure that
                  makes recovery harder and more urgent for businesses.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="font-mono text-4xl font-bold tracking-tight text-lyra-accent sm:text-5xl">
                  <CountUp end={500} prefix="R" suffix="B+" decimals={0} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Non-performing loans and distressed books at scale — your
                  unpaid invoice sits inside a national recovery challenge.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-xs text-white/55">
              Figures are industry-context markers for narrative scale, not a
              claim about Lyra Group&apos;s book. Sources refined at content lock.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SUCCESS / CONSTELLATION ──────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-lyra-bg">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-80 lg:block">
          <LyraConstellation height={480} />
        </div>
        <div className="container-lyra relative">
          <Reveal>
            <p className="eyebrow">Success</p>
            <h2 className="heading-xl heading-accent-rule mt-3 max-w-xl">
              What winning looks like for the business owner
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-lyra-muted">
              Debt recovered. Cash flow breathing again. Less time on awkward
              follow-ups — more time running the business you built. That is the
              outcome the guide is measured on.
            </p>
            <Link href="/testimonials" className="btn-secondary-light mt-8">
              See client result stories
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-pad bg-lyra-surface">
        <div className="container-lyra">
          <Reveal>
            <p className="eyebrow">Social proof</p>
            <h2 className="heading-xl heading-accent-rule mt-3">
              Results other owners can feel in their cash flow
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-lyra-muted">
              Placeholder testimonials for launch structure — Lee-Hing replaces
              with real client quotes before go-live. No fabricated names as
              final truth.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "REPLACE WITH REAL QUOTE — e.g. recovered outstanding invoices within weeks without damaging the commercial relationship.",
                name: "Client name",
                company: "Company · Industry",
              },
              {
                quote:
                  "REPLACE WITH REAL QUOTE — e.g. clear updates, compliant process, money back in the account.",
                name: "Client name",
                company: "Company · Industry",
              },
              {
                quote:
                  "REPLACE WITH REAL QUOTE — e.g. finally a collector that explains the path and only earns on results.",
                name: "Client name",
                company: "Company · Industry",
              },
            ].map((t, i) => (
              <StaggerItem key={i}>
                <figure className="card-lyra flex h-full flex-col">
                  <blockquote className="flex-1 text-sm leading-relaxed text-lyra-muted">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-lyra-border pt-4">
                    <p className="text-sm font-semibold text-lyra-primary">{t.name}</p>
                    <p className="text-xs text-lyra-muted">{t.company}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section-pad bg-lyra-bg">
        <div className="container-lyra max-w-3xl">
          <Reveal>
            <p className="eyebrow">Questions owners actually ask</p>
            <h2 className="heading-xl heading-accent-rule mt-3">
              Straight answers before you hand over a mandate
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.03}>
                <details className="group card-lyra !p-0 open:shadow-md">
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-lyra-primary marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="mt-0.5 text-lyra-accent-strong transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-lyra-border px-5 py-4 text-sm leading-relaxed text-lyra-muted">
                    <p>
                      <strong className="text-lyra-primary">In short: </strong>
                      {item.a}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — same contrast treatment as hero ─── */}
      <section className="relative isolate overflow-hidden bg-lyra-primary-deep">
        <div className="hero-stars opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(6,10,20,0.75) 0%, rgba(10,16,32,0.88) 50%, rgba(10,16,32,0.95) 100%)",
          }}
        />
        <div className="container-lyra relative z-[2] section-pad text-center">
          <Reveal>
            <p className="eyebrow !text-lyra-accent">Next step</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to recover what&apos;s yours?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90">
              Book a free consultation. Bring the invoices. Leave with a clear
              path — and zero obligation theatre.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
              </Link>
              <Link href="/compliance" className="btn-secondary">
                Review our compliance
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
