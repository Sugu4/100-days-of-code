import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# ===============================
# Schritt 1: Ausgabe-Ordner vorbereiten
# ===============================
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# ===============================
# Schritt 2: Daten einlesen
# ===============================
# Alternative: df = pd.read_csv("einkaufsliste.csv")
data = {
    "Produkt": ["Milch","Brot","Milch","Äpfel","Brot","Käse","Bananen","Milch","Bananen","Brot"],
    "Menge": [2,1,1,5,2,1,3,1,2,1],
    "Datum": ["2025-09-03","2025-09-03","2025-09-02","2025-09-01","2025-09-01",
              "2025-09-02","2025-09-03","2025-09-01","2025-09-02","2025-09-03"]
}
df = pd.DataFrame(data)

print("📋 Einkaufsliste Vorschau:")
print(df.head(), "\n")

# ===============================
# Schritt 3: Analyse – Produkte nach Gesamtmenge
# ===============================
produkt_counts = df.groupby("Produkt")["Menge"].sum().sort_values(ascending=False)

# Series in DataFrame umwandeln für saubere CSV
produkt_counts_df = produkt_counts.reset_index()
produkt_counts_df.columns = ["Produkt", "Gesamtmenge"]

print("📊 Häufigkeit pro Produkt (Summe der Mengen):")
print(produkt_counts_df, "\n")

# ===============================
# Schritt 4: Ergebnisse speichern (CSV)
# ===============================
csv_path = os.path.join(output_dir, "top_produkte.csv")
produkt_counts_df.to_csv(csv_path, index=False)
print(f"✅ Top-Produkte CSV erstellt: '{os.path.abspath(csv_path)}'\n")

# ===============================
# Schritt 5: Diagramm erstellen
# ===============================
top_n = 5
top_products = produkt_counts_df.head(top_n)

plt.figure(figsize=(8,5))
sns.barplot(x="Gesamtmenge", y="Produkt", data=top_products, palette="Blues_d")
plt.title(f"Top {top_n} Produkte nach Menge")
plt.xlabel("Gesamtmenge")
plt.ylabel("Produkt")
plt.tight_layout()

png_path = os.path.join(output_dir, "top_produkte.png")
plt.savefig(png_path)
print(f"✅ Balkendiagramm erstellt: '{os.path.abspath(png_path)}'\n")
plt.show()
