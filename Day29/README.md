**Tag 29 – HealthyLife App 🌱**

Datum: 2. September 2025    
Dauer: 3 Stunden  
Thema: Gesundheits-App mit interaktiven Features, Fortschrittsbalken, Tipps & Meditation

---

**Was habe ich gelernt?**

- Moderne Webgestaltung mit CSS Grid & Flexbox  
- Barrierefreie Navigation: Skip-Link, Tastaturbedienung, Fokusrahmen, ARIA-Attribute  
- Interaktive Feature-Karten, die als Buttons funktionieren  
- Dynamisches Anzeigen von Sektionen: Tipps, Meditation, Fortschritt  
- Fortschrittsbalken mit visueller Darstellung und ARIA-Unterstützung  
- Audioeinbindung für eigene Musik  
- Responsive Design für Desktop und Mobilgeräte

---

**Verwendete Techniken**

| Code / Technik                          | Bedeutung / Einsatz                                     |
|----------------------------------------|--------------------------------------------------------|
| `CSS Grid` / `Flexbox`                  | Layout der Features & Navigation                       |
| `@media (max-width:768px)`             | Responsive Design                                      |
| `tabindex="0"` / `role="button"`       | Feature-Karten tastaturbedienbar                      |
| `aria-pressed` / `aria-label`          | Barrierefreiheit für Screenreader                      |
| `<audio>`                               | Beruhigende Musik oder Omm-Klänge                     |
| `scrollIntoView({behavior:"smooth"})`  | Sanftes Scrollen zu ausgewählten Feature-Sektionen    |
| JS `click` / `keydown`                  | Interaktive Feature-Karten                             |
| Dynamischer Fortschrittsbalken         | Zeigt täglichen Fortschritt an                         |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 [✅ HealthyLife App testen](https://sugu4.github.io/100-days-of-code/Day29/)

---

**Projektdateien**

- `index.html` – Struktur & Features  
- `style.css` – Modernes, responsives Design & Barrierefreiheit  
- `script.js` – Interaktive Feature-Karten, Fortschritt, Musik  
- `audio/` – Eigene Musikdateien (optional)  
- `README.md` – Dokumentation und Lerneffekt  

---

**Wie funktioniert’s?**

1. **Feature-Karten anklicken** (📊, 🥗, 🧘) → zeigt die zugehörige Sektion an  
2. **Tastaturbedienung**: Tab → Enter / Space zum Aktivieren  
3. **Tipps & Meditationen**: Anzeigen von Tipps und Abspielen von Musik  
4. **Fortschrittsbalken**: Werte eingeben → Balken aktualisiert sich visuell und für Screenreader  
5. **Kontaktformular**: Optional, lokal testbar, barrierefrei  

---

**Fazit:**  
Die HealthyLife App ist ein **modernes, barrierefreies Mini-Projekt**, das zeigt, wie man:

- Interaktive Features klickbar gestaltet  
- Fortschritt visualisiert  
- Tipps und Meditation integriert  
- Eigene Musik lokal einbindet  
- Barrierefreiheit umsetzt  

Sie eignet sich als **Übungsprojekt**, Demo oder Prototyp für echte Apps.

---

**Erweiterte Features & Ideen**

- Tipps & Meditationen 🧘‍♂️
* Kurze Texte mit Entspannungsübungen oder Motivationssätzen  
- Fortschrittsanzeige 📊
* Nutzer können kleine Schritte markieren („Heute 5 Minuten Meditation gemacht“)  
* Fortschritt wird z. B. per Balken oder Prozentzahl angezeigt  
- Barrierefreiheit für Sehbehinderte ♿
* Alle Buttons & Formulare haben ARIA-Labels und korrekte HTML-Struktur  
* Texte können von Screenreadern vorgelesen werden  
* Audio-Features helfen zusätzlich
