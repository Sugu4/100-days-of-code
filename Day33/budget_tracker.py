
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