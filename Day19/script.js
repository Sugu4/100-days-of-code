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

let rueckseiteAktiv = false;

function dreheKarte() {
  const karte = document.getElementById("karte");

  
  if (!rueckseiteAktiv) {
    setTimeout(() => {
      aktualisiereSpruch();
    }, 800);
  } else {
    setTimeout(() => {
      aktualisiereEmoji();
    }, 800);
  }

  karte.classList.toggle("gedreht");

  rueckseiteAktiv = !rueckseiteAktiv;
}

function aktualisiereEmoji() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("emoji").innerText = emoji;
}

function aktualisiereSpruch() {
  const spruch = sprueche[Math.floor(Math.random() * sprueche.length)];
  document.getElementById("spruch").innerText = spruch;
}
