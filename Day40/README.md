# Zeit- & Kostenrechner für Routineaufgaben

Ein einfacher, interaktiver Rechner, mit dem du abschätzen kannst, wie viel Zeit und Geld jedes Jahr in wiederkehrenden Aufgaben verschwindet. Ideal, um Automatisierungspotenziale in Prozessen sichtbar zu machen.

---

## Was macht das Tool?

Du gibst ein:

- Kosten pro Arbeitsstunde (Bruttokosten inkl. Lohnnebenkosten, grob geschätzt)  
- Dauer einer wiederkehrenden Aufgabe in Minuten  
- Wie oft die Aufgabe pro Woche vorkommt  
- Wie viele Arbeitswochen pro Jahr relevant sind  

Der Rechner berechnet daraus:

- Gesamtstunden pro Jahr, die für diese Aufgabe draufgehen  
- geschätzte jährliche Kosten, die dadurch entstehen  

---

## Verwendete Formel

### 1. Zeit pro Jahr

\[
\text{Stunden pro Jahr} = \frac{\text{Minuten pro Vorgang} \times \text{Häufigkeit pro Woche} \times \text{Wochen pro Jahr}}{60}
\]

- Minuten pro Vorgang: z.B. 30  
- Häufigkeit pro Woche: z.B. 5  
- Wochen pro Jahr: z.B. 42  

Beispiel:

- 30 Minuten × 5 × 42 = 6300 Minuten  
- 6300 ÷ 60 = 105 Stunden pro Jahr  

### 2. Kosten pro Jahr

\[
\text{Kosten pro Jahr} = \text{Stunden pro Jahr} \times \text{Kosten pro Stunde}
\]

Beispiel:

- 105 Stunden × 50 € = 5.250 € pro Jahr  

Diese Kosten sind der „Zeitverlust“ für genau diese eine Aufgabe. Sie orientieren sich am Konzept „Time Cost“: verlorene Zeit × Stundensatz der Ressource.

---

## Beispiel in der Praxis

Angenommen:

- Kosten pro Stunde: 50 €  
- Dauer: 30 Minuten  
- Häufigkeit: 5× pro Woche  
- 42 Wochen pro Jahr  

Dann zeigt dir der Rechner:

- ca. 105 Stunden pro Jahr  
- ca. 5.250 € pro Jahr, die in diese eine Tätigkeit fließen  

Wenn du diese Aufgabe z.B. teilweise automatisierst oder reduzierst, kannst du einen Teil dieser Zeit und Kosten zurückgewinnen.

---

## Nutzung

1. Öffne die gehostete Seite (GitHub Pages Link deines Repos).  
2. Passe die vier Eingabefelder an deine Situation an.  
3. Der Rechner aktualisiert die Werte automatisch bei jeder Eingabe.  
4. Nutze das Ergebnis, um besser zu argumentieren:
   - gegenüber Geschäftsführung  
   - in eigenen Projekten  
   - oder in Gesprächen über Prozessautomatisierung / Digitalisierung.

👉https://sugu4.github.io/100-days-of-code/Day40/

---

## Tech-Stack

- Reine HTML/CSS/JavaScript, kein Framework  
- Design in Montserrat, Gradient in Türkis/Blau  
- Responsives Layout, optimiert für Desktop und Mobile  
- Einfache Integration als GitHub Pages Projekt  

---

## Hinweise

- Es handelt sich um eine grobe Schätzung, kein Finanz- oder Steuer-Tool.  
- Gemeinkosten, Opportunitätskosten oder komplexere ROI-Berechnungen werden bewusst nicht berücksichtigt, damit das Tool schnell und verständlich bleibt.

---

## Autor

Erstellt von **Süleyman Gümüs** – einfache Tools, um ineffiziente Prozesse sichtbar zu machen und bessere Entscheidungen zur Automatisierung zu treffen.
