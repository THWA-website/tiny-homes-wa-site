# THWA Wix Website
## Tiny Homes WA — Public Website Build
**Authority: Jason Thomas Cawley**

---

## What This Is

The complete public-facing website for Tiny Homes WA (`tinyhomeswa.com.au`), extracted and improved from the THWA 3D Configurator repo (ENGINE_4_WEBSITE).

This repo contains all HTML, CSS, and JavaScript needed to build and deploy the THWA website on Wix (or any static host).

---

## Structure

```
thwa-wix-website/
├── pages/
│   └── index.html          ← Homepage (complete)
├── components/
│   └── (header/footer injected via JS)
├── assets/
│   ├── css/
│   │   ├── global.css      ← Design system, header, footer
│   │   └── homepage.css    ← Homepage-specific styles
│   └── js/
│       ├── components.js   ← Header + Footer injection
│       └── homepage.js     ← FAQ, animations, scroll effects
├── data/
│   └── (product data JSONs)
└── docs/
    └── WIX_SETUP_GUIDE.md
```

---

## Pages Included

| Page | File | Status |
|---|---|---|
| Homepage | `pages/index.html` | ✅ Complete |
| Products | `pages/products.html` | 🔜 Next |
| Configurator | `pages/configurator.html` | 🔜 Next |
| Gallery | `pages/gallery.html` | 🔜 Next |
| Services | `pages/services.html` | 🔜 Next |
| About | `pages/about.html` | 🔜 Next |
| Contact | `pages/contact.html` | 🔜 Next |

---

## Improvements Made (vs original ENGINE_4_WEBSITE)

| Improvement | Detail |
|---|---|
| ✅ Hero redesign | Full-viewport hero with parallax, stats bar, and badge |
| ✅ Trust bar | 5 trust signals below hero (NCC, warranty, Australian Made, etc.) |
| ✅ Product cards | Hover overlay with dual CTAs, price display, spec chips |
| ✅ Configurator CTA section | Dedicated section with feature list and UI preview mockup |
| ✅ Sustainability section | Stats + visual with green building badge |
| ✅ FAQ accordion | Animated expand/collapse with ARIA |
| ✅ Testimonials | 3-column grid with featured card |
| ✅ Final CTA section | Full-width conversion section |
| ✅ Scroll animations | Intersection Observer fade-in on all cards |
| ✅ Mobile navigation | Slide-in mobile menu |
| ✅ Newsletter | Footer newsletter with validation |
| ✅ SEO | Complete meta tags, OG, Twitter Card, Schema.org |
| ✅ Accessibility | ARIA labels, focus styles, reduced motion support |
| ✅ Performance | Lazy loading, passive scroll listeners, CSS variables |

---

## Brand Colours

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#2C5530` | THWA Green — buttons, links, accents |
| `--secondary` | `#8FBC8F` | Light green — hero accent, icons |
| `--accent` | `#D4A574` | Warm gold — badges, highlights |
| `--text-dark` | `#1a2332` | Headings |
| `--text-body` | `#2C3E50` | Body text |

---

## How to Use on Wix

See `docs/WIX_SETUP_GUIDE.md` for full instructions.

**Quick version:**
1. Create a Wix site
2. Use Wix Editor → Add HTML/Embed elements
3. Paste CSS into Wix Custom CSS
4. Paste HTML sections into Wix pages
5. Use Wix Velo for JavaScript functionality

---

## Authority

**Founder:** Jason Thomas Cawley  
**Canon:** THWA Cathedral V2  
**Engine:** ENGINE_4_WEBSITE — Public Truth Layer