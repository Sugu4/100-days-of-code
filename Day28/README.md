**Tag 28 – Kontaktformular mit Live‑Validierung**

Datum: 01. Sep 2025
Dauer: 3 Stunden
Thema: Formularvalidierung (HTML5 + JavaScript), barrierearme Fehlermeldungen, Entwurfs‑Speicherung (localStorage)

---

**Was habe ich gelernt?**

* HTML5‑Validierung gezielt steuern (`required`, `minlength`, `maxlength`, `pattern`, `novalidate`)
* JavaScripts **Constraint Validation API** für benutzerfreundliche Fehlermeldungen (`checkValidity()`, `setCustomValidity()`, `reportValidity()`)
* Live‑Validierung auf `input`/`blur` mit **debounce**, visuelle Fehlerzustände & ARIA‑Ansagen (`aria-live`)
* Sicheres E‑Mail‑/Telefon‑Checking mit Regex (pragmatisch, nicht überstrikt)
* **localStorage‑Drafts**: Formulareingaben automatisch sichern & wiederherstellen
* Double‑Submit‑Schutz, Lade‑Status/Spinner, Tastatur‑ & Screenreader‑freundliche Gestaltung

---

**Verwendete Techniken**

| Code / API                                | Bedeutung                                                |                                |
| ----------------------------------------- | -------------------------------------------------------- | ------------------------------ |
| `form.noValidate = true`                  | Eigene Validierungslogik statt Browser‑Popups            |                                |
| `el.checkValidity()`                      | Prüft HTML5‑Constraints eines Felds                      |                                |
| `el.setCustomValidity(msg)`               | Eigene Fehlermeldung setzen (oder `''` zum Zurücksetzen) |                                |
| `form.reportValidity()`                   | Fehler gesammelt anzeigen                                |                                |
| `new FormData(form)`                      | Formulardaten erfassen                                   |                                |
| `Object.fromEntries(formData.entries())`  | FormData → Plain Object                                  |                                |
| `localStorage.setItem/getItem/removeItem` | Entwurf lokal speichern / laden / löschen                |                                |
| \`addEventListener('input'                | 'blur')\`                                                | Live‑Validierung & Interaktion |

---

**Vorschau**

Live‑Demo auf GitHub Pages:
👉 [📨 Kontaktformular testen](https://sugu4.github.io/100-days-of-code/Day28/)

---

**Projektdateien**

* `index.html` – Formular, semantische Struktur, ARIA‑Attribute
* `style.css` – responsives, zugängliches Form‑Design mit Fehlerzuständen
* `script.js` – Live‑Validierung, Draft‑Speicher, Submit‑Simulation, UI‑Status
* `README.md` – Dokumentation & Lerneffekte

---

**Wie funktioniert’s?**

1. Felder ausfüllen – ungültige Eingaben werden **sofort** markiert & erläutert.
2. Der **Senden‑Button** wird erst aktiv, wenn alle Felder gültig sind.
3. Beim Absenden wird ein kurzer **Ladevorgang** simuliert; anschließend erscheint eine Erfolgsnachricht.
4. Deine Eingaben werden als **Entwurf** lokal gespeichert, falls du die Seite neu lädst.
5. Über **„Entwurf löschen“** kannst du gespeicherte Eingaben entfernen.

---

**Fazit:**
Das Projekt zeigt, wie man **saubere, fehlertolerante Formulare** baut: klare Fehlermeldungen, gute UX und Barrierefreiheit.
Für **Tag 30** wird die Submit‑Simulation durch ein echtes **Python‑Backend (z. B. Flask)** ersetzt; die Daten werden dann serverseitig validiert und sicher verarbeitet.
