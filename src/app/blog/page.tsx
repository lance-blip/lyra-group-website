import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Debt Recovery Insights for SA SMEs",
  description:
    "Guides on unpaid invoices, the Debt Collectors Act, and commercial vs consumer collection in South Africa — written for SME owners and answer engines.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Debt Recovery Insights for SA SMEs | Lyra Group",
    description:
      "Practical, SA-specific debt recovery and compliance writing for business owners who are owed money.",
    url: "/blog",
    type: "website",
  },
};

const FILTERS = [
  "All",
  "Debt Recovery",
  "Compliance",
  "SME Finance",
  "Industry Insights",
];

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <PageShell
      eyebrow="Blog"
      title="Clear guides for owners who are owed money"
      description="Practical, SA-specific debt recovery and compliance writing — built for Answer Engines and busy SME owners."
      ctaHref="/contact"
    >
      <div className="space-y-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <span
              key={f}
              className="rounded-full border border-lyra-border bg-white px-3 py-1 text-xs font-semibold text-lyra-secondary"
            >
              {f}
            </span>
          ))}
        </div>

        {featured ? (
          <article className="card-lyra border-lyra-accent/40 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-lyra-accent-strong">
              Featured · {featured.category}
            </p>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl">
              <Link href={`/blog/${featured.slug}`} className="hover:underline">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-lyra-muted">{featured.excerpt}</p>
            <p className="mt-4 text-xs text-lyra-muted">
              {featured.readTime} read · {featured.author}
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-lyra-accent-strong hover:underline"
            >
              Read the full guide →
            </Link>
          </article>
        ) : (
          <p className="text-sm text-lyra-muted">Articles coming soon.</p>
        )}

        {rest.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((post) => (
              <article key={post.slug} className="card-lyra">
                <p className="text-xs font-semibold uppercase tracking-wider text-lyra-accent-strong">
                  {post.category}
                </p>
                <h2 className="mt-2 font-serif text-xl">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-lyra-muted">{post.excerpt}</p>
                <p className="mt-4 text-xs text-lyra-muted">
                  {post.readTime} read · {formatDate(post.publishedAt)}
                </p>
              </article>
            ))}
          </div>
        )}

        <section className="rounded-2xl border border-lyra-border bg-white p-6 md:p-8">
          <h2 className="font-serif text-xl font-bold text-lyra-primary">
            Prefer a human conversation?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-lyra-muted">
            If unpaid invoices are already choking cash flow, skip the rabbit hole.
            Lyra Group offers a free consultation on a compliance-first,{" "}
            <strong className="text-lyra-primary">No Collection. No Fee.</strong> basis
            for qualifying commercial recoveries.
          </p>
          <Link href="/contact" className="btn-primary mt-5 inline-flex">
            Get a Free Consultation
          </Link>
        </section>
      </div>
    </PageShell>
  );
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-ZA", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
