# Shalini G — Portfolio Page: Complete Project Documentation

**Document Version:** 1.0  
**Last Updated:** 09 April 2026  
**Status:** MVP Complete — Pre-deployment  

---

## Table of Contents

1. [Product Requirements Document (PRD)](#1-product-requirements-document)
2. [Information Architecture](#2-information-architecture)
3. [Design System](#3-design-system)
4. [Content Inventory](#4-content-inventory)
5. [Build Log — What Was Done](#5-build-log--what-was-done)
6. [File Structure](#6-file-structure)
7. [Defects Fixed](#7-defects-fixed)
8. [Outstanding Items](#8-outstanding-items)
9. [Deployment Guide](#9-deployment-guide)

---

## 1. Product Requirements Document

### 1.1 Vision & Purpose

Create a sophisticated, editorial-quality personal portfolio website to showcase a 15+ year career across financial services, data, and AI. This is an **always-on career brand asset** — not a job-search artifact or LinkedIn clone. It should feel like a high-end creative agency production.

**Positioning:** Product Leader · Financial Services · AI & Data

### 1.2 Target Audience

| Audience | What They're Looking For |
|----------|--------------------------|
| **Executive Recruiters** | Quick signal of seniority, quantified impact, domain depth |
| **Internal Leadership** | Strategic thinking, scope of influence, outcomes delivered |
| **Advisory Board / NED** | Breadth across data, AI, fintech; governance and operating model experience |
| **Peer Network** | Credibility, thought leadership, shared POV on AI in banking |

### 1.3 Success Criteria

- Loads in under 2 seconds (static site, no framework overhead)
- Communicates seniority and impact within the first scroll (hero + metrics)
- Four detailed case studies demonstrating end-to-end product leadership
- Works flawlessly on desktop, tablet, and mobile
- WCAG AA accessible (contrast, alt text, focus states, aria labels)
- No sensitive or internal data exposed — all metrics directional or redacted

### 1.4 Content Strategy

**Hero Statement (from resume):**
> Senior leader with 15+ years driving digital and data strategies, large-scale transformation programs, product innovation, and award-winning customer-centric solutions across financial services and retail.

**Headline Metrics ("The Numbers"):**

| Metric | Value | Source |
|--------|-------|--------|
| Funds Under Management Generated | $2B+ | CIA product launch (resume) |
| Annual Revenue Protected | $10M+ | Directshares P&L (resume) |
| Years in Financial Services | 15+ | Resume statement |
| Industry Awards | 4 | BT CEO Star, AFR Blue Ribbon, Canstar, iTnews Benchmark |

**Case Studies (Challenge → Approach → Shipped → Impact → Learned):**

1. **Cortex: Enterprise AI & Customer Data Engine** — Current role, enterprise 360° customer view
2. **Banking-as-a-Service Platform** — 0→1 core banking on 10X's cloud stack
3. **Directshares — Retail Share Trading** — P&L ownership, platform migration
4. **Cash Investment Account & WOI OneClick** — Product launch + digital transformation (merged)

### 1.5 Data Privacy Rules

- Use directional language for metrics (e.g., "millions of records" not "20M+")
- Sanitised/public-domain artifacts only — no internal logos or sensitive data
- Cortex website screenshots have metrics redacted (smudged/generalised)
- No direct links to internal or password-protected systems

### 1.6 Technical Requirements

| Requirement | Decision |
|-------------|----------|
| Stack | Vanilla HTML5, CSS3 (Grid/Flexbox/Custom Properties), Vanilla JS |
| Frameworks | None — static files only |
| Fonts | Google Fonts CDN (Playfair Display, Inter, JetBrains Mono) |
| Interactions | IntersectionObserver fade-in, metric counters, smooth scroll |
| Hosting | Static hosting (GitHub Pages, Netlify, or Cloudflare Pages) |
| Domain | TBD — candidates: `shalinig.com`, `shalini.ai`, `shalinigangadharan.com` |

---

## 2. Information Architecture

```
HOME
├── Hero (Name, tagline, subtitle, CTA)
├── Metrics Strip ($2B+, $10M+, 15+, 4 awards)
├── About (Philosophy narrative + sidebar with photo, role, education, skills)
├── Selected Work (2×2 card grid → case studies)
│   ├── Cortex: Enterprise AI & Customer Data Engine
│   ├── Banking-as-a-Service Platform
│   ├── Directshares — Retail Share Trading
│   └── Cash Investment Account & WOI OneClick
├── Career Timeline (2004–Present, vertical layout)
│   ├── 2022–Present: Data Strategy & AI Leadership (3 sub-roles)
│   ├── 2019–2022: Banking-as-a-Service
│   ├── 2017–2019: Directshares
│   ├── 2010–2016: WOI / BT Financial Group
│   ├── 2007–2010: ANZ / E*Trade
│   └── 2004–2007: TCS
├── Case Study: Cortex (full detail)
├── Case Study: BaaS (full detail with press grid)
├── Case Study: Directshares (full detail with app screenshots)
├── Case Study: CIA & WOI OneClick (full detail with product screenshots)
├── Recognition (Awards grid + Testimonials)
├── AI Fluency (3 showcase cards)
├── Writing (3 "Coming Soon" articles)
└── Contact / Footer (LinkedIn + Email)
```

---

## 3. Design System

### 3.1 Aesthetic

**"Monocle-meets-Stripe"** — editorial, sophisticated, not a LinkedIn clone.

### 3.2 Typography

| Role | Font | Weight | Details |
|------|------|--------|---------|
| Headings | Playfair Display (Serif) | 700 | letter-spacing: -0.02em |
| Body | Inter (Sans-serif) | 400/500 | line-height: 1.7 |
| Metrics / Numbers | JetBrains Mono | 500 | Tabular numerals for impact stats |

### 3.3 Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-dark` | `#1a1a2e` | Primary backgrounds, nav, hero |
| `--color-accent` | `#c9a84c` | Accent — CTAs, hover, borders, highlights |
| `--color-bg` | `#faf9f7` | Page background |
| `--color-bg-card` | `#ffffff` | Card backgrounds |
| `--color-text` | `#1a1a1a` | Body text |
| `--color-text-muted` | `#6b6b6b` | Secondary / muted text |
| `--color-border` | `#e5e2dc` | Card borders |

### 3.4 Layout

- **Max-width:** 1200px centred container
- **Whitespace:** Generous — minimum 80px section padding (120px default)
- **Grid:** CSS Grid for work cards (2-column), case study impact metrics
- **Cards:** 12px radius, subtle shadow, hover lift (-6px translateY)
- **Responsive:** Mobile-first, breakpoints at 480px, 768px, and 1024px

### 3.5 Interactions

- IntersectionObserver fade-in + stagger on scroll (0.15 threshold)
- Metric counter animations with easeOutExpo easing (2s duration)
- Smooth anchor scrolling with 72px nav offset
- Hamburger menu for mobile with slide-in panel
- `prefers-reduced-motion` respected — all animations disabled

### 3.6 Work Card Gradient Colours

| Card | Gradient | Palette |
|------|----------|---------|
| Cortex | `#1a1a4e → #2d6a9f` | Navy blue |
| BaaS | `#0d3b2e → #1b8a6b` | Teal green |
| Directshares | `#2d2d3d → #6b5b7b` | Plum slate |
| CIA & WOI | `#2e1a0d → #c4841d` | Amber gold |

---

## 4. Content Inventory

### 4.1 Case Study: Cortex — Enterprise AI & Customer Data Engine

| Field | Detail |
|-------|--------|
| **Role** | Executive Manager, Data Strategy, Cortex & AI Services |
| **Dates** | Jul 2025–Present (+ prior roles from Jun 2022) |
| **One-liner** | Enterprise 360° customer view powering ML models, real-time APIs, and personalised banking |
| **Phase 1** | Customer Obsession Framework, DataIku ML models, ERD data product, operating model |
| **Phase 2** | Cortex Suite (Customer Cortex, Interactions, Transcat), APIs serving 20M+ records |
| **Visuals** | Cortex Suite product cards (interactive embed), 4 redacted screenshots |
| **Metrics** | Redacted — directional only (e.g., "millions of records", "multiple ML models") |

### 4.2 Case Study: Banking-as-a-Service Platform

| Field | Detail |
|-------|--------|
| **Roles** | Product Owner (Dec 2019–Apr 2021) → Head of Deposit Products (May 2021–Jun 2022) |
| **One-liner** | Australia's first Big Four BaaS core banking platform on 10X's cloud stack |
| **Partners** | Afterpay Money (3.3M customers), SocietyOne |
| **Award** | iTnews Benchmark Award — Best Finance Project 2022 |
| **Visuals** | 4 Afterpay Money app screenshots, CSS architecture diagram, press grid (6 articles) |
| **Metrics** | 500K+ new accounts, 99.9% API uptime, NPS 70+ |
| **Press** | iTnews (×3), Westpac Wire (×2), Business Insider (×1) |

### 4.3 Case Study: Directshares — Retail Share Trading

| Field | Detail |
|-------|--------|
| **Role** | Senior Product Manager, St.George Directshares |
| **Dates** | Jan 2017–Nov 2019 |
| **One-liner** | P&L ownership, migrated customers from ANZ to CMC Markets, safeguarded $10M annual revenue |
| **Visuals** | 5 app screenshots from App Store (portfolio dashboard, holdings, international markets, charting, order ticket) |
| **Metrics** | $10M revenue safeguarded, 4.7★ app rating, zero trading disruption |

### 4.4 Case Study: Cash Investment Account & WOI OneClick

| Field | Detail |
|-------|--------|
| **Roles** | Senior BA (Jul 2010–Apr 2011) → Product Manager & PO (Apr 2011–Dec 2016) |
| **One-liner** | Launched award-winning cash product (~$2B FUM), drove digital transformation (doubled accounts, ~$5M revenue) |
| **Phase 1** | CIA launch — integrated banking and investing, award-winning product |
| **Phase 2** | WOI OneClick — digital origination, pricing architecture, 2× acquisition |
| **Visuals** | 2 screenshots (settlement account selection, onboarding flow) |
| **Awards** | Financial Review Smart Investor Blue Ribbon, Canstar |
| **Metrics** | ~$2B FUM, ~$5M annual revenue, 2× accounts, 80% pre-population, <15min application |

### 4.5 Recognition

| Award | Context |
|-------|---------|
| BT CEO Star Award | Leadership in program execution and customer-centricity |
| Financial Review Smart Investor Blue Ribbon Award | Westpac Cash Investment Account |
| Canstar Award | CIA product excellence |
| iTnews Benchmark Award | Best Finance Project 2022 — BaaS |

### 4.6 Testimonials

| Author | Quote Summary |
|--------|---------------|
| Soon Yuen | Strategic vision, technical expertise, data products operating model |
| David Morrissey | Digital origination champion, doubled new accounts, revenue uplift |

### 4.7 Career Timeline (Corrected)

| Dates | Title | Organisation |
|-------|-------|-------------|
| Jul 2025–Present | Executive Manager, Data Strategy, Cortex & AI Services | Westpac — DDAI |
| Nov 2024–Jul 2025 | Director, Customer Data Management & Delivery | Westpac — Consumer CDO |
| Jun 2022–Nov 2024 | Executive Manager, Data & AI Products | Westpac — DSPT |
| May 2021–Jun 2022 | Head of Deposit Products, BaaS | Westpac |
| Dec 2019–Apr 2021 | Product Owner, Product Stream, BaaS | Westpac |
| Jan 2017–Nov 2019 | Senior Product Manager, St.George Directshares | St.George / Westpac |
| Apr 2011–Dec 2016 | Product Manager & Product Owner, WOI | BT Financial Group |
| Jul 2010–Apr 2011 | Senior Business Analyst, WOI | Westpac Institutional Bank |
| Jun 2007–Jul 2010 | Business Analyst, E*Trade Australia | ANZ |
| Jan 2004–Jan 2007 | Business / Technical Analyst | TCS (AMEX, Woolworths) |

---

## 5. Build Log — What Was Done

### Thread 1: Portfolio Page To-Do List (`T-019d7074`)
- Established the PRD, design system, and master to-do list
- Created `design.md` with typography, colour palette, and layout principles
- Created `tasks/todo.md` with phased plan across 5 phases
- Built initial prototype: `index.html`, `style.css`, `script.js`
- Implemented Hero, Metrics Strip, About, Work Grid, Career Timeline, Recognition, AI Fluency, Writing, and Contact sections
- Set up IntersectionObserver for fade-in animations
- Built metric counter animation with easeOutExpo easing
- Implemented smooth scroll navigation with 72px offset
- Built mobile hamburger menu with slide-in panel
- Added `prefers-reduced-motion` support

### Thread 2: Cortex Website Screenshot Redaction (`T-019d70cd`)
- Saved 4 Cortex website screenshots to `assets/images/`
- Redacted all sensitive metrics (replaced with directional language)
- Added "Product Suite" section with screenshot gallery
- Added "Deep Dive: Inside Each Product" with 3 captioned screenshots
- Removed all links to internal/password-protected Cortex website
- Updated Project Hawkeye description (from "FICO replacement" to "in-house ML models")
- Clarified MyEDB Heart description

### Thread 3: Directshares Case Study (`T-019d70e7`)
- Built full case study section (`#case-study-directshares`)
- Added Challenge, Approach, Shipped, Impact, and Learned sections
- Downloaded 5 app screenshots from App Store
- Created compact `case-gallery-app-row` layout (5 screenshots in a single row)
- Fixed work card pill label and anchor link
- Added responsive reflow for app screenshots (3-col on tablet, 2-col on mobile)

### Thread 4: Customer Data Role Update (`T-019d70f5`)
- Corrected resume date errors:
  - Director role: Nov 2025 → **Nov 2024–Jul 2025**
  - EM Data & AI Products: Jun 2022–Nov 2025 → **Jun 2022–Nov 2024**
- Added Director role to career timeline with description
- Updated current role card to "Executive Manager, Data Strategy, Cortex & AI Services"
- Added latest role (Jul 2025–Present) not present in the June 2025 resume

### Thread 5: BaaS Case Study Content (`T-019d710b`)
- Built full BaaS case study section (`#case-study-baas`)
- Added two-phase role trajectory (Product Owner → Head of Deposit Products)
- Created CSS-based architecture diagram (Partner → BaaS → Westpac/10X Core)
- Added Afterpay Money product section with 4 app screenshots
- Built press grid with 6 media references (iTnews, Westpac Wire, Business Insider)
- Added iTnews Benchmark Award to Recognition section

### Thread 6: Page Tiles & Content Amendments (`T-019d71c2`)
- Reorganised work grid into final 2×2 layout
- Merged CIA and WOI OneClick into single case study
- Added Cortex Suite interactive product cards (dark-themed embed with SVG icons)
- Added Phase 1 accomplishments to Cortex case study
- Added profile photo to About sidebar with circular crop and gold border
- Fixed timeline CSS rendering (vertical line, gold markers)
- Fixed work card gradient heights (16:9 aspect ratio)
- Corrected stagger-children CSS for sequential animations
- Added `aria-expanded` tracking for mobile nav

### Thread 7: Current Thread — Final Defect Fixes (`T-019d721f`)
- **Hero subtitle:** Changed "20+ years" to "15+ years" to match resume
- **Metrics strip:** Changed years from 20+ to 15+, removed "15+ ML Models" (not in resume), changed awards from 3 to 4
- **About section:** Changed "Over 20 years" to "Over 15 years", corrected "AMEX" to "American Express"
- **Work card blank bug:** Removed `<a>` wrapper with `display:contents` around BaaS card that broke stagger animations; moved link inside card body
- **Stagger animation fix:** Added `.stagger-children` to IntersectionObserver selector (was only observing `.fade-in`, so stagger containers were never triggered)
- **Work card sizing:** Reduced gradient banner aspect ratio from `16/9` to `3/1` for more compact cards
- **Colour differentiation:** Changed Directshares gradient from blue (`#1a2e4a → #4a7fb5`) to plum-slate (`#2d2d3d → #6b5b7b`) to avoid repetition with Cortex

---

## 6. File Structure

```
Shalini Portfolio Page/
├── index.html              ← Main page (all sections, 910+ lines)
├── style.css               ← Styles (1745 lines, responsive, animations)
├── script.js               ← Interactions (200 lines, observers, counters, nav)
├── design.md               ← Design system reference
├── PORTFOLIO-PROJECT.md    ← THIS FILE
├── tasks/
│   └── todo.md             ← Master to-do list (phased)
└── assets/
    ├── shalini-profile.jpg ← Headshot (circular crop in About sidebar)
    ├── cortex-icon.svg     ← Cortex product card icon
    ├── interactions-icon.svg ← Interactions product card icon
    ├── transcat-icon.svg   ← Transcat product card icon
    └── images/
        ├── cortex-suite-products.png
        ├── cortex-customer-profiles.png
        ├── cortex-customer-interactions.png
        ├── cortex-transaction-categorisation.png
        ├── baas-afterpay-auth.png
        ├── baas-afterpay-home.png
        ├── baas-afterpay-savings.png
        ├── baas-afterpay-success.png
        ├── directshares-app-1.jpg
        ├── directshares-app-2.jpg
        ├── directshares-app-3.jpg
        ├── directshares-app-4.jpg
        ├── directshares-app-5.jpg
        ├── woi-share-trading-join.png
        ├── woi-onboarding-flow.png
        ├── woi-cash-investment-account.png
        └── woi-cia-apply.png
```

---

## 7. Defects Fixed

| # | Defect | Root Cause | Fix |
|---|--------|-----------|-----|
| 1 | Hero said "20+ years" — resume says "15+" | Content not validated against resume | Updated hero subtitle and About section |
| 2 | Metrics showed 20+ years, 15+ ML models, 3 awards | Numbers fabricated / not in resume | Corrected to 15+ years, removed ML models metric, updated to 4 awards |
| 3 | Work cards blank (only BaaS visible) | `<a>` wrapper with `display:contents` bypassed `opacity:0` for BaaS but broke stagger for siblings | Removed wrapper, made all cards consistent `<article>` children |
| 4 | Stagger animations never fired | JS only observed `.fade-in`, not `.stagger-children` | Added `.stagger-children` to `querySelectorAll` selector |
| 5 | Work card tiles too tall | `aspect-ratio: 16/9` on gradient banner | Changed to `3/1` |
| 6 | Two blue tiles looked identical | Cortex and Directshares both used blue gradients | Changed Directshares to plum-slate (`#2d2d3d → #6b5b7b`) |
| 7 | CIA card linked to Cortex case study | Wrong `href` on card link | Corrected to `#case-study-cia` |
| 8 | Timeline CSS not rendering | Class mismatches (`.timeline-track` vs `.timeline`) | Fixed CSS selectors |
| 9 | Directshares card didn't navigate | `href` pointed to `#case-study-detail` (Cortex) | Fixed to `#case-study-directshares` |

---

## 8. Outstanding Items

### 8.1 High Priority (Before Go-Live)

- [ ] Add favicon (monogram "S" in navy/gold)
- [ ] Add Open Graph / social meta tags (title, description, preview image)
- [ ] Final cross-browser test (Chrome, Safari, Firefox, Edge)
- [ ] Final mobile test (iOS Safari, Android Chrome)
- [ ] Lighthouse audit — target score 90+ across all categories

### 8.2 Medium Priority

- [ ] Add print stylesheet for clean PDF export
- [ ] Optimise images (compress PNGs/JPGs, consider WebP)
- [ ] Add subtle loading state / page transition
- [ ] Review WCAG AA compliance (contrast audit, keyboard navigation test)

### 8.3 Content Pipeline

- [ ] Draft Article 1: "Why AI in Banking Needs Product Thinking, Not Just Data Science"
- [ ] Draft Article 2: "How PMs Can Use AI Agents to 10x Their Output"
- [ ] Draft Article 3: "Data Product Operating Models: Lessons from Building Cortex"
- [ ] Replace "Coming Soon" badges with published articles

### 8.4 Deployment

- [ ] Register custom domain
- [ ] Deploy to GitHub Pages / Netlify / Cloudflare Pages
- [ ] Configure SSL
- [ ] Submit to Google Search Console
- [ ] Set up privacy-first analytics (Plausible or Cloudflare Analytics)

### 8.5 Post-Launch

- [ ] Share with trusted peers for feedback
- [ ] Quarterly content refresh (update metrics, add achievements)
- [ ] Add 1–2 more testimonials

---

## 9. Deployment Guide

### Option A: GitHub Pages (Free)

1. Create a new repo on [github.com/new](https://github.com/new) (e.g., `shalini-portfolio`)
2. Upload files via **Add file → Upload files** (drag & drop):
   - `index.html`, `style.css`, `script.js`, `design.md`, `assets/` folder
3. Go to **Settings → Pages** → Source: `main` / `/ (root)` → Save
4. Site live at: `https://YOUR_USERNAME.github.io/shalini-portfolio/`

### Option B: Netlify (Free, Custom Domain)

1. Sign up at [netlify.com](https://netlify.com) with GitHub
2. **New site → Deploy manually** → drag & drop project folder
3. Configure custom domain under **Domain management**
4. SSL auto-provisioned via Let's Encrypt

### Option C: Cloudflare Pages (Free, Fast CDN)

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repo or **Direct Upload**
3. Configure custom domain
4. Built-in analytics (privacy-first)

---

*Generated: 09 April 2026*
