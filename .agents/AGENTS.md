# Vlastina Web – Agent Instructions & Development Guidelines

You are an expert Frontend & UX Developer assisting in building and refining the Single Page Application (SPA) for **Vlastina**, a community and movement space in Prague 6 founded by the association **Vlastina Paradox** in partnership with **Blackout Paradox**.

---

## 1. Role & Source of Truth (SSOT)

* **Content & Copy SSOT**: All user-facing texts, tone-of-voice nuances, schedules, pricing tiers, and rules **MUST** be pulled strictly from `Vlastina web design.md`.
  * **DO NOT** invent placeholder text, English copy, or alter the community-driven tone.
  * Target audience: Dancers, flow artists, aerialists, circus performers, musicians, and spiritual/community facilitators.
* **Technical Instruction Manual**: This file (`AGENTS.md`) defines the technical constraints, DOM hierarchy, styling conventions, and behavioral guardrails for changes across `index.html`, `style.css`, and `app.js`.

---

## 2. Architectural Guardrails & Invariants

When editing `index.html` or associated styles, you **MUST NEVER**:
1. **Break Tab Navigation IDs**: The single-page JavaScript router in `app.js` relies strictly on explicit section IDs and matching `data-target` attributes:
   * `#uvod`
   * `#o-vlastine`
   * `#pravidelne-akce`
   * `#nasledujici-akce`
   * `#kalendar-a-rezervace`
   * `#prakticke-info`
   * `#galerie`
   * `#kontakty`
   Do not rename, delete, or nest these core `<section>` elements without ensuring all `data-target` and anchor attributes match consistently.
2. **Break Lightbox / Interactive Hooks**:
   * Preserve `#lightbox-modal`, `.lightbox-close`, and `#lightbox-img`.
   * Preserve `#btn-show-archive` and `#events-archive` (with `.hidden` toggle mechanism).
   * Preserve the Google Calendar container structure (`.calendar-wrapper`, `.calendar-container`).
3. **Introduce Heavy Dependencies**: Keep the stack pure: **Semantic HTML5, Vanilla CSS3, Vanilla ES6 JavaScript**, and FontAwesome 6 (CDN). No external UI frameworks (no Tailwind, Bootstrap, React, or jQuery).

---

## 3. Section Implementation Directives

Map content directly from `Vlastina web design.md` (Section 3) into `index.html` according to the following component specifications:

### 3.1 Úvod (`#uvod`)
* **Badges & Tags**: Update the badge and `.hero-features` items to reflect:
  1. Baletizol a 8 závěsných bodů (`fa-solid fa-feather`)
  2. Kuchyňka a útulná lounge (`fa-solid fa-mug-hot`)
  3. Parkování v areálu zdarma (`fa-solid fa-square-parking`)
  4. Kapacita až 60 lidí (`fa-solid fa-users`)
* **Actions**: Primary CTA links to `#kalendar-a-rezervace` (Chci rezervovat prostor), Secondary CTA links to `#pravidelne-akce` (Přijít na volný trénink).

### 3.2 O Vlastině (`#o-vlastine`)
* Structure the copy into clear semantic blocks:
  * *Bláznivý sen o velkém obýváku* (emotional origin story & self-renovation struggle).
  * *Prostor s duší* (technical capacity: 20 active movers on baletizol / 60 seated, 8 kotevních bodů).
  * *Děkujeme, že tvoříte s námi* (explicit gratitude to Donio supporters, volunteers, spolek Vlastina Paradox and Blackout Paradox).
* Retain the photo showcase layout (`.gallery-showcase` with `#about-gallery-display` on the main `<img>` and `.gallery-thumbs` for interactive thumbnails).

### 3.3 Pravidelné akce (`#pravidelne-akce`)
* **Hero Card – Volný Trénink (Open Training)**:
  * Place at the very top of the section as a high-prominence featured card (full-width `.glass-panel .card .class-card`).
  * Must clearly display:
    * **When**: Link to `#kalendar-a-rezervace` (Aktuální termíny najdete v kalendáři obsazenosti).
    * **Price**: **300 Kč / vstup** (highlight that payment is **cash-only** / pouze v hotovosti).
    * **Key rigging feature**: 8 certified rigging points for aerial silks/hoops/trapeze.
    * **Footwear requirements**: Clean indoor shoes with soft sole, socks, or barefoot.

### 3.4 Následující akce (`#nasledujici-akce`)
* Upcoming events placeholder card: *Akce se připravují*.
* Maintain the hidden archive toggle container (`#events-archive`) with the single past event: *16. 6. 2026 Vlastina Paradox otevření dveří*.

### 3.5 Kalendář a rezervace (`#kalendar-a-rezervace`)
* **Booking Steps**: Explain manual booking via `vlastinaparadox@gmail.com`.
* **Google Calendar**: Embedded iframe for `vlastinaparadox@gmail.com`.
* **Pricing Grid**: Reflect the hourly model:
  * *Pronájem celého prostoru:* **800 Kč** za první hodinu, poté **600 Kč** za každou další hodinu.
  * Explicit note regarding individual conditions for non-profit, community, and long-term rental projects.
* **Pravidla užívání prostoru (House Rules)**: Implement an icon-based list (`.rules-grid`) highlighting baletizol care, closed windows towards residential block after 22:00, cleanliness, no indoor smoking, and kitchen etiquette.

### 3.6 Praktické informace (`#prakticke-info`)
* **Location & Landmark Callout**: Vlastina 889/23, Praha 6 (directly on the 1st floor above the JamJam climbing gym).
* **Google Maps Embed & Link**: Map embed of Vlastina Paradox with external link to `https://maps.app.goo.gl/Th8uEFKo9Sxrz6WF9`.
* **Parking & Gate Alert**: Free parking; midnight (00:00) lock-down code warning.
* **Outdoor Space**: Open courtyard space in front of Vlastina.
* **Amenities Grid**:
  * 8 aerial rigging points
  * Taneční baletizol & velkoformátová zrcadla (10 × 14 m / 140 m², celkem 240 m²)
  * Možnost skladování věcí (pouze pro dlouhodobý pronájem)
  * Ozvučení, dětský hrad, kuchyňka, chillout lounge a toalety na patře.

### 3.7 Kontakty & Patička (`#kontakty`)
* Primary email: `vlastinaparadox@gmail.com` (for all inquiries, events, and bookings). No phone number.
* Organizer identification: **spolek Vlastina Paradox**, IČO: 29962056, ve spolupráci s **Blackout Paradox** (link to blackoutparadox.com).
* Social links:
  * Facebook: `https://www.facebook.com/profile.php?id=61586614513074`
  * Instagram: `https://www.instagram.com/vlastina_paradox`
* Footer: `© 2026 Vlastina space. Vytvořeno s láskou pro komunitu spolkem Vlastina Paradox a přáteli.`

---

## 4. Design & CSS Conventions

* **Design Tokens**: All core values live as CSS custom properties in `:root` (see top of `style.css`). Always use the `var(--…)` tokens instead of hard-coded values.
* **Glassmorphism Theme**: Ensure readability against dark backgrounds. `.glass-panel` uses `background: var(--color-bg-card)` (`rgba(26, 26, 30, 0.4)`), `backdrop-filter: blur(12px) saturate(180%)`, and `border: 1px solid var(--color-border-glass)` (`rgba(255, 255, 255, 0.08)`).
* **Accent Colors** (defined as custom properties):
  * Primary / Performance Warmth: `--color-accent-primary: #ff7a00` (Fire Amber), hover `--color-accent-primary-hover: #e06c00`
  * Supportive / Highlight: `--color-accent-secondary: #00f2fe` (Cyber Neon Teal), hover `--color-accent-secondary-hover: #00c6d2`
  * Danger / Warning (for Midnight Gate & Baletizol rules): `--color-accent-red: #e50914` (Crimson Performance Red)
* **Typography**:
  * Headings: `--font-heading: 'Space Grotesk', system-ui, sans-serif` (weights `700`/`800`)
  * Body & Descriptions: `--font-body: 'Outfit', 'Inter', system-ui, sans-serif` (weights `400`/`500`/`600`)
* **Spacing**: Preserve responsive spacing (`clamp()` or consistent rems). Avoid horizontal overflow on mobile viewports (< 480px). Ensure longer navigation titles like "Kalendář a rezervace" do not wrap awkwardly or break layout.

---

## 5. Verification & Acceptance Checklist

Before finalizing any changes to `index.html` or `style.css`, verify:
- [ ] **Tab Switcher Test**: Clicking every nav item toggles the active view without reloading or throwing JavaScript console errors, including `#kalendar-a-rezervace`.
- [ ] **Volný Trénink Prominence**: Is the free training card immediately noticeable with cash-only badge and link to calendar?
- [ ] **House Rules Clarity**: Are baletizol furniture prohibition and window-closing rules clearly highlighted?
- [ ] **Night Gate Notice**: Is the midnight (00:00) lock warning clearly legible in Practical Info?
- [ ] **Social Media Links**: Facebook links to official Vlastina Paradox profile, Instagram to `@vlastina_paradox`.
- [ ] **Mobile Responsiveness**: Test grid layouts and navbar items.
- [ ] **Asset Paths**: Check that image paths in `resources/images/` match actual local file names.
- [ ] **No Copy Hallucinations**: Verify all Czech phrasing strictly adheres to `Vlastina web design.md`.