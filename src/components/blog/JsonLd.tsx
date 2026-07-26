/** Inject JSON-LD without next/script (Workers-safe). */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildBlogPostingSchema(opts: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  authorRole: string;
  siteUrl: string;
}) {
  const url = `${opts.siteUrl}/blog/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.publishedAt,
    dateModified: opts.updatedAt,
    author: {
      "@type": "Person",
      name: opts.author,
      jobTitle: opts.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "Lyra Group (Pty) Ltd",
        url: opts.siteUrl,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Lyra Group",
      url: opts.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "en-ZA",
    isAccessibleForFree: true,
    url,
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string; explanation?: string }[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.explanation ? `${f.answer} ${f.explanation}` : f.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(opts: {
  siteUrl: string;
  slug: string;
  title: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: opts.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${opts.siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: opts.title,
        item: `${opts.siteUrl}/blog/${opts.slug}`,
      },
    ],
  };
}
