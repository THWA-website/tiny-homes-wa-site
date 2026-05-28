/**
 * THWA Website — Core Components
 * Authority: Jason Thomas Cawley
 * Handles: Header, Footer, Mobile Nav, Search
 */

// ─── Header HTML ─────────────────────────────────────────────────────────────

const HEADER_HTML = `
<header class="thwa-header" id="main-header">
  <div class="header-inner">
    <a href="/" class="header-logo">
      <div class="header-logo-icon">TW</div>
      <div>
        <div class="header-logo-text">Tiny Homes WA</div>
        <div class="header-logo-sub">tinyhomeswa.com.au</div>
      </div>
    </a>

    <nav class="header-nav" aria-label="Main navigation">
      <div class="nav-item">
        <a href="/products" class="nav-link">
          Our Homes
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="dropdown-grid">
            <div class="dropdown-col">
              <h4>Studio Series</h4>
              <a href="/products/studio-20">Studio 20 (18sqm)</a>
              <a href="/products/studio-30">Studio 30 (28sqm)</a>
            </div>
            <div class="dropdown-col">
              <h4>Family Series</h4>
              <a href="/products/family-40">Family 40 (40sqm)</a>
              <a href="/products/family-50">Family 50 (50sqm)</a>
            </div>
            <div class="dropdown-col">
              <h4>Executive Series</h4>
              <a href="/products/executive-60">Executive 60 (60sqm)</a>
              <a href="/products/executive-80">Executive 80 (80sqm)</a>
              <a href="/products/compare">Compare Models</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="/configurator" class="nav-link">3D Configurator</a>
      </div>

      <div class="nav-item">
        <a href="/gallery" class="nav-link">
          Gallery
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="dropdown-grid">
            <div class="dropdown-col">
              <h4>Browse</h4>
              <a href="/gallery/exteriors">Exteriors</a>
              <a href="/gallery/interiors">Interiors</a>
              <a href="/gallery/installations">Installations</a>
            </div>
            <div class="dropdown-col">
              <h4>Customer Homes</h4>
              <a href="/gallery/customer-stories">Customer Stories</a>
              <a href="/gallery/virtual-tours">Virtual Tours</a>
              <a href="/gallery/before-after">Before & After</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="/services" class="nav-link">
          Services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="dropdown-grid">
            <div class="dropdown-col">
              <h4>Design & Planning</h4>
              <a href="/services/consultation">Free Consultation</a>
              <a href="/services/site-assessment">Site Assessment</a>
              <a href="/services/permits">Permits & Approvals</a>
            </div>
            <div class="dropdown-col">
              <h4>Installation</h4>
              <a href="/services/delivery">Delivery & Installation</a>
              <a href="/services/utilities">Utilities Connection</a>
              <a href="/services/maintenance">Maintenance Plans</a>
            </div>
            <div class="dropdown-col">
              <h4>Financing</h4>
              <a href="/services/financing">Financing Options</a>
              <a href="/services/calculator">Payment Calculator</a>
              <a href="/services/insurance">Insurance Guidance</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="/about" class="nav-link">
          About
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="dropdown-grid">
            <div class="dropdown-col">
              <h4>Company</h4>
              <a href="/about/story">Our Story</a>
              <a href="/about/team">Meet the Team</a>
              <a href="/about/sustainability">Sustainability</a>
            </div>
            <div class="dropdown-col">
              <h4>Resources</h4>
              <a href="/about/faq">FAQ</a>
              <a href="/about/guides">Buyer's Guide</a>
              <a href="/about/blog">Blog</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item">
        <a href="/contact" class="nav-link">Contact</a>
      </div>
    </nav>

    <div class="header-actions">
      <a href="tel:+611800TINYWA" class="header-phone">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        1800 TINY WA
      </a>
      <a href="/configurator" class="btn btn-primary">Start Designing</a>
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <!-- Mobile Nav -->
  <div class="mobile-nav" id="mobile-nav">
    <div class="mobile-nav-inner">
      <a href="/products" class="mobile-nav-link">Our Homes</a>
      <a href="/configurator" class="mobile-nav-link highlight">3D Configurator</a>
      <a href="/gallery" class="mobile-nav-link">Gallery</a>
      <a href="/services" class="mobile-nav-link">Services</a>
      <a href="/about" class="mobile-nav-link">About</a>
      <a href="/contact" class="mobile-nav-link">Contact</a>
      <div class="mobile-nav-ctas">
        <a href="/configurator" class="btn btn-primary btn-full">Start Designing</a>
        <a href="/services/consultation" class="btn btn-outline btn-full">Book Consultation</a>
      </div>
    </div>
  </div>
</header>

<style>
.mobile-nav {
  display: none;
  position: fixed;
  top: var(--header-height);
  left: 0; right: 0; bottom: 0;
  background: white;
  z-index: 999;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}
.mobile-nav.open { transform: translateX(0); }
.mobile-nav-inner { padding: 1.5rem; }
.mobile-nav-link {
  display: block;
  padding: 1rem 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-body);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}
.mobile-nav-link:hover, .mobile-nav-link.highlight { color: var(--primary); }
.mobile-nav-ctas { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
@media (max-width: 768px) { .mobile-nav { display: block; } }
</style>
`;

// ─── Footer HTML ─────────────────────────────────────────────────────────────

const FOOTER_HTML = `
<footer class="thwa-footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo-wrap">
            <div class="footer-logo-icon">TW</div>
            <div class="footer-logo-name">Tiny Homes WA</div>
          </div>
          <p class="footer-brand-desc">Australia's leading tiny home manufacturer, creating sustainable, affordable, and beautifully designed homes that don't compromise on quality or comfort.</p>
          <div class="footer-stats">
            <div>
              <span class="footer-stat-num">500+</span>
              <span class="footer-stat-lbl">Homes Delivered</span>
            </div>
            <div>
              <span class="footer-stat-num">98%</span>
              <span class="footer-stat-lbl">Satisfaction</span>
            </div>
            <div>
              <span class="footer-stat-num">5★</span>
              <span class="footer-stat-lbl">Average Rating</span>
            </div>
          </div>
          <div class="footer-social">
            <a href="https://facebook.com/tinyhomeswa" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com/tinyhomeswa" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://youtube.com/tinyhomeswa" target="_blank" rel="noopener" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://linkedin.com/company/tinyhomeswa" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div class="footer-col">
          <h4>Products</h4>
          <div class="footer-links">
            <a href="/products/studio-20">Studio 20 (18sqm)</a>
            <a href="/products/studio-30">Studio 30 (28sqm)</a>
            <a href="/products/family-40">Family 40 (40sqm)</a>
            <a href="/products/family-50">Family 50 (50sqm)</a>
            <a href="/products/executive-60">Executive 60 (60sqm)</a>
            <a href="/products/executive-80">Executive 80 (80sqm)</a>
            <a href="/products/compare">Compare Models</a>
            <a href="/configurator">3D Configurator</a>
          </div>
        </div>

        <!-- Services -->
        <div class="footer-col">
          <h4>Services</h4>
          <div class="footer-links">
            <a href="/services/consultation">Free Consultation</a>
            <a href="/services/site-assessment">Site Assessment</a>
            <a href="/services/financing">Financing Options</a>
            <a href="/services/delivery">Delivery & Installation</a>
            <a href="/services/permits">Permits & Approvals</a>
            <a href="/services/maintenance">Maintenance Plans</a>
            <a href="/services/warranty">Warranty Service</a>
            <a href="/services/calculator">Payment Calculator</a>
          </div>
        </div>

        <!-- Resources -->
        <div class="footer-col">
          <h4>Resources</h4>
          <div class="footer-links">
            <a href="/about/faq">FAQ</a>
            <a href="/about/guides">Buyer's Guide</a>
            <a href="/gallery">Photo Gallery</a>
            <a href="/gallery/virtual-tours">Virtual Tours</a>
            <a href="/about/blog">Blog</a>
            <a href="/about/sustainability">Sustainability</a>
            <a href="/about/story">Our Story</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        <!-- Contact & Newsletter -->
        <div class="footer-col">
          <h4>Stay Connected</h4>
          <div class="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <div>
              <a href="tel:+611800TINYWA">1800 TINY WA</a>
              <div class="footer-contact-sub">Mon–Fri 8am–6pm AWST</div>
            </div>
          </div>
          <div class="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div>
              <a href="mailto:hello@tinyhomeswa.com.au">hello@tinyhomeswa.com.au</a>
              <div class="footer-contact-sub">24/7 online support</div>
            </div>
          </div>
          <div class="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div>
              <span style="color:white;font-weight:500">Perth, Western Australia</span>
              <div class="footer-contact-sub">Servicing all of WA</div>
            </div>
          </div>
          <div class="footer-newsletter">
            <h4>Get Design Inspiration</h4>
            <p>Join 5,000+ subscribers for tiny home tips and exclusive offers.</p>
            <div class="newsletter-form-wrap">
              <input type="email" class="newsletter-input" placeholder="Your email address" />
              <button class="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-inner">
        <div class="footer-copyright">
          <div>© 2024 Tiny Homes WA Pty Ltd. All rights reserved.</div>
          <div style="margin-top:0.2rem">ABN: 12 345 678 901 | Builder's Licence: BC123456</div>
        </div>
        <div class="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/warranty">Warranty Terms</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/sitemap">Sitemap</a>
        </div>
        <div class="footer-payments">
          We Accept:
          <span class="payment-badge">VISA</span>
          <span class="payment-badge">MC</span>
          <span class="payment-badge">AMEX</span>
          <span class="payment-badge">PayPal</span>
          <span class="payment-badge">Afterpay</span>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {

  // Inject header
  const headerEl = document.getElementById('header-placeholder');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;

  // Inject footer
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Header scroll behaviour
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // Mobile nav toggle
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('#mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (toggle && mobileNav) {
      mobileNav.classList.toggle('open');
      toggle.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    }
  });

  // Newsletter form
  document.addEventListener('submit', function (e) {
    if (e.target.closest('.newsletter-form-wrap')) {
      e.preventDefault();
      const input = e.target.closest('.newsletter-form-wrap').querySelector('.newsletter-input');
      if (input && input.value) {
        alert('Thanks for subscribing! Check your email to confirm.');
        input.value = '';
      }
    }
  });

  // Newsletter button click
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.newsletter-btn');
    if (btn) {
      const input = btn.closest('.newsletter-form-wrap').querySelector('.newsletter-input');
      if (input && input.value && input.value.includes('@')) {
        alert('Thanks for subscribing! Check your email to confirm.');
        input.value = '';
      } else if (input) {
        input.focus();
      }
    }
  });

  // Active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Analytics helper
  window.trackEvent = function (category, action, label) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, { event_category: category, event_label: label });
    }
  };

  // Track CTA clicks
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', function () {
      window.trackEvent('CTA', 'click', this.dataset.track);
    });
  });

});