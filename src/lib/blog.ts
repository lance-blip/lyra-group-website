import { BLOG_POSTS } from "@/lib/generated/blog-data";

export type BlogFaq = {
  question: string;
  /** Direct 1-sentence answer for AEO extraction */
  answer: string;
  /** Expanded explanation */
  explanation?: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  authorRole: string;
  readTime: string;
  featuredImageDescription: string;
  keywords: string[];
  excerpt: string;
  faqs: BlogFaq[];
};

export type BlogPost = BlogPostMeta & {
  /** Raw markdown (word counts / tooling) */
  content: string;
  /** Build-time HTML — Workers-safe, no runtime MDX */
  html: string;
};

/** Workers-safe: posts are embedded at build time via scripts/generate-blog-data.mjs */
export function getPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getPostBySlug(slug: string): BlogPost | null {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export function getAllPosts(): BlogPostMeta[] {
  return BLOG_POSTS.map((post) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content, html, ...meta } = post;
    return meta;
  });
}

export function estimateWordCount(markdown: string): number {
  const stripped = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_\-|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped ? stripped.split(" ").length : 0;
}
