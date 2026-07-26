import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Debt Collection Services South Africa",
  description:
    "Commercial and consumer debt recovery for SA SMEs — commission-based, No Collection No Fee, 6-stage professional process.",
};

const SERVICES = [
  {
    id: "commercial",
    title: "Get paid on quiet commercial invoices",
    name: "Commercial / B2B debt recovery",
    body: "Trade debt and unpaid B2B invoices — structured pursuit that protects commercial relationships where possible.",
  },
  {
    id: "consumer",
    title: "Recover consumer debt without torching your brand",
    name: "Consumer debt recovery",
    body: "Brand-safe engagement for consumer balances, within the guardrails of SA credit and collection law.",
  },
  {
    id: "demand",
    title: "Stop polite silence with a proper letter of demand",
    name: "Letter of demand & early intervention",
    body: "Early-stage formalisation that signals seriousness before matters age into harder recoveries.",
  },
  {
    id: "credit-control",
    title: "Keep collections moving without hiring a full credit team",
    name: "Outsourced credit control support",
    body: "Ongoing follow-up discipline when internal capacity is thin.",
  },
  {
    id: "legal",
    title: "Escalate with legal muscle when persuasion fails",
    name: "Legal handoff & litigation support",
    body: "Coordinated pathway when settlement stalls and formal process is required.",
  },
  {
    id: "mandate",
    title: "Know which debts are worth fighting for",
    name: "Book assessment / debt book review",
    body: "Prioritise recoverable matters — honesty over vanity file sizes.",
  },
];

const STAGES = [
  "Mandate & document intake",
  "Debtor trace & validation",
  "Professional engagement",
  "Structured escalation",
  "Settlement / legal pathway",
  "Remittance & closure",
];

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Recovery built around the problem you're actually facing"
      description="Every service is commissioned on results — not retainers that punish you for trying."
    >
      <div className="space-y-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.id} id={s.id} className="card-lyra">
              <p className="text-xs font-semibold uppercase tracking-wider text-lyra-accent-strong">
                {s.name}
              </p>
              <h2 className="mt-2 font-serif text-xl text-lyra-primary">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-lyra-muted">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="card-lyra">
          <h2 className="font-serif text-2xl">Commission model</h2>
          <p className="mt-2 text-sm text-lyra-muted">
            Placeholder tiers until Lee-Hing confirms percentages — typically
            structured by age of debt and value band. Final rates are confirmed
            in your mandate. Transparency over fine print.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-lyra-border text-lyra-primary">
                <tr>
                  <th className="py-2 pr-4 font-semibold">Debt profile</th>
                  <th className="py-2 pr-4 font-semibold">Indicative approach</th>
                  <th className="py-2 font-semibold">Fee basis</th>
                </tr>
              </thead>
              <tbody className="text-lyra-muted">
                <tr className="border-b border-lyra-border/70">
                  <td className="py-2 pr-4">Recent commercial invoices</td>
                  <td className="py-2 pr-4">Early engagement</td>
                  <td className="py-2 font-mono text-xs">REPLACE WITH RATE</td>
                </tr>
                <tr className="border-b border-lyra-border/70">
                  <td className="py-2 pr-4">Aged / escalated matters</td>
                  <td className="py-2 pr-4">Structured escalation</td>
                  <td className="py-2 font-mono text-xs">REPLACE WITH RATE</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Complex / disputed</td>
                  <td className="py-2 pr-4">Case-by-case pathway</td>
                  <td className="py-2 font-mono text-xs">CONFIRMED IN MANDATE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="process" className="card-lyra">
          <h2 className="font-serif text-2xl">Six-stage collection workflow</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {STAGES.map((stage, i) => (
              <li
                key={stage}
                className="rounded-lg border border-lyra-border bg-lyra-bg p-4"
              >
                <span className="font-mono text-xs text-lyra-accent-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 font-medium text-lyra-primary">{stage}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageShell>
  );
}
