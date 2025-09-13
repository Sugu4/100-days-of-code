#!/usr/bin/env python3
"""
Tag 31 – Warenkorb-Analyse 🛒
Analyse von Einkaufsdaten: Bestseller-Produkte und Trends über Zeit.
Alle Ergebnisse werden im Ordner 'output/' gespeichert.
"""

import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

sns.set(style="whitegrid")

# --- Vorbereitung ---
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

csv_file = "einkaufsliste.csv"

# --- Schritt 1: Daten einlesen ---
if os.path.exists(csv_file):
    df = pd.read_csv(csv_file)
    print(f"✅ Datenquelle gefunden: '{csv_file}'\n")
else:
    print("⚠️ Keine 'einkaufsliste.csv' gefunden – benutze interne Beispieldaten.\n")
    data = {
        "Produkt": ["Milch","Brot","Milch","Äpfel","Brot","Käse","Bananen","Milch","Bananen","Brot"],
        "Menge":   [2,1,1,5,2,1,3,1,2,1],
        "Datum":   ["2025-09-03","2025-09-03","2025-09-02","2025-09-01","2025-09-01",
                    "2025-09-02","2025-09-03","2025-09-01","2025-09-02","2025-09-03"]
    }
    df = pd.DataFrame(data)

# Datum konvertieren
if "Datum" in df.columns:
    df["Datum"] = pd.to_datetime(df["Datum"], errors="coerce")

print("📋 Einkaufsliste Vorschau:")
print(df.head(), "\n")

# --- Schritt 2: Grundstatistik pro Produkt ---
statistik = df.groupby("Produkt")["Menge"].describe().reset_index()
statistik_path = os.path.join(output_dir, "statistik.csv")
statistik.to_csv(statistik_path, index=False)
print("📊 Statistik pro Produkt gespeichert.")
print(statistik, "\n")

# --- Schritt 3: Top-Produkte (Gesamtmenge) ---
produkt_counts = df.groupby("Produkt")["Menge"].sum().sort_values(ascending=False)
top_products_df = produkt_counts.reset_index().rename(columns={"Menge": "Gesamtmenge"})
top_products_path = os.path.join(output_dir, "top_produkte.csv")
top_products_df.to_csv(top_products_path, index=False)

print("🏆 Bestseller-Produkte:")
for i, row in enumerate(top_products_df.itertuples(index=False), start=1):
    print(f"{i}. {row.Produkt} – {row.Gesamtmenge} verkauft")
print()

# Balkendiagramm der Top-Produkte
top_n = 5
top_products_plot = top_products_df.head(top_n)
plt.figure(figsize=(8,5))
sns.barplot(x="Gesamtmenge", y="Produkt", data=top_products_plot, palette="Blues_d")
plt.title(f"Top {top_n} Produkte nach Gesamtmenge")
plt.xlabel("Gesamtmenge")
plt.ylabel("Produkt")
plt.tight_layout()
top_plot_path = os.path.join(output_dir, "top_produkte.png")
plt.savefig(top_plot_path)
plt.close()
print(f"📈 Balkendiagramm gespeichert: {top_plot_path}\n")

# --- Schritt 4: Trendanalyse ---
trend = df.groupby(["Datum", "Produkt"])["Menge"].sum().reset_index()
trend_csv_path = os.path.join(output_dir, "trend_rohdaten.csv")
trend.to_csv(trend_csv_path, index=False)

# Pivot für Zeitreihe
pivot = trend.pivot(index="Datum", columns="Produkt", values="Menge").fillna(0).sort_index()

plt.figure(figsize=(10,6))
for col in pivot.columns:
    plt.plot(pivot.index, pivot[col], marker="o", label=str(col))
plt.title("Produkt-Trends über Zeit")
plt.xlabel("Datum")
plt.ylabel("Verkaufte Menge")
plt.xticks(rotation=45)
plt.legend(title="Produkt")
plt.tight_layout()
trend_plot_path = os.path.join(output_dir, "produkt_trend.png")
plt.savefig(trend_plot_path)
plt.close()

print("📉 Trendanalyse gespeichert:", trend_plot_path, "\n")

# --- Abschluss ---
print("🎉 Analyse abgeschlossen! Ergebnisse im Ordner 'output/':")
for f in sorted(os.listdir(output_dir)):
    print(" -", f)
