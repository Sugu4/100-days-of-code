**Tag 20 – Pomodoro-Timer 🍅⏱️**

Datum: 25. Juli 2025  
Dauer: 2 Stunden  
Thema: Interaktiver 25-Minuten-Timer zur Förderung fokussierten Arbeitens nach der Pomodoro-Technik

---

**Was habe ich gelernt?**

- Wie man mit JavaScript einen Countdown erstellt
- Wie man Start/Stop/Reset-Buttons kontrolliert
- Verwendung von `setInterval()` und `clearInterval()`
- Nutzung von `innerText`, um die Anzeige live zu aktualisieren
- Styling eines Countdowns in Echtzeit mit CSS
- Einbindung eines Sounds bei Ablauf
- Verwendung einer CSS-Animation (`@keyframes`) für visuelles Feedback
- Mobilfreundliches Design im Dark Mode

---

**Verwendete Techniken**

| Code                                 | Bedeutung                                               |
|--------------------------------------|----------------------------------------------------------|
| `setInterval(fn, 1000)`              | Ruft jede Sekunde eine Funktion auf (Countdown)         |
| `clearInterval(timer)`               | Stoppt den Timer                                        |
| `Math.floor(dauer / 60)`             | Rechnet Sekunden in Minuten um                         |
| `padStart(2, "0")`                   | Formatiert Zahlen wie `05` statt `5`                   |
| `audio.play()`                       | Spielt einen Sound bei Ablauf                          |
| `classList.add("animation-klasse")`  | Löst eine CSS-Animation aus                            |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 [Pomodoro Timer – Jetzt starten](https://sugu4.github.io/100-days-of-code/Day20/)

---

**Projektdateien**

- `index.html` – HTML-Struktur mit Zeit-Anzeige & Buttons  
- `style.css` – Dark Mode, Styling & Animation  
- `script.js` – Timer-Logik, Events, Sound, Animation  
- `README.md` – Lerneffekt & Dokumentation

---

**Wie funktioniert’s?**

1. Klick auf „Start“ → der Timer beginnt bei **25:00**  
2. Klick auf „Stop“ → pausiert den Timer  
3. Klick auf „Reset“ → Timer beginnt neu bei 25:00  
4. Am Ende:  
   - Ton wird abgespielt  
   - Animation signalisiert „Fokuszeit vorbei“

---

**Ideen für Erweiterung (optional)**

- Fortschrittsanzeige (Pomodoro-Sessions zählen)  
- 5-Minuten-Pausen-Timer automatisch starten  
- Farbschema ändern bei Aktivität (Pause/Arbeit)  
- Speicherung im `localStorage` (z. B. Anzahl der Sessions)

---

**Fazit:**  
Der Pomodoro-Timer ist ein funktionales Mini-Tool für deinen Alltag – produktiv, stilvoll & vollständig mit HTML, CSS und JavaScript umgesetzt.
