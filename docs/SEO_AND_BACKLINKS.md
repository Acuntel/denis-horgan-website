# Denis Horgan — SEO, AI Optimization & Backlinks Playbook

Single source of truth for getting Denis ranking on Google **and** showing up in
AI answers (ChatGPT, Claude, Perplexity, Gemini). Modeled on what's already
shipped for REAL Law Group and Paradise Home Design.

## What's already built into the site (on-page / technical)

- **Dynamic sitemap** (`app/sitemap.ts`) — every listing added in `/admin` and
  every neighborhood page is auto-included on the next build, so Google can
  discover new properties.
- **robots.txt** (`app/robots.ts`) — allows all crawlers, explicitly welcomes AI
  bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended,
  Bingbot, CCBot…), disallows `/admin`.
- **JSON-LD structured data** (`lib/seo.tsx`):
  - `RealEstateAgent` + `WebSite` site-wide (identity, rating, area served).
  - `RealEstateListing` on every listing page (price, beds/baths/sqft, address,
    availability) → eligible for rich results.
  - `FAQPage` on the home page and each neighborhood page.
  - `BreadcrumbList` on listing + neighborhood pages.
- **Per-page metadata** — canonical URLs, Open Graph, Twitter cards on listings,
  neighborhoods, and the listings index.
- **Neighborhood (city) landing pages** — `/neighborhoods/[slug]` for Downers
  Grove, Naperville, Wheaton, Glen Ellyn, Lombard, Westmont, Darien, Clarendon
  Hills, Lisle. Local-SEO targets with intro copy, highlights, listings, FAQs.
- **AI reference files** — `public/llms.txt` and `public/llms-full.txt`.

> Set `NEXT_PUBLIC_SITE_URL` in Vercel to the production domain so canonical
> URLs, the sitemap, and robots.txt all point at the right place.

## Off-site checklist (Brady / Denis action)

### Tier 1 — free high-trust citations (do first)

- [ ] **Google Business Profile** — claim/verify; NAP must match the site exactly.
- [ ] Bing Places, Apple Business Connect (Maps).
- [ ] Zillow, Realtor.com, Homes.com agent profiles (link back to the site).
- [ ] Facebook + Instagram business profiles (link in bio → site).
- [ ] Keep the Redfin profile linked both ways.

### Tier 2 — real-estate directories

- [ ] Zillow Agent Finder, Realtor.com Find a Realtor, Trulia, HomeLight,
      UpNest, FastExpert, Rate-My-Agent.
- [ ] Local DuPage/Naperville/Downers Grove chamber-of-commerce directories.

### Tier 3 — reviews velocity (highest ROI for local)

- [ ] Ask every closed client for a Google review (no gating/incentives).
- [ ] Mirror the 4.9★ / 185-review story across Google + Zillow.

### Tier 4 — local content & links

- [ ] Pitch a market-update guest piece to Patch / local papers (Downers Grove,
      Naperville).
- [ ] Reciprocal links with trusted lenders, inspectors, title companies.
- [ ] Sponsor a local org/event for a `.org` backlink.

## NAP (keep byte-identical everywhere)

- **Name:** Denis Horgan
- **Phone:** (630) 870-1800
- **Brokerage/Office:** Redfin Corporation, 112 S. Sangamon St. #400, Chicago, IL 60607
- **License:** Illinois Managing Broker #475174979

## Measurement

- Google Search Console (submit `sitemap.xml`), Google Business Profile insights,
  and GA4 (add `NEXT_PUBLIC_GA_ID` wiring if/when desired).
