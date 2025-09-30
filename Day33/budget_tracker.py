
import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime

# Vorbereitung
data_dir = "data"
output_dir = "output"
os.makedirs(data_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

csv_file = os.path.join(data_dir, "budget.csv")

sns.set(style="whitegrid")

# Schritt 1: Budgetdaten laden oder erstellen
if os.path.exists(csv_file):
    df = pd.read_csv(csv_file, parse_dates=["Date"])
else:
    df = pd.DataFrame(columns=["Date", "Category", "Type", "Amount"])
    df.to_csv(csv_file, index=False)

# Schritt 2: Konsolen Eingabe
print("\n💰 Haushaltsbudget")
print("Neue Buchung hinzufügen (oder drücke Enter, um zu überspringen):")

date_str = input("Datum (YYYY-MM-DD, leer = heute): ").strip()
if date_str == "":
    date_str = datetime.today().strftime("%Y-%m-%d")

category = input("Kategorie (z. B. Miete, Lebensmittel, Gehalt): " ).strip()
entry_type = input("Typ (Einnahme/Ausgabe): ").strip().capitalize()
amount_str = input("Betrag in EUR: ").strip()

if category and entry_type in ["Einnahme", "Ausgabe"] and amount_str:
    try:
        amount = float(amount_str)
        new_entry = {"Date": date_str, "Category": category, "Type": entry_type, "Amount": amount}
        df = pd.concat([df, pd.DataFrame([new_entry])], ignore_index=True)
        df.to_csv(csv_file, index=False)
        print("✅ Buchung hinzugefügt!")
    except ValueError:
        print("❌ Ungültiger Betrag. Buchung nicht hinzugefügt.")
else:
    print("ℹ️ Keine neue Buchung hinzugefügt.")

# Schritt 3: Analyse
if not df.empty:
    # berechnene Saldo
    df["Saldo"] = df.apply(lambda row: row["Amount"] if row["Type] == "Einnahme" else -row["Amount"], axis=1)
    df = df.sort_values("Date")  

# Budget 
df["Kumuliert"] = df["Saldo"].cumsum()

# Diagramm 1: Einnahmen / Ausgaben
plt.figure(figsize=(10,6))
plt.plot(df["Date"], df["Kumuliert"], marker="o", label="Kumuliertes Budget", color="blue")
plt.titel("Budget Verlauf über Zeit")
plt.xlabel("Datum")
plt.ylabel("EUR")
plt.xticks(rotation=45)
plt.legend()
plt.tight_layout()
plt.savefig(os.path.join(output_dir, "budget_uebersicht.png"))
plt.close()
print("📊 Diagramm gespeichert: output/budget_uebersicht.png")

# Diagramm 2: Ausgaben nach Kategorien
ausgaben = df[df["Type"] == "Ausgabe"].groupby("Category")["Amount"].sum().reset_index()
if not ausgaben.empty:
    plt.figure(figsize=(8,5))
    sns.barplot(x="Amount", y="Category", data=ausgaben, palette="Reds_r")
    plt.title("Ausgaben nach Kategorien")
    plt.xlabel("EUR")
    plt.ylabel("Kategorie")
    plt.tight_layout()
    plt.savefig(os.path.join(output_dir, "budget_kategorien.png"))
    plt.close()
    print("📊 Diagramm gespeichert: output/budget_kategorien.png")

print("\n🎉 Analyse abgeschlossen! Ergebnisse im Ordner 'output/' verfügbar.")
