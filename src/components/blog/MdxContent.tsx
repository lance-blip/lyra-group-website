import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";

function A({
  href = "#",
  children,
}: {
  href?: string;
  children?: ReactNode;
}) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-lyra-accent-strong underline-offset-2 hover:underline">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="text-lyra-accent-strong underline-offset-2 hover:underline">
      {children}
    </Link>
  );
}

const components = {
  a: A,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 scroll-mt-24 font-serif text-2xl font-bold text-lyra-primary md:text-3xl" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 scroll-mt-24 font-serif text-xl font-semibold text-lyra-primary" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 text-base leading-relaxed text-lyra-text/95" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-lyra-text/95" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-lyra-text/95" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-lyra-primary" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-4 border-lyra-accent bg-white/60 px-5 py-4 text-lyra-secondary italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-lyra-border" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="mt-6 overflow-x-auto rounded-xl border border-lyra-border bg-white">
      <table className="w-full min-w-[32rem] text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-lyra-primary-deep text-white" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 font-semibold" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-t border-lyra-border px-4 py-3 align-top" {...props} />
  ),
};

export async function MdxContent({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    components,
    options: { parseFrontmatter: false },
  });
  return <div className="article-mdx max-w-3xl">{content}</div>;
}
