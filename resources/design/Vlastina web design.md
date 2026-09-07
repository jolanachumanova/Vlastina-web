# Vlastina – Web Design, UX & Content Specification

Tento dokument slouží jako komplexní podklad pro GitHub Copilota a vývojáře k úpravě a nasazení webových stránek pro neziskový komunitní a tréninkový prostor **Vlastina**.

---

## 1. Cíle projektu a Positioning

* **Co je Vlastina:** Autentický komunitní a tréninkový sál s duší, který v bývalém vojenském areálu na Praze 6 vlastníma rukama vybudoval spolek **Blackout Paradox** za pomoci dobrovolníků a dárců na Doniu.
* **Hlavní metafora prostoru:** *„Velký obývák s klíči pro ty, kteří tvoří, hýbou se, mají rádi hudbu a hledají bezpečné zázemí.“*
* **Cílová skupina:** Tanečníci, akrobaté, flow artisti, novocirkusoví performeři, hudebníci, lektoři pohybových a seberozvojových workshopů, lidé z kreativní a spirituální komunity.
* **Tone of Voice (ladění textů):** 
  * Vřelý, autentický, lidský a komunitní.
  * Otevřený a zvoucí, bez korporátního klišé a sterilního PR.
  * Respektující – pravidla prostoru jsou formulována přátelsky, ale jednoznačně (péče o společný domov).
* **Technické řešení:**
  * Jednostránková responsivní webová prezentace (SPA) s přepínáním tabů/sekcí v čistém JavaScriptu.
  * Nízké náklady na údržbu, statický hosting, Google Kalendář pro přehled obsazenosti, poptávky e-mailem.

---

## 2. Architektura a přehled sekcí webu

1. **Úvod** – Vizuální seznámení, silný headline, klíčové atributy (baletizol, aerial body, zázemí) a rychlé CTA.
2. **O Vlastině (Příběh & Duše prostoru)** – Emoční příběh vzniku, Blackout Paradox, poděkování komunitě a Doniu.
3. **Pravidelné akce** – Zvýrazněný **Volný trénink (Open Training)** pro veřejnost a pravidelné kurzy.
4. **Následující akce & Archiv** – Víkendové workshopy, jamy, divadelní a sousedská setkání.
5. **Rezervace & Ceník** – Návod na rezervaci, orientační ceny (podpora neziskových projektů), vložený kalendář a Domácí řád.
6. **Praktické info & Mapa** – Kde přesně nás najdete (nad JamJam), parkování zdarma, noční režim areálu, vybavení a plánek.
7. **Galerie** – Fotografie sálu, zázemí, hradu pro děti a vzpomínky z rekonstrukce.
8. **Kontakty** – E-maily, telefon, sociální sítě, provozovatel Blackout Paradox.

---

## 3. Kompletní texty pro jednotlivé sekce

### 3.1 Hlavička a Navigace
* **Logo text:** VLASTINA
* **Položky menu:**
  1. O Vlastině (`#o-vlastine`)
  2. Pravidelné akce (`#pravidelne-akce`)
  3. Následující akce (`#nasledujici-akce`)
  4. Rezervace & Ceník (`#rezervace`)
  5. Praktické info (`#prakticke-info`)
  6. Galerie (`#galerie`)
  7. Kontakty (`#kontakty`)

---

### 3.2 Sekce: Úvod

* **Badge:** `Bezpečný přístav pro pohyb, tvorbu a setkávání`
* **Nadpis (H1):** Vlastina
* **Podnadpis (Subtitle):** Velký obývák a tréninkový sál v srdci bývalé základny
* **Popis:**
  > Hledáš prostor pro tanec, akrobacii, jam session nebo hluboký workshop? Vlastina je otevřené útočiště v Praze 6 pro všechny, kteří tvoří celým tělem i srdcem. Přijď si zatrénovat, sdílet inspiraci nebo si jen sednout k čaji v křesle.
* **Klíčové štítky (Features):**
  * `<i class="fa-solid fa-feather"></i> Baletizol & 5 závěsných bodů`
  * `<i class="fa-solid fa-mug-hot"></i> Kuchyňka & útulná lounge`
  * `<i class="fa-solid fa-square-parking"></i> Parkování v areálu zdarma`
  * `<i class="fa-solid fa-users"></i> Kapacita až 40 lidí`
* **Tlačítka (CTA):**
  * Primární: `Chci rezervovat prostor` (odkaz na `#rezervace`)
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
    Dnes je z Vlastiny živé útočiště. Srdcem je velkorysý sál s profesionálním baletizolem a pěti kotevními body pro závěsnou akrobacii (šály, kruhy, lana). Druhým pólem je zázemí s pohovkami, čajovou kuchyňkou a dětským hradem. Prostor pohodlně unese trénink až 20 cvičících v plném pohybu, nebo až 40 sedících a naslouchajících duší při komunitním kruhu, jamu či představení.
  * **H3:** Děkujeme, že tvoříte s námi
  * **Odstavec 4:**
    Vlastina stojí díky obrovské vlně solidarity. Díky laskavé podpoře stovek dárců na **Donio**, desítkám dobrovolníků, kteří tu nechali kus svého srdce, a komunitě, která prostor plní životem. Zázemí s láskou spravuje spolek **Blackout Paradox** – tvůrci fyzického divadla, fireshow a nového cirkusu.
  * **Závěrečné poselství:**
    *„Každý, kdo k nám vstoupí, vdechuje prostoru kousek své duše. Buď vítán(a) a ciť se tu jako doma.“*

---

### 3.4 Sekce: Pravidelné akce & Volné tréninky

* **Nadpis sekce (H2):** Pravidelný pohyb & tréninky
* **Podnadpis:** Pravidelné otevřené lekce, flow setkání a prostor pro tvůj vlastní růst

#### Hlavní zvýrazněná karta (Hero Card): Volný Trénink (Open Training)
* **Tag:** `Otevřený trénink pro všechny`
* **Nadpis:** Vlastina – Volný Trénink
* **Motto:** *Pusť se do vzduchu, do tance a do pohybu.*
* **Harmonogram & Vstupné:**
  * **Kdy:** 
    * **Čtvrtek:** 18:00 – 22:00
    * **Neděle:** 12:00 – 16:00
  * **Kde:** Vlastina, Praha 6 (1. patro přímo nad lezeckým centrem JamJam)
  * **Příspěvek:** **300 Kč / vstup** *(platba pouze v hotovosti na místě)*
* **Pro koho:**
  Tanečníci, flow artisti, novocirkusáci, akrobaté, jogíni a všichni, kdo milují svobodný pohyb. Díky **pěti kotevním bodům** je prostor přímo stvořený pro trénink na aerial kruzích, šálách, trapézách a dalších závěsných nářadích.
* **Co tě u nás čeká:**
  * Velký zrcadlový sál s tanečním baletizolem a kotevními body.
  * Klidná chillout zóna s pohodlnými křesly na regeneraci, protažení a pokec.
  * Komunitní kuchyňka s teplým čajem a kávou na zahřátí a povzbuzení.
* **Co s sebou:**
  * Čistou sálovou obuv s měkkou podrážkou (na baletizolu je vítáno trénovat i **naboso nebo v ponožkách**).
  * Hotovost na vstup a otevřenou mysl.

#### Doplňkové karty kurzů:
* **Karta 1: Nový cirkus & Pozemní akrobacie**
  * Čas: Každé úterý 18:00 – 20:00
  * Popis: Tréninky žonglování, partnerské akrobacie, práce s rekvizitou a zpevnění těla pod vedením lektorů z Blackout Paradox.
  * Cena: 200 Kč / lekce
  * Kontakt: `info@blackoutparadox.com`

---

### 3.5 Sekce: Následující akce (Workshopy, jamy, komunitní večery)

* **Nadpis sekce (H2):** Následující události
* **Podnadpis:** Víkendové workshopy, ceremonie, jamy a sousedská setkání
* **Ukázky karet akcí:**
  * **Akce 1: Hudební a taneční jam**
    * Datum: Sobota 17.10.2026 | 10:00 – 17:00
    * Popis: Celodenní prostor pro sdílení pohybového výzkumu na šálách a zemi zakončený volnou hudební improvizací.
    * Vstupné: Dobrovolné (do klobouku na rozvoj prostoru)
    * Registrace: `info@vlastina.cz`

* **Archiv akcí:**
  * Tlačítko: `Zobrazit proběhlé akce a workshopy`
  * Položky archivu: Den otevřených dveřá Vlastiny, Taneční a hudební jam s Joli narozeninami

---

### 3.6 Sekce: Rezervace prostoru & Domácí řád

* **Nadpis sekce (H2):** Pronájem & Rezervace
* **Podnadpis:** Zázemí pro tvůj workshop, zkoušku, tanec, jam nebo oslavu

#### Blok 1: Jak na rezervaci & Kalendář
* Podívej se do našeho kalendáře obsazenosti níže.
* Pokud je tvůj vysněný termín volný, napiš nám na **`rezervace@vlastina.cz`** (nebo volej na `náš telefon`).
* Napiš nám pár slov o sobě, záměru akce, požadovaném čase a technických nárocích. Rádi se domluvíme na detailech.

#### Blok 2: Orientační ceník
* **Pronájem celého prostoru:** 800 Kč za první hodinu, pak 600 za hodinu


#### Blok 3: Domácí řád Vlastiny (Pravidla našeho obýváku)
*Úcta k prostoru a lidem okolo je to, co dělá Vlastinu příjemným místem. Prosíme, vnímej tato pravidla jako společnou dohodu:*

1. **Baletizol je náš posvátný koberec:**
   * Na taneční podlahu vstupuj **výhradně v čisté sálové obuvi, v ponožkách nebo bosýma nohama**. Venkovní boty i podpatky nech v botníku.
   * **Přísný zákaz stěhování nábytku na baletizol!** Židle, stoly a těžké předměty patří pouze do relaxační a kobercové zóny.
   * Dávej velký pozor na **ostré předměty, cvočky, šperky či rekvizity**, které by mohly jemný povrch podlahy poškrábat nebo proříznout.
2. **Klid pro sousedy (Zavřená okna):**
   * Zatím jsme útočištěm i pro hlučnější akce a chceme aby to tak zůstalo nadále. **Při hlučnějších akcích, hlasité hudbě a po 22:00 je nutné mít pevně zavřená okna směrem k paneláku.**
3. **Pravidlo zanechané stopy (aneb ukliď po sobě):**
   * Vlastina nemá placenou uklízecí četu. Po skončení akce uveď sál, kuchyňku i toalety do původního voňavého stavu. Vynes odpadky a zanech prostor takový, jaký ho chceš příště najít.
4. **Respekt k živlu a bezpečí:**
   * Uvnitř prosím nekuřte. K nadechnutí na čerstvém vzduchu využij dvůr před budovou.
5. **Zlaté pravidlo kuchyňky:**
   * *„Pokud jsi to ušpinil(a), umyj to. Pokud jsi to rozlil(a), utři to. Pokud ti to upadlo, zvedni to. A pokud nevíš, čí to je, nejez to!“*
   * Vidíš plnou myčku čistého nádobí? Ukliď ji – zabere to 2 minuty a pomůže všem. Společný čaj a káva jsou pro každého, jídlo se jmenovkou v lednici je tabu.

---

### 3.7 Sekce: Praktické informace

* **Nadpis sekce (H2):** Kudy k nám a praktické tipy
* **Podnadpis:** Všechno, co se hodí vědět před první návštěvou

#### Blok 1: Kde nás přesně najdeš?
* **Adresa:** Bývalá vojenská základna, Vlastina 23, Praha 6 – Ruzyně.
* **Záchytný orientační bod:** Nacházíme se **přímo v 1. patře nad lezeckým centrem JamJam**. Stačí projít hlavním vchodem a vyběhnout schody nahoru.

#### Blok 2: Parkování & Noční režim areálu
* **Parkování:** Přímo v areálu před budovou je **bezplatné parkování** pro auta i dodávky.
* **Pozor na půlnoční bránu:** **Přesně o půlnoci (00:00) se celý areál zamyká na číselný kód!** Pokud plánuješ zůstat přes noc nebo odjíždět pozdě, zjisti si včas kód u organizátora akce.

#### Blok 3: Venkovní prostor před Vlastinou
* K dispozici máme i otevřený prostor přímo před vchodem – skvělé místo pro posezení na slunci, protažení venku, vyvětrání hlavy nebo letní sousedské grilování.

#### Blok 4: Vybavení a zázemí (Checklist)
* [x] **Taneční sál:** Odpružená podlaha s baletizolem, velkoformátová zrcadla.
* [x] **Aerial zóna:** 5 pevných kotevních bodů pro závěsnou akrobacii (šály, kruhy).
* [x] **Zvuk:** Kvalitní hudební aparatura (snadné připojení přes Bluetooth/Jack).
* [x] **Pro děti i hravé duše:** Dřevěný koutek stylizovaný jako pohádkový hrad.
* [x] **Plně vybavená kuchyňka:** Lednice, myčka, trouba, mikrovlnka, rychlovarná konvice, čaje a káva.
* [x] **Lounge zóna:** Pohovky a křesla na odpočinek, relaxaci a hluboké debaty.
* [x] **Sociální zařízení:** Čisté toalety a umývárny přímo na patře.
* [x] **Plánek prostoru:** Schéma dispozice sálu a zázemí (kliknutím zvětšíte).

---

### 3.8 Sekce: Galerie

* **Nadpis sekce (H2):** Pohledy do Vlastiny
* **Podnadpis:** Fotografie sálu, zázemí, workshopů a naší společné cesty
* **Popisky k fotkám:**
- popisky k fotkám jsou pro inspiraci, fotky jsou ve složce "resources", preferované jsou fotky s lidmi, kromě úvodní stránky, tam patří Homepage_main_image.jpg
  1. *Taneční sál s baletizolem* – Světlo, prostor a vzduch pro tvůj pohyb.
  2. *Dětský hrad* – Útočiště pro nejmenší návštěvníky i hravou fantazii.
  3. *Lounge & čajovna* – Zóna pro ztišení, posezení a rozhovory.
  4. *Fireshow & divadlo* – Kořeny spolku Blackout Paradox v akci.
  5. *Jak vznikal sál* – Broušení, pokládka a litry potu proměněné v domov.
  6. *Před dokončením* – Dny a noci dobrovolníků na stavbě.

---

### 3.9 Sekce: Kontakty & Spolek

* **Nadpis sekce (H2):** Spojme se
* **Podnadpis:** Zastav se na trénink, napiš nám nebo se přidej k našim projektům
* **Kontaktní údaje:**
  * **Místo:** Vlastina (nad halou JamJam), Vlastina 23, Praha 6
  * **E-mail pro dotazy:** `info@vlastina.cz`
  * **E-mail pro rezervace:** `rezervace@vlastina.cz`
  * **Telefon / WhatsApp:** `náš telefon`
* **Provozovatel:**
  * **Blackout Paradox z.s.**
  * IČO: 12345678
  * Umělecká skupina věnující se fyzickému divadlu, flow arts a akrobacii.
  * Web: [blackoutparadox.com](https://blackoutparadox.com/)
* **Patička webu:**
  * *© 2026 Vlastina space. Vytvořeno s láskou pro komunitu spolkem Blackout Paradox a přáteli.*

---