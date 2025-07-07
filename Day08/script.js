function berechneSumme() {
    const zahl1 = parseFloat(document.getElementById("zahl1").value);
    const zahl2 = parseFloat(document.getElementById("zahl2").value);
    const ausgabe = document.getElementById("ergebnis");

    if (isNaN(zahl1) || isNaN(zahl2)) {
      ausgabe.innerText = " ! Bitte gib zwei gültige Zahlen ein.";
    } else {
      const summe = zahl1 + zahl2;
      ausgabe.innerText = `✅ Ergebnis: ${zahl1} + ${zahl2} = ${summe}`;
    }
}