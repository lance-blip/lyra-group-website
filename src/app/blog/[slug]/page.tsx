import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArticleCta,
  ArticleFaq,
  ArticleMetaBar,
  AuthorBio,
  ShareHints,
} from "@/components/blog/ArticleExtras";
import {
  JsonLd,
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/components/blog/JsonLd";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { estimateWordCount, getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lyra-spike.quikle.co.za";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  const title = post.metaTitle || post.title;
  const description = post.description;
  const url = `/blog/${post.slug}`;

  return {
    title,
    description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      siteName: "Lyra Group",
      locale: "en_ZA",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const words = estimateWordCount(post.content);
  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const blogSchema = buildBlogPostingSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author,
    authorRole: post.authorRole,
    siteUrl: SITE_URL,
  });
  const faqSchema = buildFaqSchema(post.faqs);
  const crumbSchema = buildBreadcrumbSchema({
    siteUrl: SITE_URL,
    slug: post.slug,
    title: post.title,
  });

  return (
    <article>
      <JsonLd data={blogSchema} />
      <JsonLd data={crumbSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

      <header className="relative overflow-hidden border-b border-white/10 bg-lyra-primary-deep text-white">
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
        <div className="container-lyra relative z-10 section-pad !pb-14 !pt-16">
          <nav className="mb-5 text-xs text-white/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white/90 line-clamp-1">{post.category}</li>
            </ol>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-lyra-accent">
            {post.category}
          </p>
          <h1 className="max-w-3xl font-serif text-[clamp(1.75rem,4vw,2.85rem)] font-bold leading-[1.15] tracking-tight text-white">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75">
            <span>
              By <strong className="text-white">{post.author}</strong>
            </span>
            <span>{post.authorRole}</span>
            <span>{post.readTime} read</span>
            <span>~{words.toLocaleString("en-ZA")} words</span>
          </div>
        </div>
      </header>

      <div className="container-lyra section-pad">
        <div className="mb-8">
          <ArticleMetaBar post={post} />
        </div>

        {post.featuredImageDescription ? (
          <figure className="mb-10 overflow-hidden rounded-2xl border border-lyra-border bg-gradient-to-br from-lyra-primary-deep via-[#152238] to-[#1B2A4A] p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-lyra-accent">
              Featured image brief
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
              {post.featuredImageDescription}
            </p>
            <figcaption className="mt-4 text-xs text-white/55">
              Placeholder for production photography / OG image art direction.
            </figcaption>
          </figure>
        ) : null}

        <ArticleBody html={post.html} />

        <ArticleFaq faqs={post.faqs} />
        <AuthorBio author={post.author} authorRole={post.authorRole} />
        <ShareHints title={post.title} slug={post.slug} />
        <ArticleCta />

        {related.length > 0 && (
          <section className="mt-14 border-t border-lyra-border pt-10">
            <h2 className="font-serif text-2xl font-bold text-lyra-primary">
              Related guides
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {related.map((r) => (
                <article key={r.slug} className="card-lyra">
                  <p className="text-xs font-semibold uppercase tracking-wider text-lyra-accent-strong">
                    {r.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-semibold">
                    <Link href={`/blog/${r.slug}`} className="hover:underline">
                      {r.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-lyra-muted">{r.excerpt}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
