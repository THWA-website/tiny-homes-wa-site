# THWA Wix Website — Setup Guide
# Authority: Jason Thomas Cawley

---

## Overview

This guide explains how to implement the THWA website on Wix using the files in this repo. There are two approaches depending on your Wix plan.

---

## OPTION A — Wix Editor X / Studio (Recommended)

### Step 1: Create Your Wix Site
1. Go to wix.com → Create New Site
2. Choose "Blank Template" (gives full control)
3. Select "Wix Editor X" or "Wix Studio" for best results

### Step 2: Add Global CSS
1. In Wix Editor → Click "Dev Mode" (top right)
2. Go to **Site** → **Custom CSS**
3. Paste the entire contents of `assets/css/global.css`
4. Save

### Step 3: Add Homepage CSS
1. In the Homepage editor → **Page CSS**
2. Paste the entire contents of `assets/css/homepage.css`
3. Save

### Step 4: Add Header
1. In Wix Editor → **Header** section
2. Click "Edit Header"
3. Add an **HTML Component** (Insert → Embed → HTML iframe)
4. Paste the header HTML from `assets/js/components.js` (the `HEADER_HTML` constant)
5. Set to full-width

### Step 5: Add Footer
1. In Wix Editor → **Footer** section
2. Same process as header — paste `FOOTER_HTML` from `components.js`

### Step 6: Add Page Sections
For each section in `pages/index.html`:
1. In Wix Editor → Add Section
2. Add HTML Component
3. Paste the section HTML
4. Adjust sizing as needed

### Step 7: Add JavaScript (Wix Velo)
1. Enable **Wix Velo** (Dev Mode → Enable Velo)
2. Go to **Public Files** → Create `homepage.js`
3. Paste contents of `assets/js/homepage.js`
4. In page code, import: `import './public/homepage.js'`

---

## OPTION B — Wix HTML Embed (Simpler)

If you want to embed the entire homepage as a single HTML file:

1. In Wix Editor → Add → Embed → Full Page HTML
2. Paste the entire `pages/index.html` content
3. Set to full-page width and height

**Note:** This approach gives less Wix integration but is faster to implement.

---

## OPTION C — Deploy as Static Site (Non-Wix)

If you want to host outside Wix (Netlify, Vercel, GitHub Pages):

```bash
# Clone the repo
git clone https://github.com/THWA-website/THWA-Wix-Website.git
cd THWA-Wix-Website

# Serve locally
npx serve .

# Or deploy to Netlify
netlify deploy --dir=. --prod
```

The site works as a pure static HTML/CSS/JS site with no build step required.

---

## Wix-Specific Tips

### Images
- Upload all images to Wix Media Manager
- Replace Unsplash URLs with your Wix media URLs
- Use Wix's built-in image optimisation

### Forms
- Replace the contact form HTML with Wix Forms widget
- Connect to Wix CRM for lead capture
- Set up email notifications in Wix Automations

### 3D Configurator Embed
- The configurator runs on a separate domain/port
- Embed it in Wix using: Insert → Embed → Website
- Set the URL to your configurator endpoint
- Recommended size: 100% width, 700px height

### SEO
- Add meta tags in Wix SEO Settings (not in HTML)
- Use Wix SEO Wiz for guided optimisation
- Submit sitemap via Wix → Marketing → SEO → Sitemap

### Analytics
- Add Google Analytics via Wix → Marketing → Google Analytics
- The `window.trackEvent()` function in `components.js` will automatically use `gtag` if present

---

## Page Structure Reference

```
Homepage sections (in order):
1. Hero — full viewport, parallax background
2. Trust Bar — 5 trust signals
3. Products — 3-column product grid
4. Configurator CTA — green section with feature list
5. How It Works — 4-step process
6. Sustainability — stats + visual
7. Testimonials — 3-column grid
8. FAQ — accordion
9. Final CTA — conversion section
```

---

## Colour Reference for Wix

| Wix Colour Slot | Value | Usage |
|---|---|---|
| Primary | `#2C5530` | THWA Green |
| Secondary | `#8FBC8F` | Light Green |
| Accent | `#D4A574` | Warm Gold |
| Dark | `#1a2332` | Dark Navy |
| Light | `#F8F9FA` | Background |

---

## Contact

**Authority:** Jason Thomas Cawley  
**Email:** hello@tinyhomeswa.com.au  
**Phone:** 1800 TINY WA