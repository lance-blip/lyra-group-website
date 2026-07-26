import Link from "next/link";
import type { BlogFaq, BlogPostMeta } from "@/lib/blog";

export function ArticleMetaBar({ post }: { post: BlogPostMeta }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-lyra-muted">
      <span className="rounded-full bg-lyra-accent/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-lyra-accent-strong">
        {post.category}
      </span>
      <time dateTime={post.publishedAt}>
        Published {formatDate(post.publishedAt)}
      </time>
      {post.updatedAt !== post.publishedAt && (
        <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>
      )}
      <span>{post.readTime} read</span>
    </div>
  );
}

export function AuthorBio({
  author,
  authorRole,
}: {
  author: string;
  authorRole: string;
}) {
  return (
    <aside className="mt-14 rounded-2xl border border-lyra-border bg-white p-6 shadow-sm md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-lyra-accent-strong">
        About the author
      </p>
      <h2 className="mt-2 font-serif text-xl font-bold text-lyra-primary">{author}</h2>
      <p className="mt-1 text-sm font-medium text-lyra-secondary">{authorRole}</p>
      <p className="mt-4 text-sm leading-relaxed text-lyra-muted">
        Lee-Hing Sinnye is the founder of Lyra Group (Pty) Ltd, a Johannesburg-based,
        female-owned debt collection agency built for South African SMEs who need
        compliant, personal recovery — without upfront fees. Her work focuses on
        commercial debt recovery, POPIA-aware process design, and restoring cash flow
        for owners who have already delivered the work.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/about" className="btn-secondary !px-4 !py-2 text-sm">
          About Lyra Group
        </Link>
        <Link href="/compliance" className="btn-secondary !px-4 !py-2 text-sm">
          Compliance credentials
        </Link>
      </div>
    </aside>
  );
}

export function ArticleFaq({ faqs }: { faqs: BlogFaq[] }) {
  if (!faqs.length) return null;
  return (
    <section className="mt-14" aria-labelledby="article-faq-heading">
      <h2 id="article-faq-heading" className="font-serif text-2xl font-bold text-lyra-primary md:text-3xl">
        Frequently asked questions
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-lyra-muted">
        Straight answers first — then the detail. Written so you (and AI search tools)
        can extract a complete answer without hunting.
      </p>
      <div className="mt-6 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-lyra-border bg-white px-5 py-4 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none font-semibold text-lyra-primary marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{faq.question}</span>
                <span className="mt-0.5 text-lyra-accent-strong transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <div className="mt-3 space-y-2 border-t border-lyra-border pt-3 text-sm leading-relaxed text-lyra-text/95">
              <p className="font-medium text-lyra-primary">{faq.answer}</p>
              {faq.explanation ? <p className="text-lyra-muted">{faq.explanation}</p> : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ArticleCta() {
  return (
    <section className="mt-14 rounded-2xl bg-lyra-primary-deep px-6 py-10 text-white md:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-lyra-accent">
        Next step
      </p>
      <h2 className="mt-3 max-w-xl font-serif text-2xl font-bold md:text-3xl">
        Ready to recover what is already yours?
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
        If unpaid invoices are choking cash flow, you do not need another lecture —
        you need a compliant guide and a clear plan. Lyra Group works on a{" "}
        <strong className="text-white">No Collection. No Fee.</strong> basis for
        qualifying commercial recoveries.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary">
          Get a Free Consultation
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          View services
        </Link>
      </div>
    </section>
  );
}

export function ShareHints({ title, slug }: { title: string; slug: string }) {
  const path = `/blog/${slug}`;
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-lyra-border pt-6 text-sm text-lyra-muted">
      <span className="font-semibold text-lyra-secondary">Share:</span>
      <a
        className="underline-offset-2 hover:underline"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://lyragroup.co.za${path}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="underline-offset-2 hover:underline"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://lyragroup.co.za${path}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        X
      </a>
      <a
        className="underline-offset-2 hover:underline"
        href={`https://wa.me/?text=${encodeURIComponent(`${title} https://lyragroup.co.za${path}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-ZA", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
