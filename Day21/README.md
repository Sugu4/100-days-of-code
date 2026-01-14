**Tag 21 – FOKUS PRO Steel Edition**

Datum: 28. Juli 2025  
Dauer: 2,5 Stunden  
Thema: Ein Timer mit Fokus-/Pausenmodus, Soundeffekt und Zyklusanzeige  
**📌Update: 14.01.2026, Steel Edition, Balken wird gefüllt und entlert Potimaler Design und effekt.  Minimalistisch Steel Edition**

---

**Was habe ich gelernt?**

- Wie man mit `setInterval()` einen Countdown erstellt
- Verwendung von `Math.floor()` & `padStart()` zur Formatierung
- Einsatz von `clearInterval()` für präzise Steuerung
- Wechsel zwischen Fokus- und Pausenzeit mit `if`-Logik
- Einbindung von `<audio>`-Elementen für akustisches Feedback
- DOM-Manipulation mit `innerText` & `style.color`
- Zyklenzähler zur Motivation eingebaut
- Test auf Smartphone: responsive & benutzerfreundlich

---

**Verwendete Techniken**

| Code                              | Bedeutung                                              |
|----------------------------------|--------------------------------------------------------|
| `setInterval(fn, 1000)`          | Führt Funktion jede Sekunde aus (Timer)                |
| `clearInterval(timer)`           | Stoppt die Zeitmessung                                |
| `Math.floor(x / 60)`             | Minutenberechnung aus Sekunden                        |
| `padStart(2, "0")`               | Führt führende Null ein für Anzeige wie `09`          |
| `document.getElementById(...).innerText` | Ändert sichtbare Texte im HTML             |
| `<audio src="...">`              | Spielt Ton ab, wenn ein Zyklus endet                  |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 [Fokus Pro – Jetzt ausprobieren](https://sugu4.github.io/100-days-of-code/Day21/)

---

**Projektdateien**

- `index.html` – Timer-Aufbau, Statusanzeige, Audio-Einbindung  
- `style.css` – Dunkles Layout, Fokus-/Pausenfarben  
- `script.js` – Timer-Logik, Reset, Zyklusverwaltung, Ton  
- `README.md` – Erklärung, Techniken, Vorschau

---

**Funktionsweise (Kurzfassung)**

- ▶️ **Start**: Timer zählt von 25:00 herunter  
- ⏸️ **Stop**: Timer pausiert  
- 🔁 **Reset**: Startet Fokus-Timer von vorne  
- Nach Ablauf:  
  - Ton ertönt  
  - Anzeige wechselt zu Pause oder zurück zu Fokus  
  - Zähler „Zyklus: 1 → 2 → 3...“ zählt hoch

---

**Ideen für Erweiterung**

- Automatischer Wechsel zwischen Fokus & Pause  
- Fortschrittsbalken pro Zyklus  
- Speicherung der Pomodoros (z. B. in `localStorage`)  
- Benutzereigene Farben oder Zeiten

---

**Fazit:**  
Ein praktisches Tool für produktive Arbeitsphasen mit sichtbarem Fortschritt, Ton und professioneller Struktur – mobil & am Desktop nutzbar.
