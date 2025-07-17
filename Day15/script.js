const zitate = [
  "Der Weg ist das Ziel.",
  "Fang einfach an. Der Rest folgt.",
  "Jeder Tag ist eine neue Chance.",
  "Scheitern ist ein Teil des Erfolgs.",
  "Denke groß. Handle jetzt.",
  "Veränderung beginnt bei dir."
];

function aktuellesDatum() {
  const heute = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return heute.toLocaleDateString('de-DE', options);
}

function zeigeZufallsZitat() {
  const index = Math.floor(Math.random() * zitate.length);
  document.getElementById("spruch").innerText = `"${zitate[index]}"`;
}

function zeigeBegrüßung() {
  const stunde = new Date().getHours();
  let text = "";
  let emoji = "";

  if (stunde >= 5 && stunde < 11) {
    text = "Guten Morgen";
    emoji = "☀️";
  } else if (stunde >= 11 && stunde < 17) {
    text = "Guten Tag";
    emoji = "🌤️";
  } else if (stunde >= 17 && stunde < 22) {
    text = "Guten Abend";
    emoji = "🌆";
  } else {
    text = "Gute Nacht";
    emoji = "🌙";
  }

  document.getElementById("gruss").innerText = `${emoji} ${text}, Süleyman!`;
}

// Start-Setup
document.getElementById("datum").innerText = aktuellesDatum();
zeigeZufallsZitat();
zeigeBegrüßung();
