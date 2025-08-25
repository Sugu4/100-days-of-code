**Tag 26 – ToDo-App mit LocalStorage 📝**

Datum: 25. August 2025  
Dauer: 2 Stunden  
Thema: Aufgabenverwaltung mit Speichern im Browser (localStorage)

---

**Was habe ich gelernt?**

- Wie man Aufgaben in einer Liste dynamisch mit JavaScript darstellt  
- Nutzung von `localStorage`, um Daten auch nach einem Reload zu speichern  
- Unterschied zwischen Array und JSON (Speichern im Browser nur als String möglich → `JSON.stringify()`)  
- Wie man per Klick Aufgaben abhaken (`toggle`) oder löschen kann  
- DOM-Manipulation mit `createElement`, `innerHTML` und `appendChild`  
- Gestaltung einer nutzerfreundlichen Oberfläche für Desktop & Smartphone  

---

**Verwendete Techniken**

| Code                                    | Bedeutung                                      |
|-----------------------------------------|-----------------------------------------------|
| `localStorage.setItem(key, value)`      | Speichert Daten im Browser dauerhaft           |
| `localStorage.getItem(key)`             | Liest gespeicherte Daten wieder aus            |
| `JSON.stringify(obj)`                   | Wandelt ein Objekt in einen String um          |
| `JSON.parse(string)`                    | Wandelt String wieder zurück in ein Objekt     |
| `element.addEventListener("click", fn)` | Reagiert auf Klicks                            |
| `array.splice(index, 1)`                | Löscht ein Element aus einem Array             |

---

**Vorschau**

Live-Demo auf GitHub Pages:  
👉 [✅ ToDo-App jetzt testen](https://sugu4.github.io/100-days-of-code/Day26/)

---

**Projektdateien**

- `index.html` – Grundstruktur mit Eingabe & Liste  
- `style.css` – Responsives, cleanes Design  
- `script.js` – Logik zum Hinzufügen, Abhaken, Löschen & Speichern  
- `README.md` – Dokumentation und Lerneffekt  

---

**Wie funktioniert’s?**

1. Gib eine Aufgabe im Feld ein und klicke auf **➕ Hinzufügen**  
2. Klicke auf den Text → Aufgabe wird abgehakt  
3. Klicke auf das rote Kreuz → Aufgabe wird gelöscht  
4. Alle Daten bleiben im Browser gespeichert, auch nach einem Neustart  

---

**Fazit:**  
Die ToDo-App ist ein **praktisches Mini-Tool**, das dir zeigt, wie man **Daten im Browser speichert** und **nutzerfreundlich darstellt**.  
Sie ist sowohl am Desktop als auch am Smartphone nutzbar – und könnte später sogar zu einer **echten App (PWA oder mobile App)** ausgebaut werden.
