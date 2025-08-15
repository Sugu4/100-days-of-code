**Tag 25 – JSON Validator & Formatter 🧰**  

Datum: 15.08.2025 
Dauer: 2,5 Stunden 
Thema: JSON prüfen, hübsch formatieren, minifizieren – alles lokal im Browser.

---

**Was habe ich gelernt?**

- Wie man mit `JSON.parse()` validiert und Fehler abfängt (`try/catch`)
- Schönes Formatieren mit `JSON.stringify(obj, null, 2)`
- Minifizieren (kompakt ohne Leerzeichen) mit `JSON.stringify(obj)`
- Fehlerauswertung inkl. Zeile/Spalte aus der Fehlermeldung
- Dateien laden/speichern im Browser (File API, Blob, Download)
- Copy-to-Clipboard mit `navigator.clipboard.writeText`
- Responsives, zentriertes Layout + Dark/Light-Mode

---

**Verwendete Techniken**

| Code / API                               | Bedeutung                                              |
|------------------------------------------|--------------------------------------------------------|
| `JSON.parse(text)`                        | Wandelt Text in JS-Objekt um (wirft Fehler bei Ungültigkeit) |
| `JSON.stringify(obj, null, 2)`            | Formatiert mit Einrückung (2 Leerzeichen)             |
| `try { … } catch (err) { … }`             | Fehlerbehandlung beim Parsen                           |
| `navigator.clipboard.writeText(text)`     | Kopiert Text in die Zwischenablage                     |
| `new Blob([...], { type:'application/json' })` | Datei zum Download erzeugen                      |
| `URL.createObjectURL(blob)`               | Temporäre URL für den Download                         |
| `File.text()`                             | Inhalt einer ausgewählten Datei lesen                  |
| `classList.toggle('light')`               | Dark/Light-Mode umschalten                             |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 https://sugu4.github.io/100-days-of-code/Day25/

---

**Projektdateien**

- `index.html` – Oberfläche (zwei Textfelder, Buttons, Statusleiste)  
- `style.css` – Zentriertes, responsives UI mit Dark/Light-Mode  
- `script.js` – Validieren, Formatieren, Minifizieren, Copy & Download  
- `README.md` – Lernnotizen und Doku

---

**Tipps zur Nutzung**

1. JSON in die **Eingabe** einfügen.  
2. Mit **Validieren** prüfen (Fehler inkl. Zeile/Spalte).  
3. **Formatieren** oder **Minifizieren** erzeugt die Ausgabe.  
4. **Kopieren** oder **Download** für Weitergabe.  
5. Optional: **Datei laden** oder **Beispiel** einfügen.

---

**Ideen für Erweiterungen (optional)**

- Farbiges Syntax-Highlighting (z. B. Prism.js)  
- JSON-Schema-Validierung (erweiterte Regeln)  
- Live-Modus: beim Tippen automatisch validieren  
- Diff-Ansicht: zwei JSONs vergleichen  

---

**📌 Was ist JSON?**

JSON steht für **JavaScript Object Notation** und ist ein leichtgewichtiges, textbasiertes Format zum Speichern und Austauschen von Daten.  
Es wird in fast allen Programmiersprachen unterstützt und ist besonders beliebt für Web-APIs.  
Mit JSON lassen sich Daten leicht speichern, laden und im Browser darstellen – eine Grundlage für viele Webanwendungen,  
z. B. Produktlisten, Profile, Newsfeeds oder API-Abfragen.
