function berechneNote() {
  const punkte = parseInt(document.getElementById("punkte").value);
  const noteEl = document.getElementById("note");
  const bewertungEl = document.getElementById("bewertung");

  if (isNaN(punkte) || punkte < 0 || punkte > 100) {
    noteEl.innerText = "❗ Bitte gib eine Zahl von 0 bis 100 ein.";
    bewertungEl.innerText = "";
    return;
  }

  let note, bewertung;

  if (punkte >= 90) {
    note = 1;
    bewertung = "Sehr gut";
  } else if (punkte >= 80) {
    note = 2;
    bewertung = "Gut";
  } else if (punkte >= 65) {
    note = 3;
    bewertung = "Befriedigend";
  } else if (punkte >= 50) {
    note = 4;
    bewertung = "Ausreichend";
  } else if (punkte >= 30) {
    note = 5;
    bewertung = "Mangelhaft";
  } else {
    note = 6;
    bewertung = "Ungenügend";
  }

  noteEl.innerText = `Deine Note: ${note}`;
  bewertungEl.innerText = `Bewertung: ${bewertung}`;
}
