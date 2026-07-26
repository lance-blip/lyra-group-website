# Lyra Group Website — PLAN.md

**Project:** lyra-group-website  
**Domain:** lyragroup.co.za  
**Client:** Lyra Group (Pty) Ltd — Johannesburg debt collection agency  
**Founder:** Lee-Hing Sinnye  
**Local path:** `/home/openclaw/hermes-workspace/lyra-group-website/`  
**GitHub:** `https://github.com/lance-blip/lyra-group-website`  
**Status:** Phase 1 — Plan (awaiting Nova review)  
**Planner:** Athena (Grok 4.5)  
**Date:** 2026-07-26  

---

## 1. Executive Summary

Build a 7-page, StoryBrand-first marketing site for Lyra Group — a female-owned, compliance-first commercial debt collection agency targeting SA SMEs (R5M–R50M turnover). The visitor (SME owner owed money) is always the hero; Lyra Group is the guide. Primary CTA everywhere: **Get a Free Consultation**. Signature offer: **No Collection. No Fee.**

Stack: Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion + React Three Fiber (hero only) + modular AI chatbot (n8n → Together AI MiniMax M3) + WhatsApp float + Cloudflare Pages deploy.

---

## 2. Colour Palette — 3 Options

All three options are warm-premium, CFO-trustworthy, constellation-adjacent, and female-owned without pink cliché. **Recommendation after Nova review: Option B (preferred default).**

### Option A — "Midnight Lyra" (classic navy + gold, refined)

| Token | Hex | Role |
|-------|-----|------|
| Primary | `#0B1F3A` | Deep navy — authority, night sky |
| Secondary | `#1A3A5C` | Mid navy — cards, secondary surfaces |
| Accent | `#C9A227` | Antique gold — CTAs, stars, highlights |
| Background | `#F7F4EF` | Warm off-white parchment |
| Surface | `#FFFFFF` | Cards, forms |
| Text | `#0F172A` | Near-black body |
| Muted text | `#5B6574` | Secondary copy |
| Success | `#2F6F4E` | Recovered / positive stats |

**Rationale:** Closest to the business-plan navy/gold brief, but warmed with parchment backgrounds so it never feels cold corporate. Gold references constellation light guiding money home. Strong for legal/compliance credibility; slightly more traditional — good for older SME owners and CFOs who expect "serious money" aesthetics.

**Usage:**
- Hero background: `#0B1F3A` with gold/white star particles  
- Headings: `#0B1F3A` on light; `#F7F4EF` on dark hero  
- CTA buttons: `#C9A227` fill, `#0B1F3A` text  
- Body text: `#0F172A` on `#F7F4EF`  
- Cards: `#FFFFFF` with subtle navy border `#E2E8F0`  
- Values strip: navy band, gold icons, cream text  

---

### Option B — "Celestial Ember" ★ RECOMMENDED

| Token | Hex | Role |
|-------|-----|------|
| Primary | `#1B2A4A` | Ink navy-indigo — trustworthy, modern |
| Secondary | `#3D4F6F` | Soft slate-indigo |
| Accent | `#D4A574` | Warm champagne bronze (not yellow-gold) |
| Accent strong | `#C4784A` | Ember copper — primary CTAs |
| Background | `#FAF8F5` | Warm ivory |
| Surface | `#FFFFFF` | Cards |
| Text | `#1A1A1A` | Soft black |
| Muted text | `#6B6560` | Warm grey |
| Star glow | `#F0E6D3` | Constellation particle tint |

**Rationale:** Moves past generic "navy + gold law firm" into something distinctly Lyra — constellation night sky (indigo) lit by warm stellar bronze/copper. Copper/champagne reads premium and approachable; avoids cold blue-steel fintech and avoids pink "female-owned" clichés. Warm ivory backgrounds feel human and SA-hospitable. Ember CTA colour converts better than pale gold on white. Female-forward through warmth and craft, not gender coding. Best balance of sophistication + conversion + brand originality.

**Usage:**
- Hero background: radial gradient `#0E1628` → `#1B2A4A`, particles in `#F0E6D3` / `#D4A574`  
- Headings: `#1B2A4A`  
- Primary CTA: `#C4784A` bg, white text; hover darken to `#A8623A`  
- Secondary CTA / links: `#D4A574` underline or ghost button  
- Body: `#1A1A1A` on `#FAF8F5`  
- Cards: white, soft shadow, optional left accent bar in bronze  
- Values strip: `#1B2A4A` band, champagne icons, ivory type  
- "No Collection. No Fee." badge: bronze border, ivory fill, navy text  

---

### Option C — "Southern Cross Trust" (earth + starlight)

| Token | Hex | Role |
|-------|-----|------|
| Primary | `#1F2E24` | Deep forest ink — grounded SA earth |
| Secondary | `#3A4F42` | Sage slate |
| Accent | `#B8860B` | Dark goldenrod starlight |
| Accent soft | `#E8D5A3` | Pale star gold |
| Background | `#F4F1EA` | Stone linen |
| Surface | `#FFFEFB` | Warm white |
| Text | `#1C1917` | Stone black |
| Muted text | `#78716C` | Warm stone |
| Highlight | `#0E4D4D` | Teal-ink (trust / compliance callouts) |

**Rationale:** Most "SA-rooted" palette — forest and stone evoke Highveld earth and reliability; goldenrod stars keep the Lyra myth. Teal-ink used sparingly for compliance/trust callouts (registers, POPIA). Feels independent and human; less "corporate finance" than A, less "luxury copper" than B. Risk: slightly less "premium agency" punch for big-invoice B2B; reward: highly distinctive and locally resonant.

**Usage:**
- Hero: deep forest `#1F2E24` with gold star particles  
- Headings: `#1F2E24`  
- CTAs: `#B8860B` fill, `#1F2E24` text  
- Body: `#1C1917` on `#F4F1EA`  
- Cards: `#FFFEFB`  
- Compliance badges: teal-ink `#0E4D4D` icons  
- Values strip: forest band, pale gold type  

### Palette decision gate
Nova + Lance pick A / B / C (or hybrid) before build. Default if no feedback: **Option B**.

---

## 3. Typography System

| Role | Font | Weights | Notes |
|------|------|---------|-------|
| Headings | **Fraunces** (Google Fonts) | 600, 700 | Soft serif with optical sizing — premium, human, slightly editorial. Female-forward craft without script fonts. |
| Body | **Source Sans 3** (Google Fonts) | 400, 500, 600 | Excellent readability, neutral, SA-business appropriate. Pairs cleanly with Fraunces. |
| UI / labels / nav | **Source Sans 3** | 500, 600 | Same family — reduces font payload |
| Mono (rare) | **JetBrains Mono** | 400 | Commission tables, registration numbers only |

**Rationale:** Serif headings signal established professionalism (debt recovery is serious); sans body keeps cognitive load low (StoryBrand). Fraunces has a warm, slightly soft terminal that avoids the cold authority of Playfair/Times. Both fonts are free, well-hinted, and preload-friendly for CWV.

**Scale (mobile → desktop):**
- Display / H1: 2.25rem → 3.5rem (Fraunces 700)
- H2: 1.75rem → 2.5rem
- H3: 1.35rem → 1.75rem
- Body: 1.0625rem / 1.7 line-height
- Small / meta: 0.875rem
- Eyebrow labels: 0.75rem uppercase tracking-wider, weight 600

**Implementation:** `next/font/google` with `display: swap`, preload headings + body subset latin.

---

## 4. Logo Direction

**Deliverable (build phase):** SVG wordmark + icon-only.

**Concept:** Abstract Lyra lyre formed from 5–7 connected star points (constellation geometry), not a literal musical instrument or cartoon star. Geometry should suggest guidance/navigation — a subtle "homeward" arc.

**Versions:**
1. **Wordmark:** Icon left + "Lyra Group" in Fraunces semibold; optional thin tagline beneath in Source Sans: "Precision Recovery. Purposeful Results."
2. **Icon-only:** Star-lyre mark in a square viewBox, works at 16–512px
3. **Mono / reversed:** Single-colour for dark hero and light letterheads
4. **Favicon:** Simplified 3-star cluster from the mark

**Constraints:** No gradients in print mono version; stroke weights that survive 16px favicon; works on navy and ivory.

---

## 5. StoryBrand Page-by-Page Content Outline

### 5.1 Home `/`

**Above the fold (hero + 3D star field)**
- Eyebrow: `No Collection. No Fee.`
- H1: `Your invoices are unpaid. Your cash flow is suffering. That ends here.`
- Sub: `Lyra Group helps South African SMEs recover B2B debt — professionally, compliantly, and only when we succeed.`
- Primary CTA: `Get a Free Consultation`
- Secondary micro-link: `See how the process works →` (scroll to Plan)
- Trust row under CTA: CDC-aligned · POPIA compliant · Female-owned · Johannesburg

**Problem section**
- H2: `Unpaid invoices don't just hurt your books — they stall your business`
- Three columns (external / internal / philosophical):
  1. **External:** Debtors delay, dispute, or disappear while you chase politely
  2. **Internal:** Your team wasn't hired to be collectors — time and morale drain
  3. **Philosophical:** You delivered the work. Being paid shouldn't feel like a favour
- Close line: `Hoping they'll pay is not a recovery strategy.`

**Guide section**
- H2: `A recovery partner who stands with you — not above you`
- Copy: Lee-Hing / Lyra as guide — BBA founder, personal service, compliance-first, female-owned pride
- Proof chips: Professional process · Trust account discipline · SA legislation fluency
- CTA soft: `Talk to a real person →`

**Values strip** (animated scroll reveal)
- WE FIND. · WE STAND FIRM. · WE ILLUMINATE. · WE RISE. · WE FINISH.
- One-line microcopy under each (from business plan values; expanded on About)

**Plan section**
- H2: `Three steps. No upfront risk.`
  1. **Submit your mandate** — Share the debt details. We assess recoverability at no cost.
  2. **We pursue with precision** — Structured, lawful recovery across our 6-stage process.
  3. **You get paid** — Recovered funds returned; our fee only on success.
- Badge repeat: `No Collection. No Fee.`

**Services overview** (4 cards — benefit headlines)
1. `Get paid on commercial invoices that have gone quiet` → Commercial collections
2. `Recover consumer debt without damaging your brand` → Consumer collections  
3. `Escalate with legal muscle when persuasion isn't enough` → Legal recovery support  
4. `Outsource the chase so your team can run the business` → End-to-end mandate management  
(Link each to Services; remaining 2 services appear on Services page)

**Statistics section**
- H2: `South African businesses are sitting on money that belongs to them`
- Stats (contextual, cited carefully; final numbers verified at build):
  - Household debt context ~R2.4T
  - R500B+ NPLs landscape
  - SME cash-flow pressure framing (not fear-mongering)
- Bridge: `You don't need another lecture on the economy. You need a recovery plan.`

**Testimonials** (3 cards)
- Placeholder examples (Lee-Hing replaces):
  1. Construction — "Lyra Group recovered R180,000 in outstanding invoices within 6 weeks."
  2. Professional services — "We'd written off a six-month debtor. They brought it home — and kept the relationship professional."
  3. Wholesale — "Clear updates, no aggression, and money in our account. That's all we wanted."
- Link: `Read more client results →` /testimonials

**FAQ** (8 real objections — accordion + FAQPage schema)
1. What happens if you can't collect?
2. How do you handle debtors who dispute the debt?
3. Is there a minimum debt amount?
4. How long does the process take?
5. What does "No Collection. No Fee." actually include?
6. Will debt collection damage my customer relationships?
7. Are you registered and POPIA compliant?
8. Do you collect across South Africa or only Johannesburg?

Each answer: **1-sentence direct answer** → short expansion (AEO format).

**Final CTA strip**
- H2: `Ready to recover what's yours?`
- CTA: `Get a Free Consultation`
- Alt: WhatsApp us during business hours

---

### 5.2 Services `/services`

**Hero**
- H1: `Recovery built around the problem you're actually facing`
- Sub: `Every service is commissioned on results — not retainers that punish you for trying.`

**Service blocks** (6 — problem-led H2s, not jargon names)
1. Commercial / B2B debt recovery — unpaid trade invoices
2. Consumer debt recovery — brand-safe approaches
3. Letter of demand & early-stage intervention
4. Outsourced credit control support
5. Legal handoff & litigation support coordination
6. Book assessment / debt book review

*(Exact 6 names aligned to Lee-Hing business plan at build; structure holds.)*

**Commission rate table**
- Clear tiers (placeholders until Lee-Hing confirms %): e.g. by age of debt / value band
- Footnote: Final rates confirmed in mandate — transparency over fine print

**6-stage collection workflow** (animated horizontal/vertical diagram)
1. Mandate & document intake  
2. Debtor trace & validation  
3. Professional engagement  
4. Structured escalation  
5. Settlement / legal pathway  
6. Remittance & closure  

**CTA:** Free consultation — send your debt book for assessment

---

### 5.3 About `/about`

**Hero**
- H1: `Guided by the stars that lead money home`
- Sub: Founder-led. Compliance-first. Built for SA businesses tired of being ignored by their own debtors.

**Founder story** (StoryBrand lens)
- Lee-Hing's journey, BBA, why she built Lyra — not ego bio, but "I saw SME owners losing sleep over money already earned"
- Photo placeholder (professional, swappable)

**Brand origin**
- Lyra constellation metaphor — navigation, precision, light in the dark

**Values** (all 5 full)
- WE FIND / STAND FIRM / ILLUMINATE / RISE / FINISH — full business-plan descriptions

**Mission & vision**
- Plain language, hero-centric

**BBBEE & female-owned**
- Stated with pride, linked to service quality and representation — not a footnote badge dump

---

### 5.4 Compliance `/compliance`

**Hero**
- H1: `Compliance isn't our paperwork. It's your protection.`
- Frame every credential as client benefit (defensible process, reduced reputational risk, lawful recovery)

**Registrations block**
- CDC, CIPC, SARS, POPIA, Information Regulator — what each means for the client

**Legislation table** (6 Acts — plain English)
1. Debt Collectors Act 114 of 1998  
2. National Credit Act 34 of 2005 (where relevant)  
3. POPIA 4 of 2013  
4. Prescription Act 68 of 1969  
5. Magistrates' Courts Act / relevant civil procedure touchpoints  
6. CPA where consumer matters apply  

**Trust account explanation** — client money handling  
**POPIA commitment**  
**Professional indemnity**  
**CTA:** Questions about our registrations? Ask us directly.

---

### 5.5 Blog `/blog`

- Featured article hero + card grid  
- Filters: Debt Recovery · Compliance · SME Finance · Industry Insights  
- 3 launch articles (see §8)  
- Each post: meta, OG, BlogPosting schema, author bio, read time, share buttons, internal links, end CTA  

---

### 5.6 Testimonials `/testimonials`

- H1: `Results other business owners can feel in their cash flow`
- 6 placeholders across construction, professional services, healthcare, retail, wholesale (+1 mixed SME)
- Fields: quote, name, company, industry, amount recovered, timeframe, star rating  
- Video placeholder section  
- AggregateRating schema  

---

### 5.7 Contact `/contact`

- H1: `Ready to recover what's yours?`
- Form fields: Name, Company, Email, Phone, Debt type (Commercial/Consumer/Legal), Estimated value, Brief description  
- API route → Lee-Hing email (serverless)  
- WhatsApp click-to-chat (number placeholder)  
- Chatbot widget  
- Hours: Mon–Fri 08:00–17:00  
- Johannesburg  
- Email placeholder  

---

## 6. Component Architecture

```
src/
  app/                          # App Router pages
    layout.tsx                  # fonts, global nav/footer, JSON-LD org
    page.tsx                    # Home
    services/page.tsx
    about/page.tsx
    compliance/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    testimonials/page.tsx
    contact/page.tsx
    api/
      contact/route.ts          # form → email
      chat/route.ts             # proxy → n8n webhook (keeps keys server-side)
    sitemap.ts
    robots.ts
  components/
    layout/                     # Header, Footer, MobileNav
    hero/
      StarField.tsx             # R3F canvas — dynamic import, ssr:false
      HeroContent.tsx
    storybrand/
      ProblemSection.tsx
      GuideSection.tsx
      ValuesStrip.tsx
      PlanSteps.tsx
      FinalCta.tsx
    services/
      ServiceCard.tsx
      CommissionTable.tsx
      WorkflowDiagram.tsx       # Framer Motion stages
    social-proof/
      TestimonialCard.tsx
      TestimonialGrid.tsx
      StatsRow.tsx
    faq/
      FaqAccordion.tsx          # accessible disclosure; emits FAQ schema data
    blog/
      ArticleCard.tsx
      CategoryFilter.tsx
      ArticleBody.tsx
      ShareButtons.tsx
      AuthorBio.tsx
    chat/
      ChatWidget.tsx            # modular; props: webhookUrl, etc.
      ChatButton.tsx            # Quikle vibrating/pulsing signature
      ChatPanel.tsx
      types.ts
    contact/
      ContactForm.tsx
      WhatsAppButton.tsx        # floating, always visible
    seo/
      JsonLd.tsx
    ui/                         # Button, Badge, Section, Container, etc.
  content/
    blog/                       # MDX or TS modules for 3 launch articles
    faqs.ts
    services.ts
    testimonials.ts
    navigation.ts
  lib/
    seo.ts                      # metadata helpers
    schema.ts                   # JSON-LD builders
    email.ts
  styles/globals.css            # design tokens as CSS variables
```

### Key component contracts

**ChatWidget** (modular)
```ts
type ChatWidgetProps = {
  webhookUrl: string;           // Next API route, not raw n8n URL in client if avoidable
  title?: string;
  placeholder?: string;
  whatsappFallbackUrl?: string;
  contactFormHref?: string;
  brand?: { primary: string; accent: string; avatarUrl?: string };
};
```
- Session history in React state (array of {role, content, ts})
- On out-of-scope / human-request intents: handoff cards → WhatsApp | Contact form
- Button: Quikle signature pulse/vibrate — **visual example from Lance required before polish** (build with strong pulse CSS first)

**StarField**
- `next/dynamic(() => import(...), { ssr: false })`
- Pause when offscreen / `prefers-reduced-motion`
- Cap DPR, low particle count, no heavy postprocessing
- Must not block LCP — hero text is HTML overlay, not canvas text

**FaqAccordion**
- Keyboard accessible; one answer visible pattern optional
- Parent page injects FAQPage JSON-LD from same data source

---

## 7. n8n Chatbot Workflow Architecture

```
[Visitor] → ChatPanel
     → POST /api/chat  (Next.js — rate limit, sanitize, append sessionId)
          → n8n Webhook Trigger (N8N_WEBHOOK_URL)
               → Normalize payload { message, history[], sessionId, pageUrl, meta }
               → Intent Detection (MiniMax M3 classifier OR n8n Switch on keywords+LLM)
                    ├─ 1. GREETING / FAQS general
                    ├─ 2. SERVICES explain
                    ├─ 3. PRICING / COMMISSION
                    ├─ 4. COMPLIANCE / LEGALITY
                    ├─ 5. PROCESS / TIMELINE
                    ├─ 6. LEAD CAPTURE (wants consultation)
                    ├─ 7. DEBTOR / CASE-SPECIFIC (beyond scope → handoff)
                    └─ 8. ESCALATE HUMAN (WhatsApp / form)
               → Branch system prompt + tools/context
               → Together AI MiniMax M3 (MiniMaxAI/MiniMax-M3)
                    base: https://api.together.xyz/v1
                    auth: server-side only (OPENAI_API_KEY in Athena/n8n env pattern)
               → Response formatter { reply, intent, handoff?: 'whatsapp'|'form'|null }
          ← JSON
     ← render reply + optional handoff UI
```

### Athena build responsibilities (chat)
1. Create n8n workflow via API (`N8N_API_KEY`) with webhook + 8 branches (detailed branch prompts when Lance sends workflow brief)
2. Ship ChatWidget modularly so prompts/branches update without frontend rebuild
3. Never expose Together key to browser
4. Graceful errors: "We're momentarily offline — WhatsApp us or use the form"

### Text diagram (ops view)
```
┌─────────────┐   ┌──────────────┐   ┌─────────────┐   ┌──────────────────┐
│ Chat UI     │──▶│ /api/chat    │──▶│ n8n Webhook │──▶│ Intent Router x8 │
│ (session    │   │ (auth proxy, │   │ + validate  │   │ + system prompts │
│  history)   │◀──│  rate limit) │◀──│             │◀──│ → Together M3    │
└─────────────┘   └──────────────┘   └─────────────┘   └──────────────────┘
        │                                                     │
        └──────── handoff: WhatsApp / Contact form ◀──────────┘
```

---

## 8. SEO & AEO Strategy

### Technical
- `generateMetadata` per page (title, description, canonical, OG, Twitter)
- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → allow all + sitemap line
- JSON-LD via `JsonLd` component: Organization, LocalBusiness (JHB), Service, FAQPage, BlogPosting, BreadcrumbList, Review/AggregateRating
- CWV: next/image, font preload, dynamic 3D, lazy below-fold, minimal client JS
- Mobile-first breakpoints throughout

### Keyword → page map

| Page | Primary targets | Secondary / long-tail |
|------|-----------------|------------------------|
| Home | debt collection South Africa, debt collection agency South Africa, B2B debt collection | no collection no fee debt collector, SME debt recovery |
| Services | commercial debt recovery Johannesburg, professional debt collector Johannesburg | debt collection commission rates South Africa, how long does debt collection take |
| About | female-owned debt collection | Lyra Group Johannesburg |
| Compliance | debt collectors act South Africa, POPIA compliant debt collection | CDC registration, what is a letter of demand South Africa |
| Blog index | (hub for editorial keywords) | industry insights debt recovery SA |
| Article 1 | how to recover unpaid invoices South Africa, unpaid invoices South Africa | how to recover debt South Africa, B2B debt recovery |
| Article 2 | debt collectors act South Africa, CDC registration | legal debt collection South Africa |
| Article 3 | commercial debt collection South Africa, consumer debt collection | B2B debt recovery Johannesburg |
| Testimonials | (brand + proof queries) | debt collection success stories South Africa |
| Contact | debt collection consultation Johannesburg | recover unpaid invoices contact |

### AEO rules (every FAQ + article)
1. Direct 1-sentence answer first  
2. Expanded explanation second  
3. Entity definitions inline (CDC, POPIA, prescription, letter of demand)  
4. E-E-A-T: Lee-Hing author bio + credentials; dates; compliance citations  
5. Internal links to Services + Contact  

### 3 launch articles (≥1,200 words each)
1. **How to Recover Unpaid Invoices in South Africa: A Complete Guide for SMEs (2026)**  
2. **The Debt Collectors Act 114 of 1998: What Every South African Business Owner Needs to Know**  
3. **Commercial vs Consumer Debt Collection in South Africa: Key Differences and Which Service Your Business Needs**  

Each includes: researched accuracy (SA law high-level, not legal advice disclaimer), FAQ block, CTA, author bio, meta title/description, featured image brief, schema.

**Disclaimer footer on legal-adjacent content:** general information, not legal advice.

---

## 9. Content Tone Rules

- Visitor = hero; Lyra = guide  
- SA English (organise, favour, programme where natural; "cell number", "JHB")  
- Empathetic to cash-flow pain; never aggressive collector tropes  
- No jargon without plain translation  
- Short sentences above the fold; scannable sections  
- CTAs repeated, always the same primary action  

---

## 10. Deployment Plan — Cloudflare Pages

1. Repo: `lance-blip/lyra-group-website`  
2. Cloudflare Pages project linked to GitHub (Athena: `CF_ACCOUNT_ID` + `CLOUDFLARE_API_TOKEN`)  
3. Build command: `npx @cloudflare/next-on-pages` **or** official Next on Pages adapter current to Next 15 at build time (verify adapter compatibility in Phase 2 spike)  
4. Environment variables on CF:
   - `N8N_WEBHOOK_URL` (server)
   - Contact mail transport secrets (Resend/SMTP — decide in build; default Resend or nodemailer to Lee-Hing)
   - Public: `NEXT_PUBLIC_SITE_URL=https://lyragroup.co.za`
   - WhatsApp number when provided
5. Custom domain: `lyragroup.co.za` + `www` redirect  
6. Preview deployments on PR branches  
7. Go-live only after Nova sign-off  

**Spike note:** Confirm Next.js 15 + Cloudflare Pages adapter path early (Phase 2.0). Fallback: static export where possible + separate edge functions — prefer full App Router on Pages.

---

## 11. Build Phases & Order of Execution

### Phase 0 — Plan (THIS DELIVERABLE)
- [x] PLAN.md written  
- [x] GitHub repo created + PLAN.md pushed  
- [ ] Nova review + Lance palette/logo nods  

### Phase 1 — Foundation (after Nova approval)
1. Scaffold Next.js 15 + TS + Tailwind + Framer Motion  
2. Design tokens (chosen palette) + typography  
3. Layout: Header, Footer, Button, Section primitives  
4. SVG logo (wordmark + icon)  
5. Cloudflare Pages project + empty deploy pipeline spike  

### Phase 2 — Core pages (content + StoryBrand)
1. Home (all sections; StarField behind feature flag if perf risk)  
2. Services + workflow diagram  
3. About  
4. Contact form + API email route  
5. WhatsApp float  

### Phase 3 — Trust & proof
1. Compliance page + legislation table  
2. Testimonials page + home strip  
3. FAQ component + schema  

### Phase 4 — Blog + SEO
1. Blog index + MDX/content pipeline  
2. Write & ship 3 launch articles  
3. Full metadata, sitemap, robots, JSON-LD audit  

### Phase 5 — Chatbot
1. Modular ChatWidget + pulse button (Lance example)  
2. `/api/chat` proxy  
3. n8n workflow (8 branches) via API — after Lance workflow brief  
4. Handoff UX + rate limiting  

### Phase 6 — Polish & launch
1. Accessibility pass (a11y)  
2. Lighthouse / CWV  
3. Reduced-motion + mobile QA  
4. Domain cutover lyragroup.co.za  
5. Handover doc for Lee-Hing (replace placeholders list)  

---

## 12. Placeholders & Open Inputs

| Item | Owner | Status |
|------|-------|--------|
| WhatsApp number | Lee-Hing | Placeholder |
| Founder photo | Lee-Hing | Placeholder |
| Real testimonials | Lee-Hing | Compelling placeholders |
| Exact commission % table | Lee-Hing | Structure ready, figures TBD |
| Exact 6 service names from business plan | Align at build | Benefit-led structure locked |
| Chatbot 8-branch brief | Lance | Component modular until brief |
| Quikle vibrating button example | Lance | Request before chat polish |
| Contact email (lee-hing) | Lance / Lee-Hing | Needed for form route |
| Final palette choice | Nova / Lance | Default B |
| CDC / registration numbers | Lee-Hing | Display when provided |
| Legal review of Act summaries | Optional | Soft disclaimer in place |

---

## 13. Risk Register

| Risk | Mitigation |
|------|------------|
| R3F hurts mobile perf | Dynamic import, particle caps, reduced-motion off, kill-switch to CSS gradient |
| CF Pages + Next 15 adapter gaps | Early spike; pin known-good adapter |
| Chat hallucinations on legal topics | Branch prompts: refuse case-specific legal advice; hand off |
| Over-claiming stats (R2.4T / NPLs) | Source at write time; hedge language; prefer SME cash-flow framing |
| Aggressive collector brand creep | StoryBrand review checklist each page |
| n8n downtime | API fallback message + WhatsApp/form |

---

## 14. Success Criteria (launch)

- Visitor understands offer + CTA within 3 seconds  
- Lighthouse mobile Performance ≥ 90 (target), Accessibility ≥ 95  
- All 7 routes live on lyragroup.co.za  
- SEO primitives live (meta, sitemap, robots, core schema)  
- Contact form delivers to Lee-Hing  
- Chatbot answers FAQs and hands off cleanly  
- No Collection. No Fee. visible above fold  
- Nova StoryBrand sign-off recorded  

---

## 15. Immediate Next Actions

1. **Nova:** Review this PLAN.md (StoryBrand, brand, n8n, SEO, SA fit, gaps)  
2. **Lance:** Confirm palette (A/B/C), provide vibrating button example when ready, send chatbot workflow brief when ready  
3. **Athena (after proceed):** Scaffold repo, logo, tokens, Home first vertical slice  

---

## 16. Confirmation Block

| Item | Value |
|------|--------|
| Local path | `/home/openclaw/hermes-workspace/lyra-group-website/` |
| GitHub | `https://github.com/lance-blip/lyra-group-website` |
| PLAN.md | `/home/openclaw/hermes-workspace/lyra-group-website/PLAN.md` |
| Phase | 1 — Plan complete; **no code until Nova/Lance approval** |
| Recommended palette | Option B — Celestial Ember |
| Recommended type | Fraunces + Source Sans 3 |

---

*End of PLAN.md — Athena · Quikle AI · 2026-07-26*
