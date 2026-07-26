import Link from "next/link";
import { LyraWordmark } from "@/components/logo/LyraMark";

const FOOTER_LINKS = [
  {
    title: "Explore",
    links: [
      { href: "/services", label: "Services" },
      { href: "/about", label: "About Us" },
      { href: "/compliance", label: "Compliance" },
      { href: "/testimonials", label: "Client Results" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Get help",
    links: [
      { href: "/contact", label: "Free Consultation" },
      { href: "/contact#whatsapp", label: "WhatsApp" },
      { href: "/services#process", label: "How it works" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/popia", label: "POPIA Notice" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-lyra-border bg-lyra-primary text-lyra-star">
      <div className="container-lyra section-pad !pb-10 !pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <LyraWordmark inverted showTagline />
            <p className="max-w-xs text-sm leading-relaxed text-lyra-star/80">
              Professional debt recovery for South African SMEs. Compliant.
              Personal. Paid only when you are.
            </p>
            <p className="text-xs text-lyra-accent">
              Johannesburg · Mon–Fri 08:00–17:00
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-lyra-accent">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-lyra-star/85 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-lyra-star/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Lyra Group (Pty) Ltd. All rights
            reserved.
          </p>
          <p>
            This conversation may be logged.{" "}
            <Link href="/privacy" className="underline hover:text-lyra-accent">
              View our Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
