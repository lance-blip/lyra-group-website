import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Debt Recovery Insights for SA SMEs",
  description:
    "Guides on unpaid invoices, the Debt Collectors Act, and commercial vs consumer collection in South Africa.",
};

const POSTS = [
  {
    slug: "recover-unpaid-invoices-south-africa",
    title:
      "How to Recover Unpaid Invoices in South Africa: A Complete Guide for SMEs (2026)",
    category: "Debt Recovery",
    read: "12 min",
    excerpt:
      "Why invoices go unpaid, when internal recovery hits a wall, and how professional collection actually works.",
  },
  {
    slug: "debt-collectors-act-114-of-1998",
    title:
      "The Debt Collectors Act 114 of 1998: What Every South African Business Owner Needs to Know",
    category: "Compliance",
    read: "11 min",
    excerpt:
      "What registered collectors can and cannot do — and why compliance protects your business, not just theirs.",
  },
  {
    slug: "commercial-vs-consumer-debt-collection",
    title:
      "Commercial vs Consumer Debt Collection in South Africa: Key Differences",
    category: "SME Finance",
    read: "10 min",
    excerpt:
      "Definitions, regulatory differences, and which service path fits your book of debt.",
  },
];

const FILTERS = ["All", "Debt Recovery", "Compliance", "SME Finance", "Industry Insights"];

export default function BlogPage() {
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

        <article className="card-lyra border-lyra-accent/40 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-lyra-accent-strong">
            Featured · {POSTS[0].category}
          </p>
          <h2 className="mt-2 font-serif text-2xl md:text-3xl">
            <Link href={`/blog/${POSTS[0].slug}`} className="hover:underline">
              {POSTS[0].title}
            </Link>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-lyra-muted">{POSTS[0].excerpt}</p>
          <p className="mt-4 text-xs text-lyra-muted">{POSTS[0].read} read · Full article in Phase 2</p>
        </article>

        <div className="grid gap-5 md:grid-cols-2">
          {POSTS.slice(1).map((post) => (
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
              <p className="mt-4 text-xs text-lyra-muted">{post.read} read · Scaffold</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
