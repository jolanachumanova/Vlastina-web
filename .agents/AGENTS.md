# Vlastina Web – Agent Instructions & Development Guidelines

You are an expert Frontend & UX Developer assisting in building and refining the Single Page Application (SPA) for **Vlastina**, a community and movement space in Prague 6 founded by the theater company **Blackout Paradox**.

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
   * `#rezervace`
   * `#prakticke-info`
   * `#galerie`
   * `#kontakty`
   Do not rename, delete, or nest these core `<section>` elements.
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
  1. Baletizol & 5 kotevních bodů (use icon `fa-solid fa-feather` or `fa-solid fa-anchor`)
  2. Plně vybavená kuchyňka & útulná lounge (`fa-solid fa-mug-hot`)
  3. Parkování v areálu zdarma (`fa-solid fa-square-parking`)
  4. Kapacita až 40 lidí (`fa-solid fa-users`)
* **Actions**: Primary CTA links to `#rezervace` (Chci rezervovat prostor), Secondary CTA links to `#pravidelne-akce` (Přijít na volný trénink).

### 3.2 O Vlastině (`#o-vlastine`)
* Structure the copy into clear semantic blocks:
  * *Bláznivý sen o velkém obýváku* (emotional origin story & self-renovation struggle).
  * *Prostor s duší* (technical capacity: 20 active movers on baletizol / 40 seated).
  * *Děkujeme, že tvoříte s námi* (explicit gratitude to Donio supporters, volunteers, and Blackout Paradox).
* Retain the photo showcase layout (`.gallery-showcase` with `#about-gallery-display` on the main `<img>` and `.gallery-thumbs` for interactive thumbnails).

### 3.3 Pravidelné akce (`#pravidelne-akce`)
* **Hero Card – Volný Trénink (Open Training)**:
  * Place at the very top of the section as a high-prominence featured card (full-width `.glass-panel .card .class-card`).
  * Must clearly display:
    * **When**: Čtvrtek 18:00–22:00 & Neděle 12:00–16:00.
    * **Where**: 1. patro nad lezeckým centrem JamJam.
    * **Price**: **300 Kč / vstup** (highlight that payment is **cash-only** / pouze v hotovosti).
    * **Key rigging feature**: 5 certified rigging points for aerial silks/hoops/trapeze.
    * **Footwear requirements**: Clean indoor shoes with soft sole, socks, or barefoot.
* **Secondary Class Cards**: Regular workshops (Nový cirkus & Pozemní akrobacie) styled as standard grid cards with organizer contacts.

### 3.4 Následující akce (`#nasledujici-akce`)
* Update upcoming event cards with current events (e.g. *Hudební a taneční jam* with voluntary donation / do klobouku).
* Maintain the hidden archive toggle container (`#events-archive`) for past gatherings.

### 3.5 Rezervace & Domácí řád (`#rezervace`)
* **Booking Steps**: Explain manual booking via `rezervace@vlastina.cz`.
* **Pricing Grid**: Reflect the updated hourly model:
  * *Pronájem celého prostoru:* **800 Kč** za první hodinu, poté **600 Kč** za každou další hodinu.
  * Retain note regarding individual conditions for non-profit and community projects.
* **Pravidla užívání prostoru (House Rules)**: Implement an icon-based list (`.rules-grid`) highlighting:
  1. *Péče o baletizol*: Pouze sálová obuv/ponožky/boso. **Přísný zákaz nábytku na baletizolu** a zákaz ostrých předmětů.
  2. *Klid pro sousedy*: Při hlučných akcích a po 22:00 **pevně zavřená okna směrem k paneláku**.
  3. *Ukliď po sobě*: Uvést vše do původního stavu, vynést koše.
  4. *Zákaz kouření uvnitř*: Kouření pouze venku na dvoře.
  5. *Zlaté pravidlo kuchyňky*: „Pokud jsi to ušpinil, umyj to...“ + obsluha myčky a označování jídla.

### 3.6 Praktické informace (`#prakticke-info`)
* **Location & Landmark Callout**: Highlight that Vlastina is located **directly on the 1st floor above the JamJam climbing gym**.
* **Parking & Gate Alert**:
  * Free parking inside the premises.
  * **Midnight lock-down alert** (`.badge` or dedicated warning element): At **00:00 (midnight)** the gate locks with a numeric code lock.
* **Outdoor Space**: Mention the courtyard space in front of Vlastina for relaxation and open-air activities.
* **Amenities Grid**: Update checklist with:
  * 5 aerial rigging points
  * Taneční baletizol & velkoformátová zrcadla
  * Ozvučení (Bluetooth / Jack)
  * Dětský hrad, kuchyňka, chillout lounge a toalety na patře.

### 3.7 Kontakty & Patička (`#kontakty`)
* Primary emails: `info@vlastina.cz` (general/events) and `rezervace@vlastina.cz` (bookings).
* Organizer identification: **Blackout Paradox z.s.**, IČO, and official website link.
* Consistent 2026 copyright and community attribution.

---

## 4. Design & CSS Conventions

* **Design Tokens**: All core values live as CSS custom properties in `:root` (see top of `style.css`). Always use the `var(--…)` tokens instead of hard-coded values.
* **Glassmorphism Theme**: Ensure readability against dark backgrounds. `.glass-panel` uses `background: var(--color-bg-card)` (`rgba(26, 26, 30, 0.4)`), `backdrop-filter: blur(12px) saturate(180%)`, and `border: 1px solid var(--color-border-glass)` (`rgba(255, 255, 255, 0.08)`).
* **Accent Colors** (defined as custom properties):
  * Primary / Performance Warmth: `--color-accent-primary: #ff7a00` (Fire Amber), hover `--color-accent-primary-hover: #e06c00`
  * Supportive / Highlight: `--color-accent-secondary: #00f2fe` (Cyber Neon Teal), hover `--color-accent-secondary-hover: #00c6d2`
  * Danger / Warning (for Midnight Gate & Baletizol rules): `--color-accent-red: #e50914` (Crimson Performance Red)
* **Typography**:
  * Headings: `--font-heading: 'Syne', 'Space Grotesk', system-ui, sans-serif` (weight `800`)
  * Body & Descriptions: `--font-body: 'Outfit', 'Inter', system-ui, sans-serif` (weights `400`/`500`/`600`)
* **Spacing**: Preserve responsive spacing (`clamp()` or consistent rems). Avoid horizontal overflow on mobile viewports (< 480px).

---

## 5. Verification & Acceptance Checklist

Before finalizing any changes to `index.html` or `style.css`, verify:
- [ ] **Tab Switcher Test**: Clicking every nav item toggles the active view without reloading or throwing JavaScript console errors.
- [ ] **Volný Trénink Prominence**: Is the free training card immediately noticeable with cash-only badge and schedule?
- [ ] **House Rules Clarity**: Are baletizol furniture prohibition and window-closing rules clearly highlighted?
- [ ] **Night Gate Notice**: Is the midnight (00:00) lock warning clearly legible in Practical Info?
- [ ] **Mobile Responsiveness**: Test grid layouts — `.grid.col-2`/`.grid.col-3`/`.grid.col-2-3` collapse at `≤ 768px`; `.price-grid` and `.amenities-grid` at `≤ 900px` (2-col) / `≤ 600px` (1-col); `.rules-grid` at `≤ 1024px` (2-col) / `≤ 600px` (1-col); `.gallery-section-grid` at `≤ 900px` (2-col) / `≤ 600px` (1-col).
- [ ] **Asset Paths**: Check that image paths in `resources/images/` and PDFs in `resources/pdf/` match actual local file names.
- [ ] **No Copy Hallucinations**: Verify all Czech phrasing strictly adheres to `Vlastina web design.md`.