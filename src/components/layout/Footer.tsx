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
    <footer className="border-t border-white/10 bg-lyra-primary-deep text-lyra-star">
      <div className="container-lyra section-pad !pb-10 !pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <LyraWordmark inverted showTagline />
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              Professional debt recovery for South African SMEs. Compliant.
              Personal. Paid only when you are.
            </p>
            <p className="text-xs font-semibold tracking-wide text-lyra-accent">
              Johannesburg · Mon–Fri 08:00–17:00
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-lyra-accent">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition hover:text-lyra-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar — always centre-aligned */}
        <div className="mt-14 space-y-2 border-t border-white/10 pt-7 text-center text-xs leading-relaxed text-white/65">
          <p>
            © 2026 Lyra Group (Pty) Ltd. All Rights Reserved. POPIA Compliant.
          </p>
          <p>
            Website created by{" "}
            <a
              href="https://www.quikle.co.za"
              className="font-semibold text-lyra-accent hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Quikle AI Agents
            </a>
          </p>
          <p className="pt-1 text-white/50">
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
