const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
const css = fs.readFileSync(path.join(rootDir, 'style.css'), 'utf-8');
const js = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf-8');
let firebaseConfig = {};
try {
    firebaseConfig = JSON.parse(fs.readFileSync(path.join(rootDir, 'firebase.json'), 'utf-8'));
} catch (e) {}

const tests = [];
let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        tests.push({ name, status: 'PASS' });
        passed++;
    } catch (err) {
        tests.push({ name, status: 'FAIL', error: err.message });
        failed++;
    }
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
}

console.log('=== RUNNING SPECIFICATION VERIFICATION SUITE ===\n');

// --- Test Suite A: Architecture & Navigation Guardrails ---
test('A1: Mandatory sections exist including #kalendar-a-rezervace, old #rezervace section ID is not present', () => {
    const requiredSections = [
        'id="uvod"',
        'id="o-vlastine"',
        'id="pravidelne-akce"',
        'id="nasledujici-akce"',
        'id="kalendar-a-rezervace"',
        'id="prakticke-info"',
        'id="galerie"',
        'id="kontakty"'
    ];
    for (const sec of requiredSections) {
        assert(html.includes(sec), `Missing required section: ${sec}`);
    }
    assert(!html.includes('id="rezervace"'), 'Old id="rezervace" should not exist as a section ID');
});

test('A2: Navigation menu links to kalendar-a-rezervace', () => {
    assert(html.includes('data-target="kalendar-a-rezervace"'), 'Missing nav link with data-target="kalendar-a-rezervace"');
    assert(html.includes('href="#kalendar-a-rezervace"'), 'Missing nav link with href="#kalendar-a-rezervace"');
    assert(!html.includes('data-target="rezervace"'), 'Old data-target="rezervace" still found in html');
    assert(!html.includes('href="#rezervace"'), 'Old href="#rezervace" still found in html');
});

test('A3: Lightbox interactive hooks are preserved', () => {
    assert(html.includes('id="lightbox-modal"'), 'Missing #lightbox-modal');
    assert(html.includes('class="lightbox-close"'), 'Missing .lightbox-close');
    assert(html.includes('id="lightbox-img"'), 'Missing #lightbox-img');
});

test('A4: Event archive interactive hooks are preserved with hidden toggle', () => {
    assert(html.includes('id="btn-show-archive"'), 'Missing #btn-show-archive');
    assert(html.includes('id="events-archive"'), 'Missing #events-archive');
    assert(/id="events-archive"[^>]*class="[^"]*hidden[^"]*"/.test(html), '#events-archive must have hidden class initially');
});

// --- Test Suite B: Content SSOT Audit ---
test('B1: Footer contains spolek Vlastina Paradox a přáteli', () => {
    assert(html.includes('spolkem Vlastina Paradox a přáteli'), 'Footer missing "spolkem Vlastina Paradox a přáteli"');
});

test('B2: Úvod section updated with 8 points, capacity up to 60, new text, and hero social buttons', () => {
    assert(/8 závěsných bodů/i.test(html), 'Úvod missing "8 závěsných bodů"');
    assert(/Kapacita až 60 lidí/i.test(html) || /Kapacita až 60/i.test(html), 'Úvod missing "Kapacita až 60"');
    assert(html.includes('oslavu nebo jinou akci'), 'Úvod description missing "oslavu nebo jinou akci"');
    assert(html.includes('užít zajímavou akci ve Vlastině'), 'Úvod description missing "užít zajímavou akci ve Vlastině"');
    // Check hero socials
    const uvodMatch = html.match(/<section id="uvod"[\s\S]*?<\/section>/);
    assert(uvodMatch, 'Section #uvod not found');
    const uvodHtml = uvodMatch[0];
    assert(uvodHtml.includes('hero-socials'), 'Hero missing .hero-socials');
    assert(uvodHtml.includes('facebook.com/profile.php?id=61586614513074'), 'Hero missing FB link');
    assert(uvodHtml.includes('instagram.com/vlastina_paradox'), 'Hero missing IG link');
});

test('B3: O Vlastině contains 60 sedících, 8 kotevních bodů, Vlastina Paradox, and main photo Vlastina_construction.jpg', () => {
    assert(/60 sedících/i.test(html), 'O Vlastině missing "60 sedících"');
    assert(/osmi kotevními body/i.test(html) || /8 kotevními body/i.test(html), 'O Vlastině missing "osmi kotevními body"');
    assert(html.includes('Vlastina Paradox'), 'O Vlastině missing "Vlastina Paradox"');
    const oVlastineMatch = html.match(/<section id="o-vlastine"[\s\S]*?<\/section>/);
    assert(oVlastineMatch, 'Section #o-vlastine not found');
    const oVlastineHtml = oVlastineMatch[0];
    assert(oVlastineHtml.includes('Vlastina_construction.jpg'), 'O Vlastině missing Vlastina_construction.jpg');
    assert(!oVlastineHtml.includes('Křesílka při oslavě.jpg'), 'O Vlastině should not contain Křesílka při oslavě.jpg in thumbs');
});

test('B4: Následující akce has placeholder and single archive event', () => {
    assert(html.includes('Akce se připravují'), 'Následující akce missing placeholder "Akce se připravují"');
    assert(!html.includes('Hudební a taneční jam'), 'Upcoming events should not contain old Jam event');
    assert(html.includes('16. 6. 2026') || html.includes('16.6.2026'), 'Archive missing 16. 6. 2026');
    assert(html.includes('Vlastina Paradox otevření dveří'), 'Archive missing "Vlastina Paradox otevření dveří"');
});

test('B5: Pravidelné akce: Volný trénink without location line, with unguided notice and props loaning', () => {
    assert(html.includes('300 Kč / vstup'), 'Volný trénink missing 300 Kč / vstup');
    assert(/hotovosti/i.test(html), 'Volný trénink missing hotovost');
    assert(!html.includes('ot-location-line'), 'Location line should be removed from Volný trénink');
    assert(html.includes('Tréninky nejsou vedené'), 'Missing "Tréninky nejsou vedené"');
    assert(html.includes('rekvizity pro točení a akrobacii'), 'Missing "rekvizity pro točení a akrobacii" in Volný trénink');
    assert(!html.includes('Nový cirkus a Pozemní akrobacie'), 'Should not contain Nový cirkus workshop');
    assert(/data-target="kalendar-a-rezervace"/.test(html), 'Schedule should link to #kalendar-a-rezervace');
});

test('B6: Kalendář a rezervace section embeds calendar with dark mode styling, email and pricing notes', () => {
    assert(html.includes('calendar.google.com/calendar/embed?src=vlastinaparadox%40gmail.com'), 'Missing Google calendar embed iframe');
    assert(html.includes('vlastinaparadox@gmail.com'), 'Missing vlastinaparadox@gmail.com');
    assert(html.includes('dlouhodobého pronájmu'), 'Missing note about long-term rental in pricing');
    assert(css.includes('invert(90%) hue-rotate(180deg)'), 'CSS missing calendar dark mode filter');
});

test('B7: Praktické info: address, area dimensions, and refined amenities list', () => {
    assert(html.includes('Vlastina 889/23'), 'Missing Vlastina 889/23');
    assert(html.includes('140 m') || html.includes('140&nbsp;m'), 'Missing 140 m2');
    assert(html.includes('250 m') || html.includes('250&nbsp;m'), 'Missing 250 m2');
    assert(html.includes('Rekvizity pro točení a akrobacii k zapůjčení'), 'Missing Rekvizity pro točení a akrobacii k zapůjčení');
    assert(html.includes('dřevěný koutek stylizovaný jako pohádkový hrad s hračkami k dispozici'), 'Missing castle with toys');
    assert(html.includes('pracovat na svých kostýmech'), 'Missing costume work tables note in lounge');
    assert(html.includes('menší bluetooth reproduktor'), 'Missing bluetooth speaker');
    assert(html.includes('čisté toalety přímo v prostoru Vlastiny'), 'Missing toilets note');
    assert(html.includes('skladování věcí'), 'Missing skladování věcí');
});

test('B8: Kontakty: email first, address with newline, no phone, Vlastina Paradox IČO 29962056', () => {
    assert(!html.includes('+420 777 123 456'), 'Phone number should be removed');
    assert(!html.includes('info@vlastina.cz'), 'info@vlastina.cz should be removed');
    assert(!html.includes('rezervace@vlastina.cz'), 'rezervace@vlastina.cz should be removed');
    assert(html.includes('29962056'), 'Missing IČO 29962056');
    assert(html.includes('spolek Vlastina Paradox'), 'Missing spolek Vlastina Paradox');
    assert(!html.includes('aria-label="Website"'), 'Web button should be removed');
    
    const kontaktyMatch = html.match(/<section id="kontakty"[\s\S]*?<\/section>/);
    assert(kontaktyMatch, 'Section #kontakty not found');
    const kontaktyHtml = kontaktyMatch[0];
    const emailIndex = kontaktyHtml.indexOf('vlastinaparadox@gmail.com');
    const addressIndex = kontaktyHtml.indexOf('Vlastina 889/23');
    assert(emailIndex < addressIndex, 'Email must appear before address in Kontakty');
    assert(kontaktyHtml.includes('Vlastina (nad halou JamJam),<br>Vlastina 889/23'), 'Address must contain <br> after comma');
});

test('B9: Galerie contains Staff workshop.jpg and does not contain Vlastina_construction.jpg', () => {
    const galerieMatch = html.match(/<section id="galerie"[\s\S]*?<\/section>/);
    assert(galerieMatch, 'Section #galerie not found');
    const galerieHtml = galerieMatch[0];
    assert(galerieHtml.includes('Staff workshop.jpg'), 'Galerie missing Staff workshop.jpg');
    assert(galerieHtml.includes('Staff workshop'), 'Galerie missing title Staff workshop');
    assert(galerieHtml.includes('Rozehřívací meditace'), 'Galerie missing subtitle Rozehřívací meditace');
    assert(!galerieHtml.includes('Vlastina_construction.jpg'), 'Galerie should not contain Vlastina_construction.jpg');
});

test('B10: Praktické info: Plánek prostoru is view-only (no download link) and uses current plan from /resources/planek', () => {
    const praktickeMatch = html.match(/<section id="prakticke-info"[\s\S]*?<\/section>/);
    assert(praktickeMatch, 'Section #prakticke-info not found');
    const praktickeHtml = praktickeMatch[0];
    assert(praktickeHtml.includes('resources/planek/'), 'Plánek prostoru must reference file in resources/planek/');
    assert(praktickeHtml.includes('Vlastina_Paradox_planek_V2.png'), 'Plánek image must reference Vlastina_Paradox_planek_V2.png');
    assert(fs.existsSync(path.join(rootDir, 'resources/planek/Vlastina_Paradox_planek_V2.png')), 'Rendered plan PNG must exist in resources/planek');
    assert(!praktickeHtml.includes('.pdf'), 'Plánek must be view-only, download link should not be present');
    assert(!praktickeHtml.includes('ke stažení'), 'Download phrase "ke stažení" must not be present in Praktické info');
});

// --- Test Suite C: Mobile Responsiveness Verification ---
test('C1: Responsive viewport meta tag and accessible mobile toggle button', () => {
    assert(html.includes('<meta name="viewport" content="width=device-width, initial-scale=1.0">'), 'Missing standard mobile viewport meta tag');
    assert(html.includes('class="mobile-nav-toggle"'), 'Missing .mobile-nav-toggle in HTML');
    assert(html.includes('aria-label="Otevřít menu"'), 'Missing aria-label on mobile nav toggle button');
    
    // Verify 3 hamburger bars
    const toggleMatch = html.match(/<button class="mobile-nav-toggle"[^>]*>([\s\S]*?)<\/button>/);
    assert(toggleMatch, 'Cannot find mobile-nav-toggle button tag');
    const barCount = (toggleMatch[1].match(/class="bar"/g) || []).length;
    assert(barCount === 3, `Expected 3 bar elements in mobile-nav-toggle, got ${barCount}`);
});

test('C2: Mobile CSS rules for <= 768px (Hamburger toggle, menu drawer, flexible columns)', () => {
    assert(css.includes('@media (max-width: 768px)'), 'Missing @media (max-width: 768px) in style.css');
    
    // Check mobile nav toggle display
    const media768Match = css.match(/@media \(max-width: 768px\) \{([\s\S]*?)\n\}/);
    assert(media768Match, 'Could not parse @media (max-width: 768px) block');
    const media768 = media768Match[1];
    
    assert(media768.includes('.mobile-nav-toggle'), 'Missing .mobile-nav-toggle rules in 768px media query');
    assert(media768.includes('display: flex'), 'Mobile nav toggle should have display: flex in 768px');
    
    // Check nav-menu mobile drawer
    assert(media768.includes('.nav-menu'), 'Missing .nav-menu styling in 768px media query');
    assert(media768.includes('.nav-menu.open'), 'Missing .nav-menu.open drawer styling in 768px');
    assert(media768.includes('flex-direction: column'), 'Mobile nav menu ul should be column');
    
    // Check hero buttons stacking
    assert(media768.includes('.hero-actions'), 'Missing .hero-actions stacking in 768px');
    
    // Check grid collapses to 1fr
    assert(media768.includes('grid-template-columns: 1fr'), 'Grids should collapse to 1fr on mobile');
});

test('C3: Small mobile CSS rules for <= 480px (Compact viewport typography and spacing)', () => {
    assert(css.includes('@media (max-width: 480px)'), 'Missing @media (max-width: 480px) in style.css');
    const media480Match = css.match(/@media \(max-width: 480px\) \{([\s\S]*?)\n\}/);
    assert(media480Match, 'Could not parse @media (max-width: 480px) block');
    const media480 = media480Match[1];
    
    assert(media480.includes('font-size: 2.2rem') || media480.includes('h1'), 'Missing responsive h1 adjustments in 480px query');
    assert(media480.includes('.gallery-grid') && media480.includes('grid-template-columns: 1fr'), 'Gallery grid should be 1 column on <= 480px');
});

test('C4: Mobile navigation controller logic in app.js', () => {
    // Check toggle listener exists
    assert(js.includes('mobileNavToggle.addEventListener("click", toggleMobileMenu)') || js.includes('mobileNavToggle.addEventListener'), 'Missing click listener on mobileNavToggle');
    assert(js.includes('mobileNavToggle.classList.toggle("open")'), 'toggleMobileMenu must toggle open on button');
    assert(js.includes('navMenu.classList.toggle("open")'), 'toggleMobileMenu must toggle open on menu');
    
    // Check auto-close menu when link tapped
    assert(js.includes('navMenu.classList.contains("open")'), 'switchTab should check if mobile navMenu is open');
    assert(js.includes('toggleMobileMenu()'), 'switchTab should call toggleMobileMenu when open');
    
    // Check smooth scroll on tab switch
    assert(js.includes('window.scrollTo({ top: 0, behavior: "smooth" })'), 'switchTab should scroll smoothly to top of viewport');
});

test('C5: Responsive media and iframe containment', () => {
    // Check calendar responsiveness
    assert(css.includes('.calendar-container'), 'Missing .calendar-container in style.css');
    assert(html.includes('<div class="calendar-container">'), 'Calendar iframe must be wrapped in responsive container');
    
    // Check map embed responsive wrapper
    assert(html.includes('class="map-embed-wrapper"'), 'Map iframe must be wrapped in .map-embed-wrapper');
    assert(html.includes('loading="lazy"'), 'Google Map iframe should have loading="lazy" for mobile performance');
    
    // Check image containment in CSS
    assert(css.includes('max-width: 100%') || css.includes('width: 100%'), 'Images should be constrained to 100% width');
});

test('C6: Mobile contact layout places email subtext under the email address without overflow', () => {
    assert(html.includes('class="contact-text-group"'), 'Email contact item should wrap text in .contact-text-group');
    assert(html.includes('contact-subtext'), 'Email annotation should have .contact-subtext class');
    const media768Match = css.match(/@media \(max-width: 768px\) \{([\s\S]*?)\n\}/);
    assert(media768Match, 'Missing 768px media query');
    const media768 = media768Match[1];
    assert(media768.includes('.contact-text-group') && media768.includes('flex-direction: column'), 'Mobile contact-text-group should stack as column');
});

// --- Test Suite D: Security Hardening Verification ---
test('D1: Firebase hosting security configuration (Headers & Ignore rules)', () => {
    assert(firebaseConfig && firebaseConfig.hosting, 'firebase.json is missing hosting configuration');
    const hosting = firebaseConfig.hosting;
    
    // Check ignore rules protect sensitive directories
    const ignoreList = hosting.ignore || [];
    assert(ignoreList.includes('scratch/**'), 'firebase.json ignore must include scratch/**');
    assert(ignoreList.includes('resources/agent-resources/**'), 'firebase.json ignore must include resources/agent-resources/**');
    
    // Check security headers exist
    const headersList = hosting.headers || [];
    assert(headersList.length > 0, 'firebase.json must define headers array');
    
    const rootHeadersConfig = headersList.find(h => h.source === '**');
    assert(rootHeadersConfig, 'firebase.json must have headers rule for source "**"');
    
    const headers = rootHeadersConfig.headers || [];
    const headerMap = {};
    headers.forEach(h => {
        headerMap[h.key.toLowerCase()] = h.value;
    });
    
    assert(headerMap['x-content-type-options'] === 'nosniff', 'Missing X-Content-Type-Options: nosniff header');
    assert(headerMap['x-frame-options'] === 'SAMEORIGIN' || headerMap['x-frame-options'] === 'DENY', 'Missing X-Frame-Options header');
    assert(headerMap['referrer-policy'] === 'strict-origin-when-cross-origin', 'Missing Referrer-Policy header');
    assert(headerMap['permissions-policy'], 'Missing Permissions-Policy header');
    assert(headerMap['content-security-policy'], 'Missing Content-Security-Policy header');
});

test('D2: Subresource Integrity (SRI) on external stylesheets', () => {
    // Check FontAwesome link tag in index.html
    const faMatch = html.match(/<link[^>]*cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome[^>]*>/);
    assert(faMatch, 'Cannot find FontAwesome link tag in index.html');
    const faTag = faMatch[0];
    assert(faTag.includes('integrity="'), 'FontAwesome link tag must have integrity attribute');
    assert(faTag.includes('crossorigin="anonymous"'), 'FontAwesome link tag must have crossorigin="anonymous"');
});

test('D3: Hardened external links with rel="noopener noreferrer"', () => {
    const externalLinkRegex = /<a\s+[^>]*href="https?:\/\/[^"]*"[^>]*target="_blank"[^>]*>/g;
    let match;
    let checkedCount = 0;
    while ((match = externalLinkRegex.exec(html)) !== null) {
        const linkTag = match[0];
        assert(linkTag.includes('rel="noopener noreferrer"'), `External link missing rel="noopener noreferrer": ${linkTag}`);
        checkedCount++;
    }
    assert(checkedCount > 0, 'No external target="_blank" links found to check');
});

test('D4: Clean separation of behavior - No inline onclick handlers in HTML', () => {
    assert(!html.includes('onclick="changeAboutImage'), 'Inline onclick="changeAboutImage" should be removed from HTML');
    assert(!html.includes('onclick="closeLightbox'), 'Inline onclick="closeLightbox" should be removed from HTML');
    assert(!html.includes('onclick='), 'HTML should not contain any inline onclick attributes');
});

// Output results
console.log('Results:');
tests.forEach(t => {
    if (t.status === 'PASS') {
        console.log(`  [PASS] ${t.name}`);
    } else {
        console.log(`  [FAIL] ${t.name}`);
        console.log(`         Error: ${t.error}`);
    }
});

console.log(`\nSummary: ${passed} passed, ${failed} failed.`);
process.exit(failed === 0 ? 0 : 1);
