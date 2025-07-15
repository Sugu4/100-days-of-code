**Tag 13 – JavaScript Quiz mit Bewertungssystem 🧠**

Datum: 15. Juli 2025  
Dauer: ca. 2 Stunden  
Thema: JavaScript-Quiz mit Auswertung, Note und Neustart-Möglichkeit

---

**Was habe ich gelernt?**

- Wie man ein dynamisches Quiz mit mehreren Fragen aufbaut
- Wie man Benutzerantworten prüft und Feedback ausgibt
- Wie man ein Punktesystem mit Bewertung implementiert
- Wie man DOM-Elemente gezielt verändert
- Wie man am Ende das Quiz zurücksetzt (🔁)
- Mobile-First-Styling mit CSS für bessere Nutzerfreundlichkeit

---

**Verwendete Techniken**

| Code                                       | Bedeutung                                                   |
|--------------------------------------------|--------------------------------------------------------------|
| `const fragen = [...]`                     | Fragen + Antworten werden als Array gespeichert              |
| `onclick="antwortAuswerten(index)"`        | Klick auf Antwort ruft Funktion auf                         |
| `innerText`, `innerHTML`, `style.display`  | DOM-Manipulation für Fragen, Feedback, Fortschritt           |
| `setTimeout(..., 1000)`                    | Verzögerung für nächste Frage                               |
| `punkte++`                                 | Richtige Antworten zählen Punkte                            |
| Bewertungslogik `if (prozent >= ...)`      | Umrechnung der Punktzahl in Note + Bewertung                 |
| `function neustarten()`                    | Quiz wird neu gestartet und alle Variablen zurückgesetzt     |

---

**Quiz-Funktionen**

| Funktion             | Beschreibung                                  |
|----------------------|-----------------------------------------------|
| ✅ Richtig/Falsch     | Direktes Feedback nach jeder Antwort          |
| 📊 Bewertung         | Endnote von 1 bis 6 mit Text („Gut“, „Sehr gut“) |
| 🔁 Neustart-Button   | Ein Emoji (🔁) startet das Quiz neu            |
| 📱 Mobilfreundlich   | Passt sich an Smartphone und Desktop an       |

---

**Vorschau**

Live-Demo auf GitHub Pages
👉 https://sugu4.github.io/100-days-of-code/Day13/

---

**Projektdateien**

- `index.html` – HTML-Struktur mit Fragecontainer und Antwortbuttons  
- `style.css` – Design, responsive, Hover-Effekte und Layout  
- `script.js` – Komplette Logik: Fragen, Bewertung, Neustart  
- `README.md` – Lernfortschritt und Dokumentation

---

**Beispielausgabe am Ende:**

```text
✅ Du hast 2 von 3 richtig.
📊 Note: 3 – Befriedigend
