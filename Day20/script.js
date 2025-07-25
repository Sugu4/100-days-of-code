let dauer = 25 * 60; // 25 Minuten in Sekunden
let timer;           // Referenz für setInterval
let läuft = false;   // Status, ob Timer läuft

function startTimer() {
  if (läuft) return; // Doppelklick verhindern

  läuft = true;
  timer = setInterval(() => {
    if (dauer <= 0) {
      clearInterval(timer);
      läuft = false;

      document.getElementById("zeit").innerText = "⏰ Zeit abgelaufen!";
      document.getElementById("alarmSound").play(); // ▶️ Sound

      // Animation starten
      const zeitanzeige = document.getElementById("zeit");
      zeitanzeige.classList.add("zeit-animiert");

      // Animation nach 3 Sekunden zurücksetzen
      setTimeout(() => {
        zeitanzeige.classList.remove("zeit-animiert");
      }, 3000);

      return;
    }

    dauer--;
    aktualisiereAnzeige();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  läuft = false;
}

function resetTimer() {
  clearInterval(timer);
  läuft = false;
  dauer = 25 * 60;
  aktualisiereAnzeige();
}

function aktualisiereAnzeige() {
  const minuten = Math.floor(dauer / 60);
  const sekunden = dauer % 60;
  document.getElementById("zeit").innerText =
    `${minuten.toString().padStart(2, "0")}:${sekunden.toString().padStart(2, "0")}`;
}

// Initiale Anzeige setzen
aktualisiereAnzeige();
