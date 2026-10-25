# Vlastina – Web Design, UX & Content Specification

Tento dokument slouží jako komplexní podklad a Single Source of Truth (SSOT) pro úpravu a nasazení webových stránek pro neziskový komunitní a tréninkový prostor **Vlastina**.

---

## 1. Cíle projektu a Positioning

* **Co je Vlastina:** Autentický komunitní a tréninkový sál s duší, který v bývalém vojenském areálu na Praze 6 vlastníma rukama vybudoval spolek **Vlastina Paradox** ve spolupráci s **Blackout Paradox** za pomoci dobrovolníků a dárců na Doniu.
* **Hlavní metafora prostoru:** *„Velký obývák s klíči pro ty, kteří tvoří, hýbou se, mají rádi hudbu a hledají bezpečné zázemí.“*
* **Cílová skupina:** Tanečníci, akrobaté, flow artisti, novocirkusoví performeři, hudebníci, lektoři pohybových a seberozvojových workshopů, lidé z kreativní a spirituální komunity.
* **Tone of Voice (ladění textů):** 
  * Vřelý, autentický, lidský a komunitní.
  * Otevřený a zvoucí, bez korporátního klišé a sterilního PR.
  * Respektující – pravidla prostoru jsou formulována přátelsky, ale jednoznačně (péče o společný domov).
* **Technické řešení:**
  * Jednostránková responsivní webová prezentace (SPA) s přepínáním tabů/sekcí v čistém JavaScriptu.
  * Nízké náklady na údržbu, statický hosting, Google Kalendář pro přehled obsazenosti (dark mode), poptávky e-mailem.

---

## 2. Architektura a přehled sekcí webu

1. **Úvod** (`#uvod`) – Vizuální seznámení, silný headline, klíčové atributy (baletizol, 8 závěsných bodů, zázemí, kapacita až 60), sociální tlačítka (FB, IG) a rychlé CTA.
2. **O Vlastině (Příběh & Duše prostoru)** (`#o-vlastine`) – Emoční příběh vzniku, Vlastina Paradox a Blackout Paradox, poděkování komunitě a Doniu, kapacita 60 sedících, fotogalerie s hlavní fotkou rekonstrukce (`Vlastina_construction.jpg`).
3. **Pravidelné akce** (`#pravidelne-akce`) – Zvýrazněný **Volný trénink (Open Training)** pro veřejnost s odkazem na Kalendář pro termíny, bez zbytečné duplikace lokace, info o nevedených trénincích a půjčení rekvizit.
4. **Následující akce & Archiv** (`#nasledujici-akce`) – Placeholder „Akce se připravují“ a archiv minulých událostí (Otevření dveří 16.6.2026).
5. **Kalendář a rezervace** (`#kalendar-a-rezervace`) – Návod na rezervaci, vložený Google Kalendář v tmavém režimu (dark mode), orientační ceny a Domácí řád.
6. **Praktické info & Mapa** (`#prakticke-info`) – Kde přesně nás najdete (Vlastina 889/23, 1. patro nad JamJam), Google Maps embedding, parkování zdarma, noční brána, rozměry (140 m² / 250 m²), kompletní vybavení a zázemí včetně rekvizit, místa pro práci na kostýmech a toalet v prostoru, plánek prostoru (pouze view-only bez možnosti stažení, vždy aktuální ze složky `/resources/planek`).
7. **Galerie** (`#galerie`) – Fotografie sálu, zázemí, Staff workshop a performance.
8. **Kontakty** (`#kontakty`) – E-mail na prvním místě (`vlastinaparadox@gmail.com`), adresa s odřádkováním, Google Maps embedding, oficiální FB Vlastina Paradox, oficiální IG vlastina_paradox, spolek Vlastina Paradox ve spolupráci s Blackout Paradox.

---

## 3. Kompletní texty pro jednotlivé sekce

### 3.1 Hlavička a Navigace
* **Logo text:** VLASTINA
* **Položky menu:**
  1. O Vlastině (`#o-vlastine`, `data-target="o-vlastine"`)
  2. Následující akce (`#nasledujici-akce`, `data-target="nasledujici-akce"`)
  3. Pravidelné akce (`#pravidelne-akce`, `data-target="pravidelne-akce"`)
  4. Kalendář a rezervace (`#kalendar-a-rezervace`, `data-target="kalendar-a-rezervace"`)
  5. Praktické info (`#prakticke-info`, `data-target="prakticke-info"`)
  6. Kontakty (`#kontakty`, `data-target="kontakty"`)
  7. Galerie (`#galerie`, `data-target="galerie"`)

---

### 3.2 Sekce: Úvod

* **Badge:** `Bezpečný přístav pro pohyb, tvorbu a setkávání`
* **Nadpis (H1):** Vlastina
* **Podnadpis (Subtitle):** Velký obývák a tréninkový sál v srdci bývalé základny
* **Popis:**
  > Hledáš prostor pro tanec, akrobacii, jam session, workshop, oslavu nebo jinou akci? Vlastina je otevřené útočiště v Praze 6 pro všechny, kteří tvoří celým tělem i srdcem. Přijď si zatrénovat, sdílet inspiraci nebo si jen užít zajímavou akci ve Vlastině.
* **Klíčové štítky (Features):**
  * `<i class="fa-solid fa-feather"></i> Baletizol a 8 závěsných bodů`
  * `<i class="fa-solid fa-mug-hot"></i> Kuchyňka a útulná lounge`
  * `<i class="fa-solid fa-square-parking"></i> Parkování v areálu zdarma`
  * `<i class="fa-solid fa-users"></i> Kapacita až 60 lidí`
* **Sociální tlačítka (Hero Socials):**
  * Umístěna nad hlavními CTA tlačítky.
  * Facebook: `https://www.facebook.com/profile.php?id=61586614513074`
  * Instagram: `https://www.instagram.com/vlastina_paradox`
* **Tlačítka (CTA):**
  * Primární: `Chci rezervovat prostor` (odkaz na `#kalendar-a-rezervace`)
  * Sekundární: `Přijít na volný trénink` (odkaz na `#pravidelne-akce`)

---

### 3.3 Sekce: O Vlastině (Příběh a vize)

* **Nadpis sekce (H2):** Příběh Vlastiny
* **Podnadpis:** Jak jsme ze zapomenuté vojenské budovy vydupali prostor s duší

* **Textový blok (Levý sloupec):**
  * **H3:** Bláznivý sen o velkém obýváku
  * **Odstavec 1 (Lead):**
    Na začátku byla zdánlivě pošetilá vize: vytvořit místo, kde se budeš cítit jako doma u dobrých přátel, přestože klíče od vchodových dveří nosí v kapse desítky dalších lidí. Když se objevila nabídka v opuštěném areálu bývalé vojenské základny na Vlastině, věděli jsme, že tohle je výzva, která se neodmítá.
  * **Odstavec 2:**
    Plánovat na papíře je snadné. Roztočit kola realizace vlastníma rukama ale bolí. Znamenalo to stovky hodin v montérkách, prach, mozoly a překonávání tisíců drobných zádrhelů, kdy se zdálo, že zdroje i lidské síly narážejí na strop. Když už ruce nemohly a hlava byla plná starostí, podržela nás společná víra v to, co děláme.
  * **Odstavec 3:**
    Dnes je z Vlastiny živé útočiště. Srdcem je velkorysý sál s profesionálním baletizolem a osmi kotevními body pro závěsnou akrobacii (šály, kruhy, lana). Druhým pólem je zázemí s pohovkami, čajovou kuchyňkou a dětským hradem. Prostor pohodlně unese trénink až 20 cvičících v plném pohybu, nebo až 60 sedících a naslouchajících duší při komunitním kruhu, jamu či představení.
  * **H3:** Děkujeme, že tvoříte s námi
  * **Odstavec 4:**
    Vlastina stojí díky obrovské vlně solidarity. Díky laskavé podpoře stovek dárců na **Donio**, desítkám dobrovolníků, kteří tu nechali kus svého srdce, a komunitě, která prostor plní životem. Zázemí s láskou spravuje spolek **Vlastina Paradox** ve spolupráci s **Blackout Paradox** – tvůrci fyzického divadla, fireshow a nového cirkusu.
  * **Závěrečné poselství:**
    *„Každý, kdo k nám vstoupí, vdechuje prostoru kousek své duše. Buď vítán(a) a ciť se tu jako doma.“*
* **Fotogalerie v sekci O Vlastině:**
  * Hlavní zobrazená fotka: `Vlastina_construction.jpg`
  * Náhledy: `Vlastina_construction.jpg`, `Taneční sál s dětmi.jpg`, `Dětský hrad.jpg`, `Kuchyňka.jpg` *(náhled Křesílka při oslavě odstraněn)*.

---

### 3.4 Sekce: Pravidelné akce & Volné tréninky

* **Nadpis sekce (H2):** Pravidelný pohyb a tréninky
* **Podnadpis:** Pravidelné otevřené lekce, flow setkání a prostor pro tvůj vlastní růst

#### Hlavní zvýrazněná karta (Hero Card): Volný Trénink (Open Training)
* **Tag:** `Otevřený trénink pro všechny`
* **Nadpis:** Vlastina – Volný Trénink
* **Motto:** *Pusť se do vzduchu, do tance a do pohybu.*
* **Harmonogram & Vstupné:**
  * **Kdy:** Aktuální termíny najdete v našem [Kalendáři obsazenosti](#kalendar-a-rezervace) *(odkaz vede na sekci Kalendář a rezervace)*
  * *(Lokace v kartě odstraněna)*
  * **Cena / Příspěvek:** **300 Kč / vstup** *(platba pouze v hotovosti)*
* **Pro koho:**
  Tanečníci, flow artisti, novocirkusáci, akrobaté, jogíni a všichni, kdo milují svobodný pohyb. Díky **8 kotevním bodům** je prostor přímo stvořený pro trénink na aerial kruzích, šálách, trapézách a dalších závěsných nářadích.
* **Co tě u nás čeká:**
  Velký sál s baletizolem, zrcadly a závěsnými body. **Tréninky nejsou vedené. K dispozici jsou na půjčení rekvizity pro točení a akrobacii.** Odpočinková zóna s pohodlnými křesly na regeneraci, dětský koutek. Kuchyňka s kávou a čajem.
* **Co s sebou:**
  Čistou sálovou obuv (na baletizolu lze trénovat i na boso nebo v ponožkách).

---

### 3.5 Sekce: Následující akce (Workshopy, oslavy, jamy)

* **Nadpis sekce (H2):** Následující události
* **Podnadpis:** Víkendové workshopy, oslavy, jamy a sousedská setkání

* **Stav akcí (Placeholder):**
  * **Akce se připravují** – Sledujte náš web nebo kalendář, brzy zveřejníme chystané workshopy, jamy, oslavy a setkání.

* **Archiv akcí:**
  * Tlačítko: `Zobrazit proběhlé akce a workshopy`
  * Položka archivu:
    * **16. 6. 2026: Vlastina Paradox otevření dveří**
    * *Popis:* Oficiální představení prostoru pro komunitu, sousedy a přátele.

---

### 3.6 Sekce: Kalendář a rezervace (`#kalendar-a-rezervace`)

* **Nadpis sekce (H2):** Kalendář a rezervace
* **Podnadpis:** Zázemí pro tvůj workshop, zkoušku, tanec, jam nebo oslavu

#### Blok 1: Kalendář obsazenosti
* **Google Kalendář Embed (Dark mode & visual blocks):**
  ```html
  <iframe src="https://calendar.google.com/calendar/embed?src=vlastinaparadox%40gmail.com&ctz=Europe%2FPrague" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  ```
* Aplikován tmavý mód (dark mode CSS filtr) v souladu s vizuálním stylem webu.

#### Blok 2: Jak na rezervaci?
* Podívej se do našeho kalendáře obsazenosti výše.
* Pokud je tvůj termín volný, napiš nám na **`vlastinaparadox@gmail.com`**.
* Napiš nám pár slov o sobě, záměru akce, požadovaném čase a technických nárocích. Rádi se domluvíme na detailech.

#### Blok 3: Orientační ceník
* **Pronájem celého prostoru:** **800 Kč** za první hodinu, poté **600 Kč** za každou další hodinu.
* *Pro neziskové a komunitní projekty nabízíme individuální podmínky. Nabízíme individuální podmínky v případě dlouhodobého pronájmu.*

#### Blok 4: Domácí řád Vlastiny (Pravidla našeho obýváku)
*(beze změn)*

---

### 3.7 Sekce: Praktické informace

* **Nadpis sekce (H2):** Kudy k nám a praktické tipy
* **Podnadpis:** Všechno, co se hodí vědět před první návštěvou

#### Blok 1: Kde nás přesně najdeš?
* **Adresa:** Vlastina 889/23, 161 00 Praha 6 – Ruzyně.
* **Záchytný orientační bod:** Nacházíme se **přímo v 1. patře nad lezeckým centrem JamJam**. Stačí projít hlavním vchodem a vyběhnout schody nahoru.
* **Mapa:** Google Maps embedding místa Vlastina Paradox + přímý odkaz: [Otevřít v Google Maps](https://maps.app.goo.gl/Th8uEFKo9Sxrz6WF9).

#### Blok 2: Parkování & Noční režim areálu
* **Parkování:** Přímo v areálu před budovou je **bezplatné parkování** pro auta i dodávky.
* **Pozor na půlnoční bránu:** Přesně o půlnoci (00:00) se celý areál zamyká na číselný kód.

#### Blok 3: Venkovní prostor před Vlastinou
* Otevřený dvůr před budovou pro posezení a čerstvý vzduch.

#### Blok 4: Vybavení a zázemí (Checklist)
* [x] **Taneční sál:** Odpružená podlaha s baletizolem, velkoformátová zrcadla – rozměry 10 × 14 m (140 m²). Celková plocha lounge + taneční sál je 250 m².
* [x] **Aerial zóna:** 8 pevných kotevních bodů pro závěsnou akrobacii (šály, kruhy, lana).
* [x] **Rekvizity pro točení a akrobacii k zapůjčení.**
* [x] **Zvuk:** Možno půjčit menší bluetooth reproduktor.
* [x] **Pro děti i hravé duše:** Dřevěný koutek stylizovaný jako pohádkový hrad s hračkami k dispozici.
* [x] **Plně vybavená kuchyňka:** Lednice, myčka, trouba, mikrovlnka, rychlovarná konvice, čaje a káva.
* [x] **Lounge zóna:** Pohodlné pohovky a křesla na odpočinek, relaxaci a hluboké debaty, stoly se židlemi, kde třeba můžete i pracovat na svých kostýmech.
* [x] **Sociální zařízení:** Čisté toalety přímo v prostoru Vlastiny.
* [x] **Možnost skladování věcí:** Pouze pro přidružené projekty s dlouhodobým pronájmem.
* [x] **Plánek prostoru:** Schéma dispozice sálu a zázemí (pouze view-only – kliknutím zvětšíte; funkce stažení plánku nemá být dostupná). V sekci má být vždy zobrazen aktuální plánek ze složky `/resources/planek`.

---

### 3.8 Sekce: Galerie

* **Nadpis sekce (H2):** Pohledy do Vlastiny
* **Podnadpis:** Fotografie sálu, zázemí, workshopů a naší společné cesty
* **Popisky k fotkám:**
  1. *Taneční sál s baletizolem* – Světlo, prostor a vzduch pro tvůj pohyb.
  2. *Dětský hrad* – Útočiště pro nejmenší návštěvníky i hravou fantazii.
  3. *Lounge & čajovna* – Zóna pro ztišení, posezení a rozhovory.
  4. *Fireshow & divadlo* – Kořeny spolku Blackout Paradox v akci.
  5. *Staff workshop* – Rozehřívací meditace.
  6. *Před dokončením* – Dny a noci dobrovolníků na stavbě.

---

### 3.9 Sekce: Kontakty & Spolek

* **Nadpis sekce (H2):** Spojme se
* **Podnadpis:** Zastav se na trénink, napiš nám nebo se přidej k našim projektům
* **Kontaktní údaje:**
  * **E-mail pro dotazy, akce a rezervace:** `vlastinaparadox@gmail.com` (na prvním místě)
  * **Místo:** Vlastina (nad halou JamJam),  
    Vlastina 889/23, 161 00 Praha 6
  * **Mapa:** Google Maps embedding + odkaz: [Otevřít v Google Maps](https://maps.app.goo.gl/Th8uEFKo9Sxrz6WF9)
* **Sociální sítě:**
  * **Facebook:** [Vlastina Paradox](https://www.facebook.com/profile.php?id=61586614513074)
  * **Instagram:** [@vlastina_paradox](https://www.instagram.com/vlastina_paradox)
* **Provozovatel:**
  * **spolek Vlastina Paradox**
  * IČO: 29962056
  * ve spolupráci s: **Blackout Paradox** ([blackoutparadox.com](https://blackoutparadox.com/))
* **Patička webu:**
  * *© 2026 Vlastina space. Vytvořeno s láskou pro komunitu spolkem Vlastina Paradox a přáteli.*

---