function berechne() {
  const zahl1 = parseFloat(document.getElementById("zahl1").value);
  const zahl2 = parseFloat(document.getElementById("zahl2").value);
  const operator = document.getElementById("operator").value;
  const ergebnis = document.getElementById("ergebnis");

  if (isNaN(zahl1) || isNaN(zahl2)) {
    ergebnis.innerText = "❗ Bitte gib zwei gültige Zahlen ein.";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = zahl1 + zahl2;
      break;
    case "-":
      result = zahl1 - zahl2;
      break;
    case "*":
      result = zahl1 * zahl2;
      break;
    case "/":
      if (zahl2 === 0) {
        ergebnis.innerText = "❗ Division durch 0 ist nicht erlaubt.";
        return;
      }
      result = zahl1 / zahl2;
      break;
    default:
      ergebnis.innerText = "❗ Ungültiger Operator.";
      return;
  }

ergebnis.innerText = `✅ Ergebnis: ${zahl1.toLocaleString("de-DE")} ${operator} ${zahl2.toLocaleString("de-DE")} = ${result.toLocaleString("de-DE")}`;
}
