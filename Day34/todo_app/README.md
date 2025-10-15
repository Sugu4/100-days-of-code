# **Tag 34 – FastAPI To-Do-App mit Frontend-Anbindung** 

Datum: 15. Oktober 2025  
Dauer: 4 Stunden  
Thema: Aufbau einer REST-API mit FastAPI und Verbindung zu einem Vanilla-JavaScript-Frontend. Implementierung von vollständigen CRUD-Operationen.

---

**Was habe ich gelernt?**

- **Architektur:** Den professionellen Ablauf von ERD/RDM-Modellierung bis zum API-Design.
- **FastAPI-Setup:** Einrichten einer professionellen Backend-Struktur (`main.py`, `models.py`, `crud.py`, `schemas.py`).
- **Datenbank-Anbindung:** Nutzung von SQLAlchemy zur Definition des Datenmodells und Anbindung an eine SQLite-Datenbank.
- **Daten-Modellierung:** Verwendung von Pydantic (`schemas.py`) zur Validierung von Request- und Response-Daten.
- **REST-API:** Erstellung von Endpunkten (`GET`, `POST`, `PUT`, `DELETE`).
- **Debugging:** Behebung von `ModuleNotFoundError` und `ImportError` in Python-Paketstrukturen.
- **Frontend-Konnektivität:** Nutzung von Vanilla JavaScript (`fetch()`) und CORS zur Kommunikation zwischen HTML/JS und dem FastAPI-Backend.

---

**Verwendete Techniken**

| Code                                      | Bedeutung                                                           |
|-------------------------------------------|----------------------------------------------------------------------|
| `uvicorn backend.main:app --reload`        | Startet den FastAPI-Server als Modul.                                |
| `from .database import Base`               | Relativer Import innerhalb des `backend`-Pakets.                       |
| `Base.metadata.create_all(bind=engine)`    | Erstellt alle definierten SQLAlchemy-Tabellen in der DB.              |
| `class Task(BaseModel): ...`              | Definiert Pydantic-Schema zur Validierung von Requests/Responses.     |
| `@app.post("/tasks")`                     | Erstellt einen neuen API-Endpunkt für HTTP POST-Anfragen.            |
| `fetch(API + "/tasks", {method: "PUT"})`  | Sendet einen Request vom Frontend, um Daten zu aktualisieren.        |

---

**Vorschau & Setup**

**Lokalen Server starten:**
1. Virtuelle Umgebung aktivieren (`.\venv\Scripts\activate`).
2. Im `todo_app/` Stammverzeichnis ausführen: `uvicorn backend.main:app --reload`.

**API-Dokumentation (Swagger UI):**
👉 http://127.0.0.1:8000/docs

**Anwendung starten:**
👉 Öffnen Sie die Datei (https://sugu4.github.io/100-days-of-code/Day34/todo_app)`todo_app/frontend/index.html` im Browser.

---

**Projektdateien**

- `backend/main.py` – FastAPI-Routing & Initialisierung  
- `backend/models.py` – SQLAlchemy-Tabelle (`Task`)
- `frontend/index.html` – Struktur der To-Do-Liste
- `frontend/app.js` – Logik für Daten senden/laden (`fetch()`)
- `frontend/style.css` – Styling inkl. Flexbox für Formular-Layout

---

**Besonderheiten & Funktionen**

- **Full CRUD:** Tasks erstellen, anzeigen, bearbeiten (Status) und löschen.  
- **Dynamische Anzeige:** Beschreibung wird nur angezeigt, wenn sie vorhanden ist.  
- **Status-Toggle:** Klick auf den Task-Text schaltet `completed` (`✅/❌`) um.  
- **Automatisierte DB:** Tabelle wird bei Serverstart erstellt (SQLite).  
- **Clean Code:** Trennung von DB-Logik (`crud.py`) und API-Logik (`main.py`).

---

**Ideen für Erweiterung (optional)**

- Unit Tests mit `pytest` für die gesamte Logik in `crud.py` schreiben. 
- Deployment der App in einem Docker-Container (z.B. auf Render/Railway). 
- Benutzer-Authentifizierung (JWT/OAuth2) hinzufügen.
- Daten mit `localStorage` zwischenspeichern (Offline-Funktionalität).

---

**Fazit:**  
Ein vollständiges End-to-End-Projekt, das die Architektur moderner Python-Webanwendungen (Backend/Frontend-Trennung) perfekt demonstriert.