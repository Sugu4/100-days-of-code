# Birthday Hearts – Kleine Geburtstags‑Überraschung im Browser

Eine kleine, interaktive Geburtstagskarte mit animierten Herz‑Partikeln und 3D‑Karte – optimiert für Desktop und mobile Geräte.[conversation_history:9]

## Features

- Animierter Hintergrund mit aufsteigenden Herz‑Partikeln (Canvas + Custom‑Herzform via `bezierCurveTo`).[conversation_history:9]  
- 3D‑Karte in der Mitte des Bildschirms mit Glow‑Effekt und leichter Tiefenwirkung.[conversation_history:9]  
- Klick/Tap erzeugt zusätzliche Herzen an der jeweiligen Position, auf Mobile auch beim Wischen.[conversation_history:9]  
- Responsives Layout mit `clamp()`‑Schriftgrößen, funktioniert auf großen Monitoren und Smartphones.[conversation_history:9]

## Nutzung

1. Repository klonen oder ZIP herunterladen.[conversation_history:6]  
2. Die `index.html` einfach im Browser öffnen (Doppelklick reicht).[conversation_history:6]  
3. Fenster maximieren oder Smartphone im Vollbild verwenden, um den Effekt komplett zu sehen.[conversation_history:9]

👉https://sugu4.github.io/100-days-of-code/Day39/

## Steuerung

- **Desktop:**  
  - Maus bewegen, um den 3D‑Effekt der Karte zu sehen (leichtes Kippen im Raum).  
  - Mit der Maus in den Hintergrund klicken, um zusätzliche Herzen zu erzeugen.[conversation_history:9]

- **Mobile:**  
  - Auf den Bildschirm tippen, um Herzen erscheinen zu lassen.  
  - Über den Bildschirm wischen, um eine „Spur“ aus Herzen zu ziehen.[conversation_history:9]

## Technik

- HTML5 Canvas für die Herz‑Partikel und Animation (`requestAnimationFrame`).[conversation_history:9]  
- Reines CSS für 3D‑Effekt, Glow, Hintergrund und Responsive Typography.[conversation_history:9]  
- Vanilla JavaScript (kein Framework) für Partikelsystem, Events und 3D‑Interaktion.[conversation_history:9]

## Anpassung

Du kannst den Text in der Karte direkt in der `index.html` anpassen:

```html
<h1>Alles Gute zum Geburtstag!</h1>
<p>Für die Liebe meines Lebens</p>
<p class="subline">Heute dreht sich die Welt nur um dich!</p>
