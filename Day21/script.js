const { start } = require("repl");

let fokusZeit= 25*60;
let pauseZeit= 5*60;
let aktuelleZeit= fokusZeit;
let istFokus= true;
let timer= null;
let zyklus= 1;

function startTimer() {
    if (timer) return;

    timer= setInterval(() => {
        aktuelleZeit--;

        updateAnzeige();

        if (aktuelleZeit <= 0) {
            document.getElementById("alarm").onplay();
            wechselModus();
        }
    }, 1000);
}

function updateAnzeige () {
    const minuten= Math.floor(aktuelleZeit / 60).toString().padStart(2, '0');
    const sekunden= (aktuelleZeit % 60).toString().padStart(2, '0');
    document.getElementById("zeit").innerText= '${minuten}:${sekunden}';
}

function wechselModus() {
    clearInterval(timer);
    timer= null;

    istFokus= !istFokus;
    aktuelleZeit= istFokus ? fokusZeit : pauseZeit;

    document.getElementById("status").innerText= istFokus ? "Fokus" : "Pause";
    document.getElementById("status").style.color= istFokus ? "#ffcc00" : "#00ccff";

    if (istFokus) {
        zyklus++;
        document.getElementById("zyklusInfo").innerText= 'Zyklus: ${zyklus}';
    }

    startTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer= null;
    aktuelleZeit= fokusZeit;
    istFokus= true;
    zyklus= 1;
    updateAnzeige();
    document.getElementById("status").innerText= "Fokus";
    document.getElementById("status").style.color= "#ffcc00";
    document.getElementById("zyklusInfo").innerText= "Zyklus: 1";
}

updateAnzeige();