
import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import yfinance as yf

import ssl, certifi
ssl._create_default_https_context = lambda: ssl.create_default_context(cafile=certifi.where())


sns.set(style="whitegrid")

# --- Vorbereitung ---
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# --- Schritt 1: Daten laden ---
ticker = "XAUUSD=X"   # Gold/US-Dollar
print(f"📥 Lade Daten für {ticker} ...\n")
data = yf.download(ticker, period="6mo", interval="1d")

if data.empty:
    raise ValueError("❌ Keine Daten geladen! Bitte Internet prüfen oder anderen Zeitraum wählen.")

# Speichern der Rohdaten
raw_path = os.path.join(output_dir, "xauusd_data.csv")
data.to_csv(raw_path)
print(f"✅ Rohdaten gespeichert: {raw_path}\n")

# --- Schritt 2: Moving Averages ---
data["MA20"] = data["Close"].rolling(window=20).mean()
data["MA50"] = data["Close"].rolling(window=50).mean()

# --- Schritt 3: Renditen & Volatilität ---
data["Return_%"] = data["Close"].pct_change() * 100
volatility = data["Return_%"].rolling(window=20).std()

# --- Schritt 4: Diagramm – Kurs + MA20/50 ---
plt.figure(figsize=(12,6))
plt.plot(data.index, data["Close"], label="XAU/USD Kurs", color="black")
plt.plot(data.index, data["MA20"], label="MA20", color="blue", linestyle="--")
plt.plot(data.index, data["MA50"], label="MA50", color="red", linestyle="--")
plt.title("XAU/USD Kursverlauf mit MA20 & MA50")
plt.xlabel("Datum")
plt.ylabel("Preis in USD")
plt.legend()
plt.tight_layout()
chart_path = os.path.join(output_dir, "xauusd_ma.png")
plt.savefig(chart_path)
plt.close()
print(f"✅ Chart gespeichert: {chart_path}\n")

# --- Schritt 5: Histogramm der Renditen ---
plt.figure(figsize=(8,5))
sns.histplot(data["Return_%"].dropna(), bins=40, kde=True, color="gold")
plt.title("Verteilung der täglichen Renditen (%)")
plt.xlabel("Rendite in %")
plt.ylabel("Häufigkeit")
plt.tight_layout()
hist_path = os.path.join(output_dir, "rendite_hist.png")
plt.savefig(hist_path)
plt.close()
print(f"✅ Histogramm gespeichert: {hist_path}\n")

# --- Schritt 6: Volatilität (optional) ---
plt.figure(figsize=(10,5))
plt.plot(data.index, volatility, color="purple")
plt.title("20-Tage Volatilität (%) – XAU/USD")
plt.xlabel("Datum")
plt.ylabel("Volatilität (%)")
plt.tight_layout()
vol_path = os.path.join(output_dir, "volatilitaet.png")
plt.savefig(vol_path)
plt.close()
print(f"✅ Volatilitäts-Chart gespeichert: {vol_path}\n")

print("🎉 Analyse abgeschlossen! Ergebnisse im Ordner 'output/' verfügbar.")
