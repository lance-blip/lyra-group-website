import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Client Results & Testimonials",
  description:
    "What recovery looks like for SA SMEs who partnered with Lyra Group — placeholders until Lee-Hing supplies verified quotes.",
};

const INDUSTRIES = [
  "Construction",
  "Professional services",
  "Healthcare",
  "Retail",
  "Wholesale",
  "Mixed SME / manufacturing",
];

export default function TestimonialsPage() {
  return (
    <PageShell
      eyebrow="Results"
      title="Results other business owners can feel in their cash flow"
      description="Verified client stories only. Until Lee-Hing supplies them, every card below is an explicit placeholder — no fabricated rand amounts."
    >
      <div className="space-y-8">
        <div className="grid gap-5 md:grid-cols-2">
          {INDUSTRIES.map((industry) => (
            <figure key={industry} className="card-lyra">
              <div className="text-lyra-accent" aria-label="5 star placeholder">
                ★★★★★
              </div>
              <blockquote className="mt-3 text-sm italic leading-relaxed text-lyra-muted">
                REPLACE WITH REAL QUOTE — {industry} client testimonial pending
                approval. Do not invent recovery amounts or timeframes.
              </blockquote>
              <figcaption className="mt-4 space-y-1 text-xs text-lyra-primary">
                <div className="font-semibold">Client name · Company name</div>
                <div className="text-lyra-muted">Industry: {industry}</div>
                <div className="font-mono text-[0.7rem] text-lyra-muted">
                  Amount recovered: REPLACE · Timeframe: REPLACE
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="card-lyra border-dashed">
          <h2 className="font-serif text-xl">Video testimonials</h2>
          <p className="mt-2 text-sm text-lyra-muted">
            Placeholder section for future video embeds. Structure reserved —
            no mock videos.
          </p>
          <div className="mt-4 flex h-40 items-center justify-center rounded-xl bg-lyra-star/50 text-xs font-semibold uppercase tracking-wider text-lyra-muted">
            Video placeholder
          </div>
        </div>
      </div>
    </PageShell>
  );
}
