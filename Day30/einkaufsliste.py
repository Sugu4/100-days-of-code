import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# --- Schritt 1: Ausgabe-Ordner vorbereiten ---
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# --- Schritt 2: Daten einlesen ---
# Alternative: df = pd.read_csv("einkaufsliste.csv")
data = {
    "Produkt": ["Milch","Brot","Milch","Äpfel","Brot","Käse","Bananen","Milch","Bananen","Brot"],
    "Menge": [2,1,1,5,2,1,3,1,2,1],
    "Datum": ["2025-09-03","2025-09-03","2025-09-02","2025-09-01","2025-09-01",
              "2025-09-02","2025-09-03","2025-09-01","2025-09-02","2025-09-03"]
}
df = pd.DataFrame(data)

print("Einkaufsliste Vorschau:")
print(df.head(), "\n")

# --- Schritt 3: Analyse ---
produkt_counts = df.groupby("Produkt")["Menge"].sum().sort_values(ascending=False)

print("Häufigkeit pro Produkt (Summe der Mengen):")
print(produkt_counts, "\n")

# --- Schritt 4: Ergebnisse speichern ---
csv_path = os.path.join(output_dir, "top_produkte.csv")
produkt_counts.to_csv(csv_path, header=True)
print(f"✅ Top-Produkte CSV erstellt: '{csv_path}'\n")

# --- Schritt 5: Diagramm ---
top_n = 5
top_products = produkt_counts.head(top_n)

plt.figure(figsize=(8,5))
sns.barplot(x=top_products.values, y=top_products.index, palette="Blues_d")
plt.title(f"Top {top_n} Produkte nach Menge")
plt.xlabel("Gesamtmenge")
plt.ylabel("Produkt")
plt.tight_layout()

png_path = os.path.join(output_dir, "top_produkte.png")
plt.savefig(png_path)
print(f"✅ Balkendiagramm erstellt: '{png_path}'\n")
plt.show()
