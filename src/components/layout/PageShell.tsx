import Link from "next/link";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
};

/** Shared shell for interior pages */
export function PageShell({
  eyebrow,
  title,
  description,
  children,
  ctaHref = "/contact",
  ctaLabel = "Get a Free Consultation",
}: PageShellProps) {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10 bg-lyra-primary-deep text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(212,165,116,0.22), transparent 30%), radial-gradient(circle at 80% 60%, rgba(61,79,111,0.45), transparent 35%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-lyra-primary-deep"
        />
        <div className="container-lyra relative z-10 section-pad !pb-16 !pt-20">
          {eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-lyra-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.1] tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {description}
          </p>
          <div className="mt-9">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </section>
      <section className="container-lyra section-pad prose-lyra">{children}</section>
    </div>
  );
}
