**Tag 19 – 3D Flip Card mit Glanzeffekt ✨**

Datum: 24. Juli 2025  
Dauer: 2 Stunden  
Thema: Interaktive 3D-Karte mit Vorder- und Rückseite, Text-/Emoji-Wechsel und CSS-Animation

---

**Was habe ich gelernt?**

- Wie man mit `transform`, `rotateY()` und `perspective` echte 3D-Karteffekte erzeugt
- Verwendung von `backface-visibility`, um Vorder- und Rückseite sauber darzustellen
- Einsatz von `setTimeout()` zur zeitversetzten Aktualisierung (nach Animation)
- Wie man mit JavaScript Inhalte (Emoji & Text) dynamisch aktualisiert
- Animation mit `@keyframes` und Schimmer-Effekt (CSS `shine`)
- Zustand speichern mit einer Variable (`rueckseiteAktiv`)
- Responsive Design für mittige Anzeige am Bildschirm

---

**Verwendete Techniken**

| Code                            | Bedeutung                                                  |
|----------------------------------|-------------------------------------------------------------|
| `transform: rotateY(180deg)`     | Dreht Element horizontal in 3D                             |
| `perspective: 1000px`            | Gibt Tiefenwirkung – wie bei echten Objekten               |
| `backface-visibility: hidden`    | Verhindert sichtbare Rückseite beim falschen Winkel        |
| `classList.toggle("gedreht")`    | Fügt oder entfernt CSS-Klasse (für Rotation)               |
| `setTimeout(() => {...}, 800)`   | Führt Aktion mit Verzögerung aus (nach 800 ms)             |
| `Math.floor(Math.random() * x)`  | Wählt zufälliges Element aus Array                         |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 https://sugu4.github.io/100-days-of-code/Day19/

---

**Projektdateien**

- `index.html` – 3D-Kartenstruktur mit Vorder-/Rückseite  
- `style.css` – Animation, Glanz, Styling und Tiefeneffekt  
- `script.js` – Dynamische Texte, Flip-Logik, Zufallsauswahl  
- `README.md` – Dokumentation und Lerneffekte

---

**So funktioniert die Flip-Karte**

- 🖱️ Klick auf Karte → sie dreht sich zur Rückseite  
- 🧠 Text bleibt gleich, bis man zurück zur Vorderseite flippt  
- 🌟 Emoji & Spruch wechseln **nur dann** – nicht bei jedem Klick

---
