/** Renders build-time HTML from scripts/generate-blog-data.mjs — no runtime MDX. */
export function ArticleBody({ html }: { html: string }) {
  return (
    <div
      className="article-mdx max-w-3xl"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
