**Tag 27 – Wetter-App mit OpenWeatherMap 🌦️**

Datum: 29. Juli 2025
Dauer: 2,5 Stunden
Thema: Wetterdaten per API ins Frontend laden und anzeigen

---

**Was habe ich gelernt?**

* Wie man mit der **Fetch API** Daten von einem externen Service abruft
* Nutzung der **OpenWeatherMap API** (Current Weather Data)
* Dynamisches Aktualisieren des DOM mit JavaScript (Temperatur, Stadtname, Icon, Beschreibung)
* Umgang mit **Fehlern** (falscher API-Key, Stadt nicht gefunden)
* Speicherung der letzten Suche im **localStorage**
* Gestaltung einer responsiven Wetterkarte mit HTML & CSS

---

**Verwendete Techniken**

| Code                               | Bedeutung                                                         |
| ---------------------------------- | ----------------------------------------------------------------- |
| `fetch(url)`                       | Ruft Daten von einer API ab                                       |
| `await response.json()`            | Antwort als JSON-Objekt umwandeln                                 |
| `element.textContent = ...`        | Dynamisches Aktualisieren von Inhalten im DOM                     |
| `localStorage.setItem(key, value)` | Speichert die letzte eingegebene Stadt                            |
| `localStorage.getItem(key)`        | Liest die gespeicherte Stadt aus                                  |
| `try { ... } catch(error) { ... }` | Fehler abfangen und benutzerfreundlich anzeigen                   |
| `encodeURIComponent(city)`         | Stellt sicher, dass Sonderzeichen in der URL richtig codiert sind |

---

**Vorschau**

Live-Demo auf GitHub Pages:
👉 [🌍 Wetter-App jetzt testen](https://sugu4.github.io/100-days-of-code/Day27/)

---

**Projektdateien**

* `index.html` – Suchfeld, Ausgabe-Bereich & Grundstruktur
* `style.css` – Responsives Card-Design für Desktop & Mobile
* `script.js` – API-Abfrage, DOM-Manipulation, Fehlerbehandlung, localStorage
* `README.md` – Dokumentation und Lerneffekt

---

**Wie funktioniert’s?**

1. Stadtname im Eingabefeld eingeben (z. B. *Berlin*)
2. Auf **Suchen** klicken → Daten werden per Fetch API geladen
3. Temperatur, Beschreibung, Icon, Luftfeuchte und Windgeschwindigkeit erscheinen
4. Die letzte eingegebene Stadt wird automatisch gespeichert und beim nächsten Laden angezeigt

---

**Fazit:**
Die Wetter-App verbindet **API-Integration** mit einem nutzerfreundlichen Frontend.
Sie ist ein idealer Einstieg in das **Arbeiten mit externen Datenquellen** und zeigt, wie man Daten aus JSON im Browser darstellt.
Später (ab **Tag 30**) kann die API auch serverseitig mit **Python** angebunden und sicherer genutzt werden.
