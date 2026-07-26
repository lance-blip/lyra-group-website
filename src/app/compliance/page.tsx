import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "POPIA Compliant Debt Collection South Africa",
  description:
    "How Lyra Group's compliance — CDC, POPIA, trust accounts, and key SA Acts — protects your business during debt recovery.",
};

const REGS = [
  { name: "CDC", meaning: "Council for Debt Collectors alignment — lawful collection conduct." },
  { name: "CIPC", meaning: "Registered company standing — you know who you are contracting with." },
  { name: "SARS", meaning: "Tax-compliant operator — reduces counterparty risk on your side." },
  { name: "POPIA", meaning: "Lawful processing of personal information in recovery workflows." },
  { name: "Information Regulator", meaning: "Operating with awareness of SA data-protection oversight." },
];

const ACTS = [
  {
    act: "Debt Collectors Act 114 of 1998",
    plain: "Sets the rules for who may collect and how — your shield against cowboy tactics done in your name.",
  },
  {
    act: "National Credit Act 34 of 2005",
    plain: "Where consumer credit applies, collection must respect NCA boundaries and debtor rights.",
  },
  {
    act: "POPIA 4 of 2013",
    plain: "Personal information used in recovery must be processed lawfully, minimally, and securely.",
  },
  {
    act: "Prescription Act 68 of 1969",
    plain: "Debts can expire. Delay is not neutral — prescription risk is why timing matters.",
  },
  {
    act: "Magistrates' Courts / civil procedure touchpoints",
    plain: "When matters escalate, procedure protects enforceability — not improvisation.",
  },
  {
    act: "Consumer Protection Act (where relevant)",
    plain: "Consumer matters demand fair dealing; brand-safe recovery still means lawful recovery.",
  },
];

export default function CompliancePage() {
  return (
    <PageShell
      eyebrow="Compliance"
      title="Compliance isn't our paperwork. It's your protection."
      description="Every registration and statute below is framed as a client benefit — defensible process, lower reputational risk, lawful recovery."
    >
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          {REGS.map((r) => (
            <div key={r.name} className="card-lyra">
              <h2 className="font-serif text-xl text-lyra-primary">{r.name}</h2>
              <p className="mt-2 text-sm text-lyra-muted">{r.meaning}</p>
            </div>
          ))}
        </div>

        <div className="card-lyra overflow-x-auto">
          <h2 className="font-serif text-2xl">Key legislation — plain English</h2>
          <table className="mt-4 min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-lyra-border">
                <th className="py-2 pr-4 font-semibold text-lyra-primary">Act</th>
                <th className="py-2 font-semibold text-lyra-primary">What it means for you</th>
              </tr>
            </thead>
            <tbody>
              {ACTS.map((row) => (
                <tr key={row.act} className="border-b border-lyra-border/70 align-top">
                  <td className="py-3 pr-4 font-medium text-lyra-primary">{row.act}</td>
                  <td className="py-3 text-lyra-muted">{row.plain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-lyra">
            <h3 className="font-serif text-lg">Trust account</h3>
            <p className="mt-2 text-sm text-lyra-muted">
              Client money handling is ring-fenced with professional discipline —
              recovered funds are not mixed into casual operating cash.
            </p>
          </div>
          <div className="card-lyra">
            <h3 className="font-serif text-lg">POPIA commitment</h3>
            <p className="mt-2 text-sm text-lyra-muted">
              Debtor and client data is processed for legitimate recovery purposes
              with security and minimality in mind. See our POPIA Notice.
            </p>
          </div>
          <div className="card-lyra">
            <h3 className="font-serif text-lg">Professional indemnity</h3>
            <p className="mt-2 text-sm text-lyra-muted">
              PI cover details to be confirmed with Lee-Hing for final public
              wording — scaffold reserved.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
