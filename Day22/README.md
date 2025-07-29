**Tag 22 – Atem-Meditation 🌬️🧘‍♂️**

Datum: 29. Juli 2025  
Dauer: 2 Stunden  
Thema: Interaktive Atem-Übung mit Animation & Hintergrundmusik zur Entspannung

---

**Was habe ich gelernt?**

- Wie man mit CSS Animationen (z. B. `transform: scale()`) visuelle Effekte erzeugt
- Wie man Audio in HTML einbindet und über JavaScript steuert
- Erstellung eines Countdown-Starts vor Beginn der Meditation
- Strukturierung von wiederholten Atemphasen mit JavaScript (`setInterval`)
- Nutzung einer zentralen `div`-Animation zur Atemführung (Einatmen, Halten, Ausatmen)
- Mobilfreundliches UI für Meditationsanwendungen

---

**Verwendete Techniken**

| Code                                      | Bedeutung                                         |
|-------------------------------------------|--------------------------------------------------|
| `audio.play()`                            | Startet eine Hintergrund-Audio-Datei             |
| `transform: scale(...)`                   | Vergrößert oder verkleinert die Atem-Kugel      |
| `setInterval(fn, 4000)`                   | Führt alle 4 Sekunden eine Atemphase aus         |
| `clearInterval(timer)`                    | Stoppt die laufenden Phasen bei Klick auf Stop   |
| `anleitung.innerText = "..."`             | Zeigt die aktuelle Atemanweisung im Textbereich  |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 [🌬️ Atem-Meditation ansehen](https://sugu4.github.io/100-days-of-code/Day22/)

---

**Projektdateien**

- `index.html` – Struktur der Übung mit Buttons und Audioelement  
- `style.css` – Zentrierte Darstellung, Dark Mode, Animationen  
- `script.js` – Atemlogik, Animation, Steuerung und Audio  
- `sounds/meditation.mp3` – Hintergrundmusik (muss von dir eingefügt werden)  
- `README.md` – Lernfortschritt & Dokumentation

---

**Wie funktioniert’s?**

1. Klick auf ▶️ **Start**  
   – 3-Sekunden-Countdown  
   – Musik beginnt  
   – Die Kugel atmet mit dir im Rhythmus:
     - **Einatmen (4s)**  
     - **Halten (4s)**  
     - **Ausatmen (4s)**  
     - **Halten (4s)**  
2. Klick auf ⏹️ **Stop**  
   – Musik pausiert  
   – Animation wird zurückgesetzt

---

**Erweiterungsmöglichkeiten (optional)**

- Auswahl zwischen mehreren Sounds  
- Timer für 5, 10 oder 15 Minuten  
- PWA-App-Modus (offlinefähig)  
- Themen (Tag/Nacht, Naturfarben)

---

**Fazit:**  
Eine beruhigende Mini-App für deine Pause – perfekt für kurze Atemübungen, eingebettet in ein sauberes, ruhiges Design mit Audio-Unterstützung. Entwickelt komplett mit HTML, CSS & JavaScript.
