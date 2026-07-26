import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "POPIA Notice",
  description:
    "Lyra Group POPIA notice — lawful processing of personal information for debt recovery and website enquiries.",
};

export default function PopiaPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="POPIA Notice"
      description="How we process personal information under the Protection of Personal Information Act 4 of 2013."
      ctaLabel="Contact us"
    >
      <article className="card-lyra max-w-3xl space-y-4 text-sm leading-relaxed text-lyra-muted">
        <p>
          Lyra Group processes personal information for legitimate debt recovery
          and business enquiry purposes, with security and purpose limitation in
          mind.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Information officer / contact: REPLACE_WITH_LEE_HING_EMAIL</li>
          <li>Categories of data: identity, contact, debt file particulars</li>
          <li>Recipients: operators strictly required to perform the mandate</li>
          <li>Retention: only as long as needed for the purpose or law</li>
          <li>Cross-border transfers: disclosed if applicable at mandate stage</li>
        </ul>
        <p className="text-xs uppercase tracking-wider text-lyra-accent-strong">
          REPLACE WITH ATTORNEY-REVIEWED FINAL TEXT
        </p>
      </article>
    </PageShell>
  );
}
