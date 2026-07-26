# Lyra Group Website

Marketing site for **Lyra Group (Pty) Ltd** — professional debt recovery for South African SMEs.

- **Domain (production):** lyragroup.co.za  
- **Spike preview:** https://lyra-spike.quikle.co.za  
- **Repo:** https://github.com/lance-blip/lyra-group-website  
- **Workspace:** `/home/openclaw/hermes-workspace/lyra-group-website/`

## Stack (locked)

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 + Celestial Ember tokens |
| Motion | Framer Motion (scroll reveals, count-up, reduced-motion safe) |
| Chat | Next.js API route → n8n webhook → Together AI MiniMax M3 |
| Forms | `/api/contact` (honeypot; Resend wiring Phase 2) |
| **Deploy target (locked)** | **Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`)** — not Cloudflare Pages |

Pages (legacy CF Pages product) is **not** used: account token lacks Pages write; Workers + OpenNext is the production path.

### Deploy commands

```bash
npm install
npm run build                 # next build
npx opennextjs-cloudflare build
npx opennextjs-cloudflare deploy
# or
npm run deploy
```

Worker name: `lyra-group-website`  
Assets binding: `.open-next/assets` (see `wrangler.toml`)

### Spike vs production indexing

Spike hosts ship with **`robots: noindex, nofollow`** until cutover.  
Set `NEXT_PUBLIC_ALLOW_INDEX=true` and `NEXT_PUBLIC_SITE_URL=https://lyragroup.co.za` only on production.

## Brand

- **Palette:** Celestial Ember — indigo `#1B2A4A` + champagne `#D4A574` / copper `#C4784A`
- **Type:** Fraunces (display) + Source Sans 3 (body) + JetBrains Mono (numerals)
- **StoryBrand:** visitor is the hero; Lyra Group is the guide
- **Primary CTA:** Get a Free Consultation · badge: No Collection. No Fee.

## Local development

```bash
npm run dev
```

Open http://localhost:3000

## Project docs

Full architecture, SEO map, chatbot branches, and build phases: [`PLAN.md`](./PLAN.md)

## Credits

Website created by [Quikle AI Agents](https://www.quikle.co.za)
