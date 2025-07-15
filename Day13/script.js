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
  document.getElementById("frage").innerText = "🎉 Quiz abgeschlossen!";
  document.querySelector(".antworten").style.display = "none";
  document.getElementById("feedback").innerText =
    `Du hast ${punkte} von ${fragen.length} richtig.`;
  document.getElementById("feedback").style.color = "#333";
  document.getElementById("fortschritt").innerText = "";
}

zeigeFrage();