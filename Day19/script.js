const emojis = ["🚀", "🌈", "🔥", "🎯", "🎉", "✨", "💡", "🧠", "⚡", "🌟"];
const sprueche = [
  "Du bist stärker, als du denkst.",
  "Träume groß – beginne klein.",
  "Konzentrier dich auf Fortschritt, nicht Perfektion.",
  "Jede Zeile Code zählt.",
  "Du entwickelst dich – Tag für Tag.",
  "Kreativität ist Intelligenz mit Spaß.",
  "Scheitern ist Teil des Lernens.",
  "Was du heute tust, zählt morgen.",
  "Dein Weg – deine Geschwindigkeit.",
  "Keep going 💪"
];

function dreheKarte() {
  const karte = document.getElementById("karte");
  karte.classList.toggle("gedreht");
  neuerText();
}

function neuerText() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const spruch = sprueche[Math.floor(Math.random() * sprueche.length)];

  document.getElementById("emoji").innerText = emoji;
  document.getElementById("spruch").innerText = spruch;
}
