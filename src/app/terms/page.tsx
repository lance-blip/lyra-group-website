import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Website terms for lyragroup.co.za — use of site content, enquiries, and relationship to formal collection mandates.",
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      description="Website terms of use. A collection mandate is a separate written agreement."
      ctaLabel="Contact us"
    >
      <article className="card-lyra max-w-3xl space-y-4 text-sm leading-relaxed text-lyra-muted">
        <p>
          By using this website you agree to these terms. Site content is general
          information, not legal advice. Submitting an enquiry does not create a
          collection mandate until both parties sign one.
        </p>
        <p>
          Commission rates, timelines, and recoverability assessments are
          confirmed in writing. &quot;No Collection. No Fee.&quot; applies as
          defined in the mandate, not as an open-ended warranty of success.
        </p>
        <p className="text-xs uppercase tracking-wider text-lyra-accent-strong">
          REPLACE WITH ATTORNEY-REVIEWED FINAL TEXT
        </p>
      </article>
    </PageShell>
  );
}
