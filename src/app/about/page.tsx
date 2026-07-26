import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { HandshakeIllustration } from "@/components/illustrations/HandshakeIllustration";
import { LyraConstellation } from "@/components/three";

export const metadata: Metadata = {
  title: "About Lyra Group — Female-Owned Debt Collection Johannesburg",
  description:
    "Meet Lyra Group: founder-led, compliance-first debt recovery for SA SMEs. Named for the constellation that guides money home.",
};

const VALUES = [
  {
    title: "WE FIND",
    body: "We locate debtors and facts others lose in the noise — trace, validate, then act.",
  },
  {
    title: "WE STAND FIRM",
    body: "Firm does not mean abusive. We hold the line with lawful pressure and professional tone.",
  },
  {
    title: "WE ILLUMINATE",
    body: "Clear updates. No black-box collection. You understand status, risks, and next steps.",
  },
  {
    title: "WE RISE",
    body: "When matters stall, we escalate with structure — not panic, not silence.",
  },
  {
    title: "WE FINISH",
    body: "Recovery is not activity theatre. We close the loop: settlement, remittance, or honest closure.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About us"
      title="Guided by the stars that lead money home"
      description="Founder-led. Compliance-first. Built for SA businesses tired of being ignored by their own debtors."
    >
      <div className="mx-auto max-w-3xl space-y-10">
        <section className="card-lyra overflow-hidden !p-0">
          <HandshakeIllustration className="h-auto w-full" />
          <div className="p-6">
            <h2 className="font-serif text-2xl">Partnership, not pressure theatre</h2>
            <p className="mt-2 text-sm leading-relaxed text-lyra-muted">
              Lyra Group works beside SME owners who extended credit in good
              faith. Recovery should feel like a professional alliance — clear,
              lawful, and aligned to results.
            </p>
          </div>
        </section>

        <section className="card-lyra">
          <h2 className="font-serif text-2xl">Founder story</h2>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-xl bg-lyra-star/60 text-center text-xs font-semibold uppercase tracking-wider text-lyra-muted sm:h-44 sm:w-40">
              Professional photo
              <br />
              placeholder
              <br />
              (Lee-Hing)
            </div>
            <div className="text-sm leading-relaxed text-lyra-muted">
              <p>
                Lyra Group was founded by Lee-Hing Sinnye (BBA) after watching
                SME owners lose sleep over money they had already earned —
                invoices delivered, relationships strained, cash flow stuck.
              </p>
              <p className="mt-3">
                The agency exists as a guide, not a bully: personal service,
                compliance discipline, and a commission model that only wins when
                you do.
              </p>
            </div>
          </div>
        </section>

        <section className="card-lyra relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-70">
            <LyraConstellation height={240} subtle />
          </div>
          <div className="relative max-w-lg">
            <h2 className="font-serif text-2xl">Brand origin — Lyra</h2>
            <p className="mt-2 text-sm leading-relaxed text-lyra-muted">
              Named after the Lyra constellation — stars associated with guidance
              and precision. Debt recovery is navigation in the dark: find the
              path, hold course, bring value home.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl">Values</h2>
          <div className="mt-4 grid gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="card-lyra border-l-4 border-l-lyra-accent">
                <h3 className="font-serif text-lg tracking-wide text-lyra-primary">
                  {v.title}
                </h3>
                <p className="mt-1 text-sm text-lyra-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card-lyra">
          <h2 className="font-serif text-2xl">Mission & vision</h2>
          <p className="mt-2 text-sm leading-relaxed text-lyra-muted">
            <strong className="text-lyra-primary">Mission:</strong> Help South
            African SME owners recover what they are owed through compliant,
            personal, results-based collection.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-lyra-muted">
            <strong className="text-lyra-primary">Vision:</strong> A market where
            professional recovery is accessible, transparent, and never a
            hostage to upfront fees.
          </p>
        </section>

        <section className="card-lyra">
          <h2 className="font-serif text-2xl">Female-owned. Stated with pride.</h2>
          <p className="mt-2 text-sm leading-relaxed text-lyra-muted">
            Lyra Group is female-owned. That is not a footnote — it is part of
            how we show up: rigorous, human, and unwilling to hide behind
            aggressive collection theatre. BBBEE positioning details to be
            confirmed with Lee-Hing for final copy.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
