const textfeld = document.getElementById("textfeld");
const zaehler = document.getElementById("zaehler");
const max = 160;

textfeld.addEventListener("input", () => {
  const laenge = textfeld.value.length;
  zaehler.textContent = `${laenge} / ${max} Zeichen`;

  
  if (laenge > 140) {
    zaehler.className = "gefahr";
  } else if (laenge > 100) {
    zaehler.className = "warnung";
  } else {
    zaehler.className = "";
  }
});
