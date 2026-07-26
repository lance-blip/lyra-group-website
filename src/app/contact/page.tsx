import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Consultation",
  description:
    "Ready to recover what's yours? Contact Lyra Group for a free debt recovery consultation. Johannesburg · Mon–Fri 08:00–17:00.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-lyra-border bg-gradient-to-b from-lyra-primary-deep to-lyra-primary text-lyra-star">
        <div className="container-lyra section-pad !pb-14 !pt-16">
          <p className="eyebrow !text-lyra-accent">Contact</p>
          <h1 className="mt-2 max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Ready to recover what&apos;s yours?
          </h1>
          <p className="mt-4 max-w-2xl text-base text-lyra-star/85 sm:text-lg">
            Tell us about the debt. We&apos;ll respond with clear next steps —
            no retainer theatre, no pressure scripts.
          </p>
        </div>
      </section>

      <section className="container-lyra section-pad">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-lyra">
            <h2 className="font-serif text-2xl text-lyra-primary">
              Free consultation form
            </h2>
            <p className="mt-2 text-sm text-lyra-muted">
              Fields marked required help us qualify the matter quickly.
              Honeypot spam protection included; Turnstile optional in Phase 2.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-5">
            <div id="whatsapp" className="card-lyra">
              <h2 className="font-serif text-xl">WhatsApp</h2>
              <p className="mt-2 text-sm text-lyra-muted">
                Prefer chat? Message us during business hours.
              </p>
              <a
                href="https://wa.me/27000000000"
                className="btn-primary mt-4 !bg-[#25D366] hover:!bg-[#1ebe57]"
              >
                WhatsApp Lyra Group
              </a>
              <p className="mt-2 text-xs text-lyra-muted">
                Number placeholder — replace when Lee-Hing confirms.
              </p>
            </div>

            <div className="card-lyra">
              <h2 className="font-serif text-xl">Details</h2>
              <ul className="mt-3 space-y-2 text-sm text-lyra-muted">
                <li>
                  <strong className="text-lyra-primary">Hours:</strong>{" "}
                  Monday–Friday 08:00–17:00
                </li>
                <li>
                  <strong className="text-lyra-primary">Location:</strong>{" "}
                  Johannesburg, South Africa
                </li>
                <li>
                  <strong className="text-lyra-primary">Email:</strong>{" "}
                  REPLACE_WITH_LEE_HING_EMAIL
                </li>
              </ul>
            </div>

            <div className="card-lyra">
              <h2 className="font-serif text-xl">AI assistant</h2>
              <p className="mt-2 text-sm text-lyra-muted">
                Site chatbot widget mounts globally in a later milestone
                (n8n → MiniMax M3). Spike API already live at{" "}
                <code className="font-mono text-xs">/api/chat</code>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
