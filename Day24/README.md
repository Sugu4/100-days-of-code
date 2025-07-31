**Tag 24 – Binär- und Dezimal-Umrechner 🧮**

Datum: 31. Juli 2025  
Dauer: 1,5 Stunden  
Thema: Live-Umrechner zwischen Binär- und Dezimalzahlen mit Validierung

---

**Was habe ich gelernt?**

- Wie man mit JavaScript Text-Eingaben verarbeitet
- Umwandlung von Binär nach Dezimal mit `parseInt(..., 2)`
- Umwandlung von Dezimal nach Binär mit `.toString(2)`
- Einsatz von regulären Ausdrücken zur Eingabeprüfung
- Live-Feedback bei Benutzereingabe mit EventListener
- Anzeige dynamischer Ergebnisse im DOM (`innerText`)
- Responsive & benutzerfreundliches UI gestalten

---

**Verwendete Techniken**

| Code                           | Bedeutung                                               |
|--------------------------------|----------------------------------------------------------|
| `parseInt(bin, 2)`            | Wandelt eine Binärzahl in eine Dezimalzahl um            |
| `dez.toString(2)`             | Wandelt eine Dezimalzahl in eine Binärzahl um            |
| `/^[01]+$/`                   | RegEx zur Prüfung: Nur 0 und 1 erlaubt                   |
| `addEventListener("input")`   | Reagiert auf Änderungen im Eingabefeld                   |
| `innerText = ...`             | Gibt das Ergebnis in der HTML-Oberfläche aus             |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 https://sugu4.github.io/100-days-of-code/Day24/

---

**Projektdateien**

- `index.html` – Eingabefelder für Binär- und Dezimalzahlen  
- `style.css` – Stilvolles responsives Design  
- `script.js` – Echtzeit-Umwandlung & Validierung  
- `README.md` – Lerndokumentation

---

**Mögliche Erweiterungen**

- Visuelles Feedback bei falscher Eingabe (z. B. roter Rahmen)  
- Button zum Zurücksetzen beider Felder  
- Kopier-Button für die Ergebnisse  
- Tastaturunterstützung & Barrierefreiheit

---

**Fazit**  
Ein simples, aber nützliches Tool für den Informatik-Alltag! Ideal zum Lernen von Zahlensystemen, DOM-Interaktion und Eingabeprüfung mit JavaScript.
