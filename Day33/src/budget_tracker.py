import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

PROJECT_ROOT = os.path.dirname(BASE_DIR)

data_dir = os.path.join(PROJECT_ROOT, "data")
output_dir = os.path.join(PROJECT_ROOT, "output")

os.makedirs(data_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

csv_file = os.path.join(data_dir, "budget.csv")

sns.set(style="whitegrid")

# --- Schritt 1: Budgetdaten laden oder erstellen ---
if os.path.exists(csv_file) and os.path.getsize(csv_file) > 0:
    try:
        df = pd.read_csv(csv_file) 
        df = df.dropna(how='all')
        df = df.reset_index(drop=True)
    except Exception as e:
        print(f"⚠️ Fehler beim Laden von budget.csv: {e}. Starte mit leerem DataFrame.")
        df = pd.DataFrame(columns=["Date", "Category", "Type", "Amount"])
else:
    df = pd.DataFrame(columns=["Date", "Category", "Type", "Amount"])
    df.to_csv(csv_file, index=False)


# --- Schritt 2: Konsolen Eingabe in einer Schleife ---
print("\n💰 Haushaltsbudget")

while True:
    print("\n-------------------------------------------")
    print("Neue Buchung hinzufügen (Datum leer = Analyse starten):")

    date_str = input("Datum (YYYY-MM-DD, leer = Analyse starten): ").strip()
    
    if not date_str:
        break 

    try:
        current_date = datetime.strptime(date_str, "%Y-%m-%d").strftime("%Y-%m-%d")
    except ValueError:
        print("❌ Ungültiges Datumsformat. Bitte YYYY-MM-DD verwenden.")
        continue 

    category = input("Kategorie (z. B. Miete, Lebensmittel, Gehalt): ").strip()
    entry_type = input("Typ (Einnahme/Ausgabe): ").strip().capitalize()
    amount_str = input("Betrag in EUR: ").strip()

    if category and entry_type in ["Einnahme", "Ausgabe"] and amount_str:
        try:
            amount = float(amount_str)
            new_entry = {"Date": current_date, "Category": category, "Type": entry_type, "Amount": amount}
            
            new_df = pd.DataFrame([new_entry])
            df = pd.concat([df, new_df], ignore_index=True)
            
            df.to_csv(csv_file, index=False)
            print("✅ Buchung hinzugefügt!")
        except ValueError:
            print("❌ Ungültiger Betrag. Buchung nicht hinzugefügt.")
    else:
        print("❌ Ungültige Eingabe (Kategorie oder Typ fehlt/falsch). Buchung nicht hinzugefügt.")


# --- Schritt 3: Analyse und Diagramme ---
if not df.empty:
    print(f"\n✅ Analyse wird gestartet. {len(df)} Buchungen gefunden.")
    
    # 1. Datenvorbereitung
    df['Date'] = pd.to_datetime(df['Date'], errors='coerce') 
    df = df.dropna(subset=['Date'])

    # 2. Sortierung und Saldo
    df["Saldo"] = df.apply(lambda row: row["Amount"] if row["Type"] == "Einnahme" else -row["Amount"], axis=1)
    df = df.sort_values(by=["Date", df.index]) 
    df["Kumuliert"] = df["Saldo"].cumsum()

    # Diagramm 1: Kumulierter Verlauf
    plt.figure(figsize=(10,6))
    plt.plot(df["Date"], df["Kumuliert"], marker="o", label="Kumuliertes Budget", color="blue")
    plt.title("Budget Verlauf über Zeit")
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
        plt.savefig(os.path.join(output_dir, "budget_kategorien_ausgaben.png")) 
        plt.close()
        print("📊 Diagramm gespeichert: output/budget_kategorien_ausgaben.png")

    # Diagramm 3: Einnahmen nach Kategorien
    einnahmen = df[df["Type"] == "Einnahme"].groupby("Category")["Amount"].sum().reset_index()
    if not einnahmen.empty:
        plt.figure(figsize=(8,5))
        sns.barplot(x="Amount", y="Category", data=einnahmen, palette="Greens_r") 
        plt.title("Einnahmen nach Kategorien")
        plt.xlabel("EUR")
        plt.ylabel("Kategorie")
        plt.tight_layout()
        plt.savefig(os.path.join(output_dir, "budget_kategorien_einnahmen.png"))
        plt.close()
        print("📊 Diagramm gespeichert: output/budget_kategorien_einnahmen.png")
        
    # Diagramm 4: Gesamt Einnahmen vs. Ausgaben
    gesamt_einnahmen = einnahmen['Amount'].sum() if not einnahmen.empty else 0
    gesamt_ausgaben = ausgaben['Amount'].sum() if not ausgaben.empty else 0
    
    vergleich_df = pd.DataFrame({
        'Typ': ['Gesamt Einnahmen', 'Gesamt Ausgaben'],
        'Betrag': [gesamt_einnahmen, gesamt_ausgaben]
    })
    
    plt.figure(figsize=(7, 7))
    sns.barplot(x='Typ', y='Betrag', data=vergleich_df, palette=['green', 'red'])
    plt.title('Gesamt Einnahmen vs. Gesamt Ausgaben')
    plt.ylabel('Betrag in EUR')
    plt.xlabel('')
    plt.tight_layout()
    plt.savefig(os.path.join(output_dir, "budget_einnahmen_vs_ausgaben.png"))
    plt.close()
    print("📊 Diagramm gespeichert: output/budget_einnahmen_vs_ausgaben.png")


    print("\n🎉 Analyse abgeschlossen! Ergebnisse im Ordner 'output/' verfügbar.")

else:
    print("⚠️ Noch keine Daten vorhanden, bitte neue Buchung eintragen!")