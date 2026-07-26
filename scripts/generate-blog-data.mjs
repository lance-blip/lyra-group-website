#!/usr/bin/env node
/**
 * Build-time: content/blog/*.mdx → src/lib/generated/blog-data.ts
 * Converts Markdown → HTML here so Cloudflare Workers never runs MDX/fs at request time.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const blogDir = path.join(root, "content/blog");
const outDir = path.join(root, "src/lib/generated");
const outFile = path.join(outDir, "blog-data.ts");

marked.setOptions({ gfm: true, breaks: false });

const renderer = new marked.Renderer();

renderer.link = ({ href, title, text }) => {
  const external = href?.startsWith("http");
  const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
  if (external) {
    return `<a href="${escapeAttr(href || "#")}"${titleAttr} target="_blank" rel="noopener noreferrer" class="text-lyra-accent-strong underline-offset-2 hover:underline">${text}</a>`;
  }
  return `<a href="${escapeAttr(href || "#")}"${titleAttr} class="text-lyra-accent-strong underline-offset-2 hover:underline">${text}</a>`;
};

renderer.heading = ({ text, depth }) => {
  if (depth === 2) {
    return `<h2 class="mt-12 scroll-mt-24 font-serif text-2xl font-bold text-lyra-primary md:text-3xl">${text}</h2>\n`;
  }
  if (depth === 3) {
    return `<h3 class="mt-8 scroll-mt-24 font-serif text-xl font-semibold text-lyra-primary">${text}</h3>\n`;
  }
  return `<h${depth} class="mt-6 font-serif font-bold text-lyra-primary">${text}</h${depth}>\n`;
};

renderer.paragraph = ({ text }) =>
  `<p class="mt-4 text-base leading-relaxed text-lyra-text/95">${text}</p>\n`;

renderer.list = ({ ordered, items }) => {
  const tag = ordered ? "ol" : "ul";
  const cls = ordered
    ? "mt-4 list-decimal space-y-2 pl-6 text-lyra-text/95"
    : "mt-4 list-disc space-y-2 pl-6 text-lyra-text/95";
  const body = items
    .map((item) => {
      // marked v15 items are tokens; fall back to string
      const html =
        typeof item === "string"
          ? item
          : marked.parser(item.tokens || []);
      return `<li class="leading-relaxed">${html}</li>`;
    })
    .join("\n");
  return `<${tag} class="${cls}">\n${body}\n</${tag}>\n`;
};

renderer.listitem = ({ text, tokens }) => {
  const html = tokens?.length ? marked.parser(tokens) : text;
  return `<li class="leading-relaxed">${html}</li>\n`;
};

renderer.strong = ({ text }) =>
  `<strong class="font-semibold text-lyra-primary">${text}</strong>`;

renderer.blockquote = ({ text, tokens }) => {
  const html = tokens?.length ? marked.parser(tokens) : text;
  return `<blockquote class="mt-6 border-l-4 border-lyra-accent bg-white/60 px-5 py-4 text-lyra-secondary italic">${html}</blockquote>\n`;
};

renderer.hr = () => `<hr class="my-10 border-lyra-border" />\n`;

renderer.table = (token) => {
  const header = token.header
    .map((cell) => `<th class="px-4 py-3 font-semibold">${cell.text}</th>`)
    .join("");
  const body = token.rows
    .map((row) => {
      const cells = row
        .map((cell) => `<td class="border-t border-lyra-border px-4 py-3 align-top">${cell.text}</td>`)
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("\n");
  return `<div class="mt-6 overflow-x-auto rounded-xl border border-lyra-border bg-white"><table class="w-full min-w-[32rem] text-left text-sm"><thead class="bg-lyra-primary-deep text-white"><tr>${header}</tr></thead><tbody>${body}</tbody></table></div>\n`;
};

marked.use({ renderer });

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function isMdx(name) {
  return name.endsWith(".mdx") || name.endsWith(".md");
}

function loadPosts() {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter(isMdx)
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data, content } = matter(raw);
      const html = marked.parse(content, { async: false });
      return {
        slug,
        title: String(data.title ?? ""),
        description: String(data.description ?? ""),
        metaTitle: String(data.metaTitle ?? data.title ?? ""),
        category: String(data.category ?? "Industry Insights"),
        publishedAt: String(data.publishedAt ?? "2026-07-26"),
        updatedAt: String(data.updatedAt ?? data.publishedAt ?? "2026-07-26"),
        author: String(data.author ?? "Lee-Hing Sinnye"),
        authorRole: String(data.authorRole ?? "Founder — Lyra Group"),
        readTime: String(data.readTime ?? "12 min"),
        featuredImageDescription: String(data.featuredImageDescription ?? ""),
        keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
        excerpt: String(data.excerpt ?? data.description ?? ""),
        faqs: Array.isArray(data.faqs) ? data.faqs : [],
        content, // raw markdown kept for word counts
        html: String(html),
      };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

const posts = loadPosts();
fs.mkdirSync(outDir, { recursive: true });

const banner = `/* AUTO-GENERATED by scripts/generate-blog-data.mjs — do not edit by hand */\n`;
const body = `${banner}import type { BlogPost } from "@/lib/blog";\n\nexport const BLOG_POSTS: BlogPost[] = ${JSON.stringify(posts, null, 2)} as BlogPost[];\n`;

fs.writeFileSync(outFile, body, "utf8");
console.log(
  `generate-blog-data: wrote ${posts.length} posts → ${path.relative(root, outFile)}`,
);
// sanity: ensure html present
for (const p of posts) {
  const words = p.content.split(/\s+/).filter(Boolean).length;
  console.log(`  - ${p.slug}: md~${words}w html=${p.html.length}b`);
}
