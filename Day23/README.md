**Tag 23 – Interaktive Weltkarte 🌍🗺️**

Datum: 30. Juli 2025  
Dauer: 2 Stunden  
Thema: Eine dynamische Weltkarte mit Marker-Funktionalität – nutzbar auf Desktop & Smartphone.

---

**Was habe ich gelernt?**

- Wie man Leaflet.js in HTML-Projekte einbindet
- Wie man Karten mit OpenStreetMap anzeigt
- Wie man Marker mit Klick erstellt
- Dynamische Anzeige von Koordinaten
- Nutzung von JavaScript-Events (Klick, Marker speichern)
- Wie man Marker programmatisch wieder entfernen kann
- Responsive Gestaltung der Karte (auch mobil bedienbar)

---

**Verwendete Techniken**

| Code                                      | Bedeutung                                                           |
|-------------------------------------------|----------------------------------------------------------------------|
| `L.map("map")`                            | Erstellt eine neue Leaflet-Karte im Container mit der ID `map`      |
| `L.tileLayer(...)`                        | Lädt die Kachelgrafiken von OpenStreetMap                           |
| `L.marker([lat, lng])`                    | Setzt einen Marker an bestimmten Koordinaten                        |
| `map.on("click", function(e) {...})`      | Fügt ein Event bei Klick auf die Karte aus                          |
| `markerListe.push(marker)`                | Speichert Marker zur späteren Verwaltung                            |
| `map.removeLayer(marker)`                 | Entfernt einen Marker von der Karte                                 |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 https://sugu4.github.io/100-days-of-code/Day23/

---

**Projektdateien**

- `index.html` – HTML-Struktur inkl. Leaflet.js-CDN-Einbindung  
- `style.css` – Layout & Responsive Styling  
- `script.js` – Marker-Logik, Klickerkennung, Löschen  
- `README.md` – Dokumentation & Lernfortschritt

---

**Besonderheiten & Funktionen**

✅ Weltkarte mit Zoom & Pan  
✅ Marker setzen durch Klick  
✅ Popup mit Koordinaten 
✅ Automatisches Zurücksetzen bei Neuladen  
✅ Voll funktionsfähig im Desktop- & Smartphone-Browser

---

**Ideen für Erweiterung (optional)**

- Marker dauerhaft im `localStorage` speichern  
- Suche nach Orten per Eingabefeld  
- Eigene Icons für Marker  
- Kartenstile wechseln (z. B. Satellit, Nachtmodus)  
- Beschriftung und Farbe wählbar machen

---

**Fazit:**  
Ein einfacher Einstieg in interaktive Karten – ideal für Geografie-Lernprojekte, persönliche Reiseplanung oder als Basis für Location-basierte Apps.
