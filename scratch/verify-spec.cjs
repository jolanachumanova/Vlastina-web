const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
const css = fs.readFileSync(path.join(rootDir, 'style.css'), 'utf-8');
const js = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf-8');

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
    assert(html.includes('240 m') || html.includes('240&nbsp;m'), 'Missing 240 m2');
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
