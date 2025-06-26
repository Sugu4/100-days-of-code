**Tag 2 – CSS Grundlagen**

Datum: 26. Juni 2025  
Dauer: 2 Stunden  
Thema: CSS-Styling, Farben, Schriftarten, Klassen

---

**Was habe ich gemacht?**

- Erste CSS-Datei erstellt (`style.css`) und in HTML eingebunden
- Farben, Schrift, Abstände und Textausrichtung angepasst
- Eigene CSS-Klassen geschrieben (`.highlight`, `.info`)
- Trennung von Struktur (HTML) und Design (CSS) verstanden

---

**Dateien**
- `index.html` – HTML-Gerüst mit Klassen
- `style.css` – Enthält alle Styles

---

**Erkenntnisse**
- CSS (Cascading Style Sheets) macht Webseiten nicht nur schöner, sondern auch lesbarer
- Die `.class`-Syntax ist super flexibel für gezielte Gestaltung
- Ich habe gelernt, dass man HTML möglichst "nackt" lässt und alles über CSS stylt
- Die Einbindung entsteht durch <link rel="stylesheet" href="style.css">, verbindet die externe Datei style.css mit dem der HTML-Seite.
- Wiederverwendbare Gestaltungsvorlagen, du kannst viele HTML-Elemente mit einer Klasse formatieren: <p class="info">...</p>.

---

**Bedeutung der wichtigsten Teile aus style.css**

```html
body { ... }                     →Stile, die für den gesamten Seitenkörper gelten (z.B. Hintergrundfarbe, Schrift)
font-family: Arial, sans-serif;	 →Definiert die Schriftart – zuerst Arial, sonst Ersatzschrift
color: #333;	                 →Textfarbe – Hexadezimalwert für dunkles Grau
background-color: #f4f4f4;	    →Hintergrundfarbe für die Seite
h1 { color: #0066cc; }	        →Farbe und Stil des Haupttitels (z. B. blau und zentriert)
.highlight { ... }	             →Eigene CSS-Klasse – nutzbar in HTML mit class="highlight"
padding: 10px;	                 →Innenabstand – macht den Inhalt „atmen“
border-radius: 5px;	             →Abgerundete Ecken bei Boxen
.info { font-style: italic; }	 →Zweite eigene Klasse – zeigt, dass man gezielt Elemente gestalten kann
```

---