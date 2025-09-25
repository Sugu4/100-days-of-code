# XAU/USD Kursanalyse mit Python
import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import requests

sns.set(style="whitegrid")

# --- Vorbereitung ---
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)
data_dir = "data"
os.makedirs(data_dir, exist_ok=True)

csv_file = os.path.join(data_dir, "xauusd_mock.csv")

# Optional: API-Key (falls vorhanden)
API_KEY = os.getenv("API_KEY", None)
API_URL = "https://www........"


def load_data():
    """Daten laden: API falls möglich, sonst CSV"""
    if API_KEY:
        print("📥 Lade Daten für XAU/USD von API ...")
        params = {
            "function": "FX_DAILY",
            "from_symbol": "XAU",
            "to_symbol": "USD",
            "apikey": API_KEY,
            "outputsize": "compact"
        }
        r = requests.get(API_URL, params=params)
        data_json = r.json()

        if "Time Series FX (Daily)" in data_json:
            df = pd.DataFrame.from_dict(data_json["Time Series FX (Daily)"],
                                        orient="index").rename(columns={
                                            "1. open": "Open",
                                            "2. high": "High",
                                            "3. low": "Low",
                                            "4. close": "Close"
                                        })
            df.index = pd.to_datetime(df.index)
            df = df.astype(float).sort_index()
            df.to_csv(os.path.join(output_dir, "xauusd_data.csv"))
            print("✅ Live-Daten gespeichert.")
            return df
        else:
            print("⚠️ API fehlgeschlagen, nutze CSV-Daten.")

    # Fallback: CSV-Datei laden
    if os.path.exists(csv_file):
        print("📊 Lade lokale Beispieldaten ...\n")
        return pd.read_csv(csv_file, parse_dates=["Date"], index_col="Date")

    raise FileNotFoundError("❌ Keine Datenquelle gefunden!")


# --- Schritt 1: Daten einlesen ---
df = load_data()
print("📋 Datenvorschau:")
print(df.head(), "\n")

# --- Schritt 2: Moving Averages ---
df["MA20"] = df["Close"].rolling(window=20).mean()
df["MA50"] = df["Close"].rolling(window=50).mean()

# --- Schritt 3: Renditen & Volatilität ---
df["Return_%"] = df["Close"].pct_change() * 100
volatility = df["Return_%"].rolling(window=20).std()

# --- Schritt 4: Kursverlauf mit MA ---
plt.figure(figsize=(12,6))
plt.plot(df.index, df["Close"], label="XAU/USD Kurs", color="black")
plt.plot(df.index, df["MA20"], label="MA20", color="blue", linestyle="--")
plt.plot(df.index, df["MA50"], label="MA50", color="red", linestyle="--")
plt.title("XAU/USD Kursverlauf mit MA20 & MA50")
plt.xlabel("Datum")
plt.ylabel("Preis in USD")
plt.legend()
plt.tight_layout()
plt.savefig(os.path.join(output_dir, "xauusd_chart.png"))
plt.close()
print("✅ Chart gespeichert: output/xauusd_chart.png")

# --- Schritt 5: Rendite-Histogramm ---
plt.figure(figsize=(8,5))
sns.histplot(df["Return_%"].dropna(), bins=40, kde=True, color="gold")
plt.title("Verteilung der täglichen Renditen (%)")
plt.xlabel("Rendite in %")
plt.ylabel("Häufigkeit")
plt.tight_layout()
plt.savefig(os.path.join(output_dir, "rendite_hist.png"))
plt.close()
print("✅ Histogramm gespeichert: output/rendite_hist.png")

# --- Schritt 6: Volatilität ---
plt.figure(figsize=(10,5))
plt.plot(df.index, volatility, color="purple")
plt.title("20-Tage Volatilität (%) – XAU/USD")
plt.xlabel("Datum")
plt.ylabel("Volatilität (%)")
plt.tight_layout()
plt.savefig(os.path.join(output_dir, "volatilitaet.png"))
plt.close()
print("✅ Volatilität gespeichert: output/volatilitaet.png")

print("\n🎉 Analyse abgeschlossen! Ergebnisse im Ordner 'output/' verfügbar.")
