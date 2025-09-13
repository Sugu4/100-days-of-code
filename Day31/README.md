**Tag 31 – Warenkorb Statistik & Trends 📊**

Datum: 13. September 2025  
Dauer: 3 Stunden  
Thema: Erweiterte Analyse der Einkaufsliste — Statistik, Top-Produkte & Zeitreihen

---

**Was habe ich gelernt?**

- Statistische Auswertungen mit **pandas `.describe()`**  
- Gruppierungen über mehrere Spalten (`groupby(["Datum","Produkt"])`)  
- Erstellung von **Balkendiagrammen** für Top-Produkte  
- Erstellung von **Liniendiagrammen** für Produkt-Trends über mehrere Tage  
- Automatische Speicherung der Ergebnisse im Ordner `output/`

---

**Verwendete Techniken**

| Code / Technik                    | Bedeutung / Einsatz                                  |
|-----------------------------------|------------------------------------------------------|
| `pandas.DataFrame`                | Verarbeitung tabellarischer Daten                    |
| `groupby` + `describe`            | Gruppierte Statistiken (Mittelwert, Min, Max …)      |
| `pivot` / `lineplot`              | Trend-Analyse über die Zeit                          |
| `matplotlib` + `seaborn`          | Visualisierung (Balken & Linie)                      |
| `os.makedirs(..., exist_ok=True)` | Automatische Erstellung des Ausgabeordners           |

---

**Vorschau**

Nach Ausführung des Skripts (`python analyse.py`) werden die Ergebnisse im Ordner `output/` erzeugt:

- `output/top_produkte.csv` → Top-Produkte (Gesamtmenge)  
- `output/statistik.csv` → Beschreibende Statistik pro Produkt  
- `output/trend_rohdaten.csv` → Rohdaten der Zeitreihe  
- `output/top_produkte.png` → Balkendiagramm der Top-Produkte  
- `output/produkt_trend.png` → Liniendiagramm der Produkt-Trends

---

**Projektdateien**

- `analyse.py` – Hauptskript für Analyse & Visualisierung  
- `einkaufsliste.csv` – Beispiel-Datensatz (optional)  
- `requirements.txt` – Abhängigkeiten (optional)  
- `output/` (wird automatisch erstellt) – Ergebnisse (CSV & PNG)  
- `README.md` – Dokumentation

---

**Wie funktioniert’s?**

1. Repository klonen oder Dateien manuell anlegen (siehe oben).  
2. (Optional) Abhängigkeiten installieren:
   ```bash
   pip install -r requirements.txt

---

**Fazit**
Dieses Mini-Projekt zeigt, wie man mit Python & Pandas Warenkorb-Daten analysiert, Kennzahlen berechnet und Ergebnisse anschaulich visualisiert. Es ist abgeschlossen und dient als Übungsprojekt für Datenanalyse im Einzelhandel.