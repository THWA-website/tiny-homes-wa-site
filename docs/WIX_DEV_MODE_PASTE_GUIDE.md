# THWA — Wix Editor Dev Mode Paste Guide
# Authority: Jason Thomas Cawley
# For: Wix Editor with Dev Mode enabled

---

## OVERVIEW

This guide gives you exact copy-paste instructions for each component in Wix Editor Dev Mode. Everything is self-contained — no npm, no build step, no server required.

---

## COMPONENT 1 — 3D CONFIGURATOR

**File:** `pages/configurator.html`

This is your launch-ready configurator. It uses your real Wix GLB files and is fully self-contained.

### How to add to Wix:

**Option A — Full Page (Recommended)**
1. In Wix Editor → Add a new page called "Configurator"
2. In Dev Mode → Add an **HTML iframe** element (Add → Embed → HTML iframe)
3. Set it to full width, height ~900px
4. Click "Enter Code" and paste the ENTIRE contents of `pages/configurator.html`
5. Save and publish

**Option B — Embedded in existing page**
1. On any page → Add → Embed → HTML iframe
2. Set width: 100%, height: 900px
3. Paste the full `pages/configurator.html` content
4. The configurator will auto-resize on mobile

### Wix PostMessage Integration (Velo)
Add this to your page's Velo code to receive quote data:

```javascript
// In your Wix page code (Velo)
$w.onReady(function () {
  // Listen for configurator messages
  window.addEventListener('message', function(event) {
    const data = event.data;
    
    if (data.type === 'thwaConfiguratorQuote') {
      // Store quote in Wix CRM
      console.log('Quote received:', data.total);
      console.log('Summary:', data.summary);
      
      // Optional: save to Wix database
      // wixData.insert('Quotes', { total: data.total, summary: data.summary });
      
      // Optional: navigate to contact page
      // wixLocation.to('/contact');
    }
    
    if (data.type === 'thwaGetQuote') {
      // User clicked "Get Full Quote" — navigate to contact
      wixLocation.to('/contact?quote=1');
    }
    
    if (data.type === 'SavePlan') {
      // Save plan to Wix database
      // wixData.insert('Plans', data.data);
    }
  });
});
```

---

## COMPONENT 2 — HOMEPAGE

**File:** `pages/index.html`

### How to add to Wix:

The homepage is built as modular sections. You can either:

**Option A — Full page embed**
1. Create a new page or use your existing homepage
2. Add HTML iframe → full width, full height
3. Paste entire `pages/index.html`

**Option B — Section by section (Better for Wix)**
Copy each section separately into Wix HTML embeds:

#### Section 1: Hero
Copy from `<!-- HERO SECTION -->` to `<!-- TRUST BAR -->`
→ Add as HTML iframe, full width, height: 100vh

#### Section 2: Trust Bar
Copy from `<!-- TRUST BAR -->` to `<!-- PRODUCT SHOWCASE -->`
→ Add as HTML iframe, full width, height: 80px

#### Section 3: Products
Copy from `<!-- PRODUCT SHOWCASE -->` to `<!-- 3D CONFIGURATOR CTA -->`
→ Add as HTML iframe, full width, height: auto

#### Section 4: Configurator CTA
Copy from `<!-- 3D CONFIGURATOR CTA -->` to `<!-- HOW IT WORKS -->`
→ Add as HTML iframe, full width, height: auto

#### Section 5: How It Works
Copy from `<!-- HOW IT WORKS -->` to `<!-- SUSTAINABILITY -->`
→ Add as HTML iframe, full width, height: auto

#### Section 6: Testimonials
Copy from `<!-- TESTIMONIALS -->` to `<!-- FAQ PREVIEW -->`
→ Add as HTML iframe, full width, height: auto

#### Section 7: FAQ
Copy from `<!-- FAQ PREVIEW -->` to `<!-- FINAL CTA -->`
→ Add as HTML iframe, full width, height: auto

#### Section 8: Final CTA
Copy from `<!-- FINAL CTA -->` to `<!-- FOOTER -->`
→ Add as HTML iframe, full width, height: auto

---

## COMPONENT 3 — GLOBAL CSS

**File:** `assets/css/global.css`

### How to add to Wix:

1. In Wix Editor → Dev Mode → **Site** tab (left panel)
2. Click **"CSS"** or **"Custom CSS"**
3. Paste the entire contents of `assets/css/global.css`
4. Save

This gives you the THWA design tokens, button styles, and colour variables across all pages.

---

## COMPONENT 4 — HEADER & FOOTER

**File:** `assets/js/components.js`

The header and footer HTML is inside this file as `HEADER_HTML` and `FOOTER_HTML` constants.

### How to add Header to Wix:

1. In Wix Editor → Click the **Header** section
2. Add → Embed → HTML iframe
3. Set to full width, height: 80px
4. Paste the `HEADER_HTML` content (extract from components.js)

### How to add Footer to Wix:

1. In Wix Editor → Click the **Footer** section
2. Add → Embed → HTML iframe
3. Set to full width, height: auto
4. Paste the `FOOTER_HTML` content (extract from components.js)

---

## COMPONENT 5 — HOMEPAGE JAVASCRIPT

**File:** `assets/js/homepage.js`

### How to add to Wix (Velo):

1. Enable Velo Dev Mode
2. Go to **Public Files** in the left panel
3. Create new file: `homepage.js`
4. Paste the contents of `assets/js/homepage.js`
5. In your homepage Velo code, add:
```javascript
import './public/homepage.js';
```

---

## CONFIGURATOR — WHAT'S WORKING AT LAUNCH

| Feature | Status | Notes |
|---|---|---|
| 3D Model Viewer | ✅ Live | Uses your real Wix GLB files |
| Studio 20 GLB | ✅ Live | `9526fd_61e0ee776a424cf3ba603d580790dc90.glb` |
| Studio 30 GLB | ✅ Live | `9526fd_ae75e1743f1a47ad9acc174719f2f749.glb` |
| Studio 40 GLB | ✅ Live | `9526fd_6190641f4d1b4475bc0c02770f6caa9d.glb` |
| Camera presets | ✅ Live | Front, Back, Left, Right, Top, Iso, Interior |
| AR Preview | ✅ Live | Works on iOS/Android via model-viewer |
| CRV/Standard/JTC pathways | ✅ Live | Full pricing logic |
| Colour swatches | ✅ Live | 6 colours |
| Texture selector | ✅ Live | 4 textures |
| Roof selector | ✅ Live | Flat, Sloping, Skillion |
| Kitchen layouts | ✅ Live | 4 options |
| Bathroom options | ✅ Live | 3 options |
| Flooring | ✅ Live | 5 options |
| Interior palettes | ✅ Live | 5 options |
| Add-ons (9 items) | ✅ Live | Full pricing |
| Live pricing | ✅ Live | Updates instantly |
| Inclusions list | ✅ Live | Per model + pathway |
| Community impact | ✅ Live | Charity contribution display |
| PDF export | ✅ Live | jsPDF |
| Copy summary | ✅ Live | Clipboard API |
| Save plan | ✅ Live | localStorage |
| Share/deeplink | ✅ Live | URL params |
| PostMessage API | ✅ Live | Wix Velo integration |
| Mobile responsive | ✅ Live | Single column on mobile |
| Loading states | ✅ Live | Spinner while GLB loads |

---

## WHEN THE WORLD'S BEST CONFIGURATOR IS READY

When the full Babylon.js/Three.js configurator is built, replace the `model-viewer` block with your new viewer. Everything else (pricing, add-ons, pathways, PostMessage) stays the same — just swap the 3D renderer.

The configurator is designed for this upgrade path — the viewer is isolated in the left panel and the pricing/controls are independent.

---

## QUICK CHECKLIST

Before publishing:
- [ ] Paste configurator.html into Wix HTML iframe
- [ ] Set iframe height to 900px minimum
- [ ] Test on mobile (should stack to single column)
- [ ] Test AR button on iPhone/Android
- [ ] Test "Get Full Quote" → should navigate to /contact
- [ ] Test PDF download
- [ ] Test "Send to Site" PostMessage in Velo console
- [ ] Verify GLB models load (may take 5-10 seconds on first load)

---

**Authority: Jason Thomas Cawley**
**Canon: Locked**
**Tiny Homes WA — tinyhomeswa.com.au**