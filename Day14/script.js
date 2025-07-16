const ideen = [
  "Eine App für schnelle Notizen mit Sprachaufnahme",
  "Ein ToDo-Tool für Familien",
  "Ein Quiz über deine Hobbys",
  "Ein Portfolio für Schüler",
  "Ein digitaler Motivationskalender",
  "Eine Mini-KI zur Ideenfindung",
  "Ein Markdown-Live-Editor",
  "Ein Zufallsbild-Generator",
  "Eine App für Dankbarkeitstagebuch",
  "Ein Minimal-Blog nur mit Tastaturbedienung"
];

function generiereIdee() {
  const zufall = Math.floor(Math.random() * ideen.length);
  document.getElementById("ausgabe").innerText = ideen[zufall];
}
