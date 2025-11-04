# **Tag 36 – Mini-User-Dashboard (Fullstack Auth-Integration)**
Datum: 04. November 2025  
Dauer: 4 Stunden (Konsolidierung & Finale Integration)  
Thema: Aufbau eines ersten Fullstack-User-Dashboards, das den JWT-Login-Flow von Backend bis zur Frontend-Anzeige validiert.

---

**Was habe ich gelernt?**

- **Fullstack-Integration:** Erfolgreiche Verbindung der gesamten Kette: **Frontend (JS) ↔︎ FastAPI ↔︎ SQLModel**.
- **Pfadbehebung:** Korrektur von kritischen 404-Fehlern (`/users/me`) durch die richtige Definition der absoluten API-URL in `index.html`.
- **Datenkonsolidierung:** Anpassung der Datenbank- und Model-Struktur (Umstieg von SQLAlchemy auf **SQLModel**).
- **Session-Management (Frontend):** Korrektes Speichern und Abrufen des **`access_token`** im `localStorage` des Browsers.
- **Frontend-Routing:** Logische Weiterleitung des Benutzers von der Login-Seite (`index.html`) zum geschützten Bereich (`dashboard.html`).
- **Clean Code (CSS):** Anwendung modernen **CSS-Stylings** (Flexbox/Card-Layout) für eine saubere Benutzeroberfläche.

---

**Verwendete Techniken**

| Code                                      | Bedeutung                                                           |
|-------------------------------------------|----------------------------------------------------------------------|
| `CryptContext(schemes=["pbkdf2_sha256"])` | Initiiert das stabile PBKDF2-Hashing zur Passwortsicherheit.          |
| `fetch(`${API}/users/me`, ...)`          | JavaScript-Abruf der Profildaten unter Verwendung des JWT.          |
| `if (!token) return window.location...`   | Frontend-Logik: Leitet sofort zum Login um, wenn Token fehlt (Schutz). |
| `data.append("username", email)`          | Sendet Login-Daten korrekt als `x-www-form-urlencoded`.              |
| `SQLModel(table=True)`                    | Korrekte Definition der Datenbanktabellen.                            |
| `display: flex; justify-content: center;` | Zentriert die Login-/Dashboard-Card im modernen Layout.              |

---

**Vorschau & Setup**

**1. Vorbereitung & Installation:**
Aktivieren Sie Ihre virtuelle Umgebung (`.\venv\Scripts\activate`) und installieren Sie alle Pakete:

```bash
pip install -r backend/requirements.txt
```

**2. Lokalen Server starten (Backend): Im fullstack_dashboard/ Stammverzeichnis ausführen:**

```bash
uvicorn backend.main:app --reload
```

**3. Frontend starten (separates Terminal): Im frontend/ Ordner ausführen:**

```bash
python -m http.server 5500
```

**4. Öffnen im Browser die Login-Seite:**

- [fullstack_dashboard](https://sugu4.github.io/100-days-of-code/Day36/LoginAppfullstack_dashboard/frontend/index.html)

---

**Projektdateien**

- backend/main.py – Haupt-API-Routing und Initialisierung

- backend/auth.py – Hashing (PBKDF2) und JWT-Erstellung

- frontend/index.html – Die Login-Seite

- frontend/dashboard.html – Die geschützte Seite zur Anzeige der Benutzerdaten

- frontend/style.css – Modernes CSS-Card-Layout

---

**Fazit:**   
Ein vollständiges und stabiles Fullstack-Projekt, das beweist,  dass das Zusammenspiel von FastAPI, SQLModel und modernem  JavaScript gemeistert wurde.