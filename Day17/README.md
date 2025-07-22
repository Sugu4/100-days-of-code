**Tag 17 – Live-Zeichenzähler ✏️🧮**

Datum: 22. Juli 2025  
Dauer: 1,5 Stunden  
Thema: Dynamisches Zählen von Zeichen mit visueller Warnung bei Limitüberschreitung.

---

**Was habe ich gelernt?**

- Wie man das `input`-Event in JavaScript nutzt, um Eingaben live auszuwerten
- Wie man mit `textfeld.value.length` die Zeichenanzahl ermittelt
- Wie man HTML-Elemente mit Klassen (`className`) dynamisch stylen kann
- Wie man CSS-Klassen für Warnstufen verwendet (grün, orange, rot)
- Wie man visuelles Feedback für Benutzer einfach umsetzt
- Wie man `!important` bei CSS-Spezifitätskonflikten gezielt einsetzt
- Wie man Projekte mobilfreundlich und minimalistisch hält

---

**Verwendete Techniken**

| Code                           | Bedeutung                                             |
|--------------------------------|--------------------------------------------------------|
| `addEventListener("input")`   | Reagiert auf jede Änderung im Textfeld                |
| `textfeld.value.length`       | Zählt die aktuelle Zeichenanzahl                      |
| `className = "gefahr"`        | Weist dem Element eine neue CSS-Klasse zu            |
| `transition: color`           | Macht Farbwechsel weicher beim Umschalten             |
| `!important`                  | Erzwingt Stiländerung bei Konflikten mit IDs          |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 https://sugu4.github.io/100-days-of-code/Day17/

---

**Projektdateien**

- `index.html` – Textfeld mit Zeichenanzeige
- `style.css` – Anzeige der Farben bei Grenzwerten
- `script.js` – Dynamische Berechnung & Styling
- `README.md` – Dokumentation zum Lerneffekt

---

**Funktionsweise (Beispiel):**

- ✍️ Text schreiben → Anzeige steigt live mit
- 🟢 Bis 100 Zeichen = grün  
- 🟠 Ab 101 Zeichen = orange  
- 🔴 Ab 141 Zeichen = rot  
- 🚫 Bei 160 ist Schluss (per `maxlength`)

---
