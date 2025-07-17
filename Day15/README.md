**Tag 15 – Begrüßungsanzeige mit JavaScript 👋**

Datum: 15. Juli 2025  
Dauer: 2 Stunden  
Thema: Dynamische Begrüßung auf Basis der aktuellen Tageszeit – vollständig responsive umgesetzt.

---

**Was habe ich gelernt?**

- Wie man mit JavaScript Datum & Uhrzeit verarbeitet (`new Date()`, `.getHours()`)
- Bedingungen mit `if`, `else if` sinnvoll einsetzen
- DOM-Manipulation: Wie man mit `innerText` gezielt Inhalte ersetzt
- Wie man Webseiten begrüßend & benutzerfreundlich gestaltet
- Mobile-Friendly Design umsetzen (zentriert, lesbar auf allen Geräten)

---

**Verwendete Techniken**

| Code                            | Bedeutung                                            |
|----------------------------------|-----------------------------------------------------|
| `new Date()`                     | Erstellt ein neues Datums-/Uhrzeitobjekt            |
| `.getHours()`                    | Liefert aktuelle Stunde (0–23)                      |
| `if (stunde < 12) { ... }`       | Logik für unterschiedliche Begrüßungen              |
| `document.getElementById(...)`   | Zugriff auf HTML-Elemente über ID                  |
| `element.innerText = ...`        | Ersetzt den sichtbaren Text                        |
| `flex`, `text-align`, `media query` | Design-Elemente für mobile & mittige Darstellung |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 https://sugu4.github.io/100-days-of-code/Day15/

---

**Projektdateien**

- `index.html` – Enthält Grundstruktur mit Platzhalter für Begrüßung
- `style.css` – Zentrierte Darstellung, responsive optimiert
- `script.js` – JavaScript zur Erkennung der Tageszeit & Anzeige
- `README.md` – Dokumentation & Lernerfolge

---

**Beispielhafte Begrüßungen**

- Guten Morgen (zwischen 5–11 Uhr)  
- Guten Tag (zwischen 12–17 Uhr)  
- Guten Abend (ab 18 Uhr)  
