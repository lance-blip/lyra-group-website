"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LyraWordmark } from "@/components/logo/LyraMark";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/compliance", label: "Compliance" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open ? "nav-glass" : "nav-solid"
      }`}
    >
      <div className="container-lyra flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <LyraWordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-lyra-secondary transition hover:text-lyra-accent-strong"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-4 !py-2.5 text-sm">
            Get a Free Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-lyra-border bg-white/70 px-3 py-2 text-sm font-semibold text-lyra-primary backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-lyra-border/80 bg-lyra-bg/95 backdrop-blur-md lg:hidden">
          <nav className="container-lyra flex flex-col gap-1 py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-lyra-primary hover:bg-lyra-star/50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-2 text-center"
              onClick={() => setOpen(false)}
            >
              Get a Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
