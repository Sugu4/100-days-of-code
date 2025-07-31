const binaerInput = document.getElementById("binaer");
const dezimalInput = document.getElementById("dezimal");

const dezimalAusgabe = document.getElementById("dezimalAusgabe");
const binaerAusgabe = document.getElementById("binaerAusgabe");

binaerInput.addEventListener("input", () => {
  const bin = binaerInput.value;

  // Nur 0 und 1 erlaubt
  if (/^[01]+$/.test(bin)) {
    const dez = parseInt(bin, 2);
    dezimalAusgabe.innerText = `Dezimal: ${dez}`;
  } else if (bin === "") {
    dezimalAusgabe.innerText = "Dezimal: –";
  } else {
    dezimalAusgabe.innerText = "⛔️ Ungültige Binärzahl";
  }
});

dezimalInput.addEventListener("input", () => {
  const dez = parseInt(dezimalInput.value);

  if (!isNaN(dez) && dez >= 0) {
    const bin = dez.toString(2);
    binaerAusgabe.innerText = `Binär: ${bin}`;
  } else if (dezimalInput.value === "") {
    binaerAusgabe.innerText = "Binär: –";
  } else {
    binaerAusgabe.innerText = "⛔️ Nur positive Ganzzahlen";
  }
});
