**📊 Day 32 – XAU/USD Analyse (Goldpreis)**

Dieses Mini-Projekt analysiert den Goldpreis in US-Dollar (XAU/USD).  
Da nicht jeder Zugriff auf Live-Börsendaten hat, arbeiten wir hier mit **Mock-Daten** (CSV-Datei).  
Optional kann die Analyse aber mit einer echten API (z. B. Metals-API, Yahoo Finance) erweitert werden.

---

**Projektstruktur**

```
day32/
│── data/
│   └── xauusd_mock.csv      # Beispiel-Daten
│── output/                  # Diagramme & Ergebnisse
│── xauusd_analysis.py       # Analyse-Skript
│── README.md                # Projektdokumentation
```

---

**Voraussetzungen**

- Python 3.10+  
- Virtuelle Umgebung (`.venv`)  
- Abhängigkeiten (werden in requirements.txt gepflegt):
  ```bash
  pip install pandas matplotlib seaborn
  ```

---

**Ausführen**

1. In den Ordner wechseln:
   ```bash
   cd day32
   ```

2. Virtuelle Umgebung aktivieren:
   - **Windows (PowerShell):**
     ```bash
     ..\.venv\Scripts\activate
     ```
   - **Linux/Mac:**
     ```bash
     source ../.venv/bin/activate
     ```

3. Analyse starten:
   ```bash
   python xauusd_analysis.py
   ```

---

**Ergebnisse**

Nach der Ausführung werden im Ordner **`output/`** folgende Diagramme gespeichert:

1. **Candlestick + SMA20/50** – Kursverlauf des Goldpreises mit gleitenden Durchschnitten  
2. **Histogramm der Renditen** – Verteilung der täglichen Renditen  
3. **Volatilität** – 20-Tage-Rolling-Standardabweichung  

Beispiel-Output:  

- `xauusd_ma.png`  
- `rendite_hist.png`  
- `volatilitaet.png`  

---

**Erweiterung: Echte Live-Daten**

Falls du statt Mock-Daten echte Finanzdaten nutzen willst, gibt es zwei Optionen:

### 1. Yahoo Finance (einfach, aber manchmal instabil)
```python
import yfinance as yf
data = yf.download("XAUUSD=X", period="6mo", interval="1d")
```

### 2. Alpha Vantage (kostenlos, API Key erforderlich)
1. Kostenlosen API-Key holen: 
2. Beispiel-Code:
   ```python
   import requests

   API_KEY = "DEIN_API_KEY"
   url = f"{API_KEY}"
   r = requests.get(url)
   data = r.json()
   ```

---

**Fazit**

- Mit **Mock-Daten** funktioniert das Projekt sofort.  
- Mit **APIs** kann die Analyse auf **Live-Daten** erweitert werden.  
- Dieses Projekt zeigt wichtige Werkzeuge für Datenanalyse:  
  - **Pandas** für Datenverarbeitung  
  - **Matplotlib/Seaborn** für Visualisierung  
  - **Technische Indikatoren** (SMA, Volatilität, Renditen)

---
