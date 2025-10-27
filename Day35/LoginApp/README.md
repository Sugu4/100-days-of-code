# **Tag 35 – FastAPI Benutzer-Authentifizierung (JWT)**
Datum: 27. Oktober 2025  
Dauer: 5 Stunden (Implementierung & Tiefen-Debugging)  
Thema: Implementierung eines vollständigen Login- und Registrierungssystems mit JWT (JSON Web Tokens) und Hashing.

---

**Was habe ich gelernt?**

- **Architektur:** Den Aufbau eines sicheren Authentifizierungs-Backends.
- **JWT:** Erstellung und Validierung von zustandslosen Access Tokens (`jose`).
- **Hashing-Strategie:** Erfolgreicher Umstieg vom instabilen **bcrypt** auf das stabilere **PBKDF2-SHA256** Hashing.
- **Form-Validierung:** Nutzung von `EmailStr` (Pydantic) und `OAuth2PasswordRequestForm` (FastAPI).
- **Abhängigkeitsmanagement:** Behebung kritischer Fehler durch Installation fehlender optionaler Pakete (`email-validator`, `python-multipart`).
- **Debugging:** Systematische Behebung von tief sitzenden Kompatibilitätsfehlern (`ValueError`, `AttributeError` in `passlib`).
- **Sicherheit:** Korrekte Nutzung und Platzierung der `.env` für geheime Schlüssel (`SECRET_KEY`).
- **CORS:** Korrekte Konfiguration der Middleware, um Frontend (Port 5500) und Backend (Port 8000) zu verbinden.

---

**Verwendete Techniken**

| Code                                      | Bedeutung                                                           |
|-------------------------------------------|----------------------------------------------------------------------|
| `CryptContext(schemes=["pbkdf2_sha256"])` | Initiiert sicheres Passwort-Hashing mit PBKDF2 (stabil).               |
| `oauth2_scheme`                           | Definiert den Endpunkt für die Token-Generierung.                    |
| `auth.create_access_token(...)`           | Erstellt das JWT mit Gültigkeitsdauer (`expires_delta`).              |
| `Depends(get_current_user)`               | Schützt Endpunkte (z.B. `/users/me`) durch Token-Validierung.          |
| `fetch(`${API}/users/me`, ...)`          | JavaScript-Abruf des Profils mithilfe des Access Tokens.            |
| `localStorage.setItem("access_token", ...)` | Speichert das Token sicher im Browser nach erfolgreichem Login.        |

---

**Vorschau & Setup**

**Benötigte Pakete installieren:**
1. Aktiviere virtuelle Umgebung (`.\venv\Scripts\activate`)
2. Installiere alle benötigten Pakete, im `LoginApp/` (`pip install -r backend/requirements.txt`)

**Lokalen Server starten:**
1. Virtuelle Umgebung ist aktiv (`.\venv\Scripts\activate`).
2. Im `LoginApp/` Stammverzeichnis ausführen: `uvicorn backend.main:app --reload`.

**Frontend starten (separates Terminal):**
1. Aktiviere virtuelle Umgebung (`.\venv\Scripts\activate`) im `LoginAPP/`
1. Dannach `cd frontend/` im Ordner ausführen: `python -m http.server 5500`.
2. Öffnen Sie: [**http://127.0.0.1:5500/register.html**](https://sugu4.github.io/100-days-of-code/Day35/LoginApp/frontend/)

**API-Dokumentation (Swagger UI):**  
- Automatisch generierte Benutzeroberfläche für FastAPI (`http://127.0.0.1:8000/docs`)

---

**Projektdateien**

- `backend/auth.py` – Hashing und JWT-Erstellung
- `backend/main.py` – API-Routen (`/register`, `/token`, `/users/me`)
- `frontend/index.html` – Anzeige des Profils über Token-Abruf
- `requirements.txt` – Sauber definierte Abhängigkeiten inkl. Extras

---

**Besonderheiten & Funktionen**

- **Sichere Auth:** Benutzerregistrierung und Login mit gehashten Passwörtern.  
- **Geschützte Route:** Profil-Endpunkt (`/users/me`) nur mit gültigem JWT zugänglich.  
- **Clean Setup:** Korrekte Projektstruktur und Verwendung von `.env`.  
- **Fehlerresistent:** Verwendung von PBKDF2, um bcrypt-Kompatibilitätsprobleme zu vermeiden.

---

**Ideen für Erweiterung (optional)**

- Unit Tests mit `pytest` für die gesamte Logik in `crud.py` und `auth.py`. 
- Implementierung von Refresh Tokens. 
- Role-Based Access Control (RBAC).

---

**Fazit:**  
Das Projekt dient als robuste und sichere Basis für jede zukünftige FastAPI-App, die Benutzerkonten benötigt.

---