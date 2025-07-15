const fragen = [
  {
    frage: "Welche Programmiersprache läuft direkt im Browser?",
    antworten: ["Python", "JavaScript", "C++"],
    richtig: 1
  },
  {
    frage: "Wofür steht HTML?",
    antworten: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink Tool Management Layer"
    ],
    richtig: 0
  },
  {
    frage: "Was ist eine Schleife in JavaScript?",
    antworten: [
      "Ein Soundeffekt",
      "Eine wiederholende Codeausführung",
      "Ein Farbmuster"
    ],
    richtig: 1
  }
];

let aktuelleFrage = 0;
let punkte = 0;

function zeigeFrage() {
  const q = fragen[aktuelleFrage];
  document.getElementById("frage").innerText = q.frage;
  q.antworten.forEach((text, i) => {
    document.getElementById("btn" + i).innerText = text;
  });
  document.getElementById("feedback").innerText = "";
  document.getElementById("fortschritt").innerText =
    `Frage ${aktuelleFrage + 1} von ${fragen.length}`;
}

function antwortAuswerten(index) {
  const korrekt = fragen[aktuelleFrage].richtig;
  if (index === korrekt) {
    punkte++;
    document.getElementById("feedback").innerText = "✅ Richtig!";
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").innerText = "❌ Falsch.";
    document.getElementById("feedback").style.color = "red";
  }

  setTimeout(() => {
    aktuelleFrage++;
    if (aktuelleFrage < fragen.length) {
      zeigeFrage();
    } else {
      zeigeErgebnis();
    }
  }, 1000);
}

function zeigeErgebnis() {
  const total = fragen.length;
  const prozent = (punkte / total) * 100;
  let note, bewertung;

  if (prozent >= 90) {
    note = 1;
    bewertung = "Sehr gut";
  } else if (prozent >= 80) {
    note = 2;
    bewertung = "Gut";
  } else if (prozent >= 65) {
    note = 3;
    bewertung = "Befriedigend";
  } else if (prozent >= 50) {
    note = 4;
    bewertung = "Ausreichend";
  } else if (prozent >= 30) {
    note = 5;
    bewertung = "Mangelhaft";
  } else {
    note = 6;
    bewertung = "Ungenügend";
  }

  document.getElementById("frage").innerText = "🎉 Quiz abgeschlossen!";
  document.querySelector(".antworten").style.display = "none";

  document.getElementById("feedback").innerHTML =
    `✅ Du hast <strong>${punkte}</strong> von <strong>${total}</strong> richtig.<br>
     📊 <strong>Note:</strong> ${note} – ${bewertung}`;
  document.getElementById("feedback").style.color = "#333";
  document.getElementById("fortschritt").innerText = "";
  document.getElementById("neustartBtn").style.display = "inline-block";
}
function neustarten() {
  aktuelleFrage = 0;
  punkte = 0;
  document.querySelector(".antworten").style.display = "block";
  document.getElementById("neustartBtn").style.display = "none";
  zeigeFrage();
}

zeigeFrage();
