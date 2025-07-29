const audio = document.getElementById("meditationssound");
const kreis = document.getElementById("kreis");
const anleitung = document.getElementById("anleitung");

let phasen = [
  { text: "Einatmen …", scale: 1.8 },
  { text: "Halten …", scale: 1.8 },
  { text: "Ausatmen …", scale: 1.0 },
  { text: "Halten …", scale: 1.0 }
];

let index = 0;
let timer = null;
let countdownTimer = null;

function startMeditation() {
  stopMeditation();
  index = 0;
  audio.currentTime = 0;
  audio.play();

  anleitung.innerText = "Los geht’s in: 3";
  let countdown = 3;

  countdownTimer = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      anleitung.innerText = `Los geht’s in: ${countdown}`;
    } else {
      clearInterval(countdownTimer);
      anleitung.innerText = "Los geht's!";
      setTimeout(() => {
        durchlauf();
        timer = setInterval(durchlauf, 4000);
      }, 1000);
    }
  }, 1000);
}

function stopMeditation() {
  clearInterval(timer);
  clearInterval(countdownTimer);
  timer = null;
  countdownTimer = null;

  audio.pause();
  audio.currentTime = 0;

  kreis.style.transition = "transform 0.5s ease";
  kreis.style.transform = "scale(1)";
  anleitung.innerText = "Meditation gestoppt.";
}

function durchlauf() {
  const phase = phasen[index];
  anleitung.innerText = phase.text;
  kreis.style.transition = "transform 4s ease-in-out";
  kreis.style.transform = `scale(${phase.scale})`;
  index = (index + 1) % phasen.length;
}
