const zitate = [
  "Der Weg ist das Ziel.",
  "Fang einfach an. Der Rest folgt.",
  "Jeder Tag ist eine neue Chance.",
  "Scheitern ist ein Teil des Erfolgs.",
  "Denke groß. Handle jetzt.",
  "Veränderung beginnt bei dir.",
  "Träume nicht dein Leben, lebe deinen Traum.",
  "Stillstand ist Rückschritt.",
  "Mut steht am Anfang des Handelns, Glück am Ende.",
  "Kleine Schritte führen zum Ziel.",
  "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.",
  "Du bist zu mehr fähig, als du glaubst.",
  "Lernen ist wie Rudern gegen den Strom – wer aufhört, treibt zurück.",
  "Fehler sind der Beweis, dass du es versuchst.",
  "Tu heute etwas, worauf du morgen stolz sein kannst.",
  "Disziplin schlägt Motivation.",
  "Gib nicht auf. Fang einfach nochmal an.",
  "Nicht perfekt sein – sondern echt.",
  "Großartige Dinge passieren außerhalb der Komfortzone.",
  "Die beste Zeit, etwas zu starten, ist jetzt."
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

  document.getElementById("gruss").innerText = `${emoji}${text}, Besucher!`;
}

// Start-Setup
document.getElementById("datum").innerText = aktuellesDatum();
zeigeZufallsZitat();
zeigeBegrüßung();
