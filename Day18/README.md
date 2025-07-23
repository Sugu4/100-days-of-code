**Tag 18 – Passwort-Generator 🔐**

Datum: 23. Juli 2025  
Dauer: 2 Stunden  
Thema: Erstellung eines sicheren, anpassbaren Passwortgenerators mit JavaScript

---

**Was habe ich gelernt?**

- Wie man zufällige Zeichen mit `Math.random()` auswählt
- Wie man Checkboxen abfragt (`.checked`) und daraus Optionen ableitet
- Wie man Benutzeroptionen (Zahlen, Großbuchstaben, Sonderzeichen) logisch kombiniert
- Wie man dynamisch Zeichenfolgen aufbaut und ausgibt
- Wie man ein generiertes Passwort per Klick in die Zwischenablage kopiert (`navigator.clipboard.writeText`)
- Wie man Eingabefelder vom Typ `number` und `text` einsetzt
- Wie man das Design mobilfreundlich, minimalistisch und übersichtlich gestaltet

---

**Verwendete Techniken**

| Code                             | Bedeutung                                                   |
|----------------------------------|--------------------------------------------------------------|
| `Math.random()`                  | Erzeugt eine Zufallszahl zwischen 0 und 1                   |
| `Math.floor(...)`                | Rundet auf eine ganze Zahl ab                               |
| `element.checked`                | Prüft, ob eine Checkbox aktiviert ist                       |
| `element.value`                  | Holt den Inhalt eines Inputfelds                            |
| `navigator.clipboard.writeText()`| Kopiert Text in die Zwischenablage                          |
| `input type="number"`            | Ermöglicht Eingabe einer Zahl für Passwortlänge             |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 https://sugu4.github.io/100-days-of-code/Day18/

---

**Projektdateien**

- `index.html` – Eingabemaske für Passwortoptionen  
- `style.css` – Dunkles, modernes Design mit flexibler Breite  
- `script.js` – Passwortgenerierung + Kopierfunktion  
- `README.md` – Projektbeschreibung und Lernerfolge

---

**Funktionsweise (Beispiel):**

- ✏️ Du wählst die gewünschte Passwortlänge (z. B. 12 Zeichen)
- ✅ Optional: Zahlen, Großbuchstaben, Sonderzeichen
- 🔄 Klick auf „Neues Passwort“ → Feld wird mit Zufallstext gefüllt
- 📋 Klick auf „Kopieren“ → Passwort wird direkt übernommen

---
