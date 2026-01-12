# Todo App

Eine **moderne, minimalistische Todo-App** mit **Unteraufgaben**, **Filter-Funktion** und **LocalStorage-Persistenz** – komplett ohne Frameworks.

Dieses Projekt ist bewusst **einfach aufgebaut**, aber **technisch sauber strukturiert**, sodass es sich problemlos für **größere Projekte**, **Erweiterungen** und als **GitHub-Portfolio-Projekt** eignet.

---

## Features

* ✅ Aufgaben erstellen, bearbeiten und löschen
* ✅ Unteraufgaben (Subtasks)
* ✅ Aufgaben als erledigt markieren
* ✅ Filter: *Alle*, *Offen*, *Erledigt*
* ✅ Inline-Bearbeitung (contenteditable)
* ✅ Persistente Speicherung via **LocalStorage**
* ✅ Modernes Dark-UI Design
* ✅ 100 % Vanilla JavaScript (kein Framework)

---

## Datenmodell

Das Projekt verwendet ein bewusst simples, aber erweiterbares Datenmodell:

```js
[
  {
    text: "Hauptaufgabe",
    done: false,
    subs: [
      { text: "Unteraufgabe", done: true }
    ]
  }
]
```

### Vorteile dieses Modells

* leicht verständlich
* direkt als JSON speicherbar
* kompatibel mit APIs & Datenbanken
* ideal für spätere Erweiterungen (z. B. Projekte, Kanban, Backend)

---

## Installation & Nutzung

### Lokal starten

1. Repository klonen oder herunterladen
2. `index.html` im Browser öffnen
3. Aufgaben hinzufügen – fertig ✅

👉

## Geplante Erweiterungen (Roadmap)

* ⏭️ Mehrere Projekte
* ⏭️ Kanban-Board (Offen / In Arbeit / Erledigt)
* ⏭️ Drag & Drop
* ⏭️ Eindeutige IDs (UUID)
* ⏭️ Backend-Anbindung (REST API)
* ⏭️ Electron / Desktop-Version

---

## Technologie-Stack

* **HTML5**
* **CSS3 (Custom Properties / Dark Theme)**
* **JavaScript (ES6+)**
* **LocalStorage**

---

## Ziel des Projekts

Dieses Projekt dient als:

* Lernprojekt für saubere JavaScript-Architektur
* Grundlage für größere Projekt-Management-Tools
* Portfolio-Projekt für GitHub
* Basis für spätere Fullstack- oder Embedded-Hybride

---

## Lizenz

Dieses Projekt ist frei nutzbar für Lern- und Demo-Zwecke.
