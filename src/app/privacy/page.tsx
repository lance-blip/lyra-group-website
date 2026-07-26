import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lyra Group collects, uses, and protects personal information — including website forms and chat conversations.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="Scaffold policy for launch. Final legal review with Lee-Hing before go-live."
      ctaLabel="Contact us"
    >
      <article className="card-lyra max-w-3xl space-y-4 text-sm leading-relaxed text-lyra-muted">
        <p>
          <strong className="text-lyra-primary">Who we are:</strong> Lyra Group
          (Pty) Ltd, Johannesburg, South Africa — professional debt recovery
          services.
        </p>
        <p>
          <strong className="text-lyra-primary">What we collect:</strong> Contact
          and company details you submit via forms, WhatsApp, email, or chat;
          technical logs required to secure the website.
        </p>
        <p>
          <strong className="text-lyra-primary">Why:</strong> To respond to
          enquiries, assess mandates, deliver services, and meet legal
          obligations. Chat and form conversations may be logged for quality,
          security, and follow-up.
        </p>
        <p>
          <strong className="text-lyra-primary">Your rights:</strong> Access,
          correction, and related POPIA rights as described in our POPIA Notice.
        </p>
        <p className="text-xs uppercase tracking-wider text-lyra-accent-strong">
          REPLACE WITH ATTORNEY-REVIEWED FINAL TEXT
        </p>
      </article>
    </PageShell>
  );
}
