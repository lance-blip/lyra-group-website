import Link from "next/link";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
};

/** Shared shell for Phase 1 page scaffolds — content filled in later phases */
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
      <section className="border-b border-lyra-border bg-gradient-to-b from-lyra-primary-deep to-lyra-primary text-lyra-star">
        <div className="container-lyra section-pad !pb-14 !pt-16">
          {eyebrow && <p className="eyebrow !text-lyra-accent mb-3">{eyebrow}</p>}
          <h1 className="max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-lyra-star/85 sm:text-lg">
            {description}
          </p>
          <div className="mt-8">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </section>
      <section className="container-lyra section-pad prose-lyra">
        {children ?? (
          <div className="card-lyra max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-lyra-accent-strong">
              Phase 1 scaffold
            </p>
            <p className="mt-2 text-lyra-muted">
              Full StoryBrand copy, components, and SEO content land in the next
              build milestones. Structure and navigation are live.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
