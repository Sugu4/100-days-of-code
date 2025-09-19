import os
import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# -------------------------------
# Einstellungen
# -------------------------------
sns.set(style="whitegrid")

API_KEY = "DEIN_API_KEY_HIER"  # <-- Alpha Vantage API Key einfügen
TICKER = "XAUUSD"              # Symbol für Gold/US-Dollar
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# -------------------------------
# Schritt 1: Daten laden
# -------------------------------
print(f"📥 Lade Daten für {TICKER} von Alpha Vantage ...\n")

url = (
    f"https://www.alphavantage.co/query"
    f"?function=FX_DAILY&from_symbol=XAU&to_symbol=USD&apikey={API_KEY}&outputsize=full"
)

response = requests.get(url)

if response.status_code != 200:
    raise ValueError("❌ API Anfrage fehlgeschlagen – bitte Key oder Internet prüfen!")

data_json = response.json()

if "Time Series FX (Daily)" not in data_json:
    raise ValueError(f"❌ Keine Daten im API-Response: {data_json}")

df = pd.DataFrame.from_dict(data_json["Time Series FX (Daily)"], orient="index")
df = df.rename(
    columns={
        "1. open": "Open",
        "2. high": "High",
        "3. low": "Low",
        "4. close": "Close",
    }
)
df.index = pd.to_datetime(df.index)
df = df.sort_index()
df = df.astype(float)

# Nur die letzten 6 Monate
df = df.last("180D")

# CSV speichern
raw_path = os.path.join(output_dir, "xauusd_data.csv")
df.to_csv(raw_path)
print(f"✅ Rohdaten gespeichert: {raw_path}\n")

# -------------------------------
# Schritt 2: Moving Averages
# -------------------------------
df["MA20"] = df["Close"].rolling(window=20).mean()
df["MA50"] = df["Close"].rolling(window=50).mean()

# -------------------------------
# Schritt 3: Renditen & Volatilität
# -------------------------------
df["Return_%"] = df["Close"].pct_change() * 100
volatility = df["Return_%"].rolling(window=20).std()

# -------------------------------
# Schritt 4: Diagramme
# -------------------------------

# Kurs + MA20/50
plt.figure(figsize=(12,6))
plt.plot(df.index, df["Close"], label="XAU/USD Kurs", color="black")
plt.plot(df.index, df["MA20"], label="MA20", color="blue", linestyle="--")
plt.plot(df.index, df["MA50"], label="MA50", color="red", linestyle="--")
plt.title("XAU/USD Kursverlauf mit MA20 & MA50")
plt.xlabel("Datum")
plt.ylabel("Preis in USD")
plt.legend()
plt.tight_layout()
chart_path = os.path.join(output_dir, "xauusd_ma.png")
plt.savefig(chart_path)
plt.close()
print(f"✅ Chart gespeichert: {chart_path}\n")

# Histogramm Renditen
plt.figure(figsize=(8,5))
sns.histplot(df["Return_%"].dropna(), bins=40, kde=True, color="gold")
plt.title("Verteilung der täglichen Renditen (%)")
plt.xlabel("Rendite in %")
plt.ylabel("Häufigkeit")
plt.tight_layout()
hist_path = os.path.join(output_dir, "rendite_hist.png")
plt.savefig(hist_path)
plt.close()
print(f"✅ Histogramm gespeichert: {hist_path}\n")

# Volatilität
plt.figure(figsize=(10,5))
plt.plot(df.index, volatility, color="purple")
plt.title("20-Tage Volatilität (%) – XAU/USD")
plt.xlabel("Datum")
plt.ylabel("Volatilität (%)")
plt.tight_layout()
vol_path = os.path.join(output_dir, "volatilitaet.png")
plt.savefig(vol_path)
plt.close()
print(f"✅ Volatilitäts-Chart gespeichert: {vol_path}\n")

print("🎉 Analyse abgeschlossen! Ergebnisse im Ordner 'output/' verfügbar.")
