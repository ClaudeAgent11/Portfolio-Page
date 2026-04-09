# Portfolio Page — Design System

**Aesthetic:** Monocle-meets-Stripe — editorial, sophisticated, not a LinkedIn clone.

## Typography
| Role | Font | Weight | Details |
|------|------|--------|---------|
| Headings | Playfair Display (Serif) | 700 | letter-spacing: -0.02em |
| Body | Inter (Sans-serif) | 400/500 | line-height: 1.7 |
| Metrics / Numbers | JetBrains Mono | 500 | Tabular numerals for impact stats |

## Colour Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--navy` | `#1a1a2e` | Primary backgrounds, nav, hero |
| `--gold` | `#c9a84c` | Accent — CTAs, hover, borders, highlights |
| `--offwhite` | `#faf9f7` | Page background, cards |
| `--text` | `#2d2d2d` | Body text |
| `--text-light` | `#6b7280` | Secondary / muted text |
| `--white` | `#ffffff` | Card backgrounds, hero text |

## Layout Principles
- **Max-width:** 1200px centred container
- **Whitespace:** Generous — minimum 80px section padding
- **Grid:** CSS Grid for case study cards (auto-fill, minmax 360px)
- **Responsive:** Mobile-first, breakpoints at 768px and 1024px

## Interactions
- IntersectionObserver fade-in + stagger on scroll
- Metric counter animations (0 → target on viewport entry)
- Smooth anchor scrolling with active nav highlighting
- Hamburger menu for mobile
- Subtle hover lift on case study cards (translateY -4px, box-shadow)

## Tech Stack
- Vanilla HTML5, CSS3 (Grid/Flexbox/Custom Properties), Vanilla JS
- No frameworks, no build tools — static files only
- Google Fonts CDN for typography
