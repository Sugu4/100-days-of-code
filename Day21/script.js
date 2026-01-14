let fokusZeit = 25 * 60;
let pauseZeit = 5 * 60;

let aktuelleZeit = fokusZeit;
let istFokus = true;
let timer = null;
let zyklus = 1;

// Dauer der aktuellen Phase (für Prozent-Berechnung)
let phaseGesamt = fokusZeit;

function startTimer() {
    if (timer) return;

    timer = setInterval(() => {
        aktuelleZeit--;
        updateAnzeige();

        if (aktuelleZeit <= 0) {
            document.getElementById("alarm").play();
            wechselModus();
        }
    }, 1000);
}

function updateAnzeige() {
    const minuten = Math.floor(aktuelleZeit / 60).toString().padStart(2, "0");
    const sekunden = (aktuelleZeit % 60).toString().padStart(2, "0");
    document.getElementById("zeit").innerText = `${minuten}:${sekunden}`;

    // Fortschritt: Fokus 0->100, Pause 100->0
    let progress = 0;
    if (phaseGesamt > 0) {
        const elapsed = phaseGesamt - aktuelleZeit;
        progress = (elapsed / phaseGesamt) * 100;
    }
    if (!istFokus) {
        progress = 100 - progress;
    }
    progress = Math.max(0, Math.min(progress, 100));

    const fill = document.getElementById("fokusFill");
    if (fill) {
        fill.style.width = `${progress}%`;
    }
}

function wechselModus() {
    clearInterval(timer);
    timer = null;

    istFokus = !istFokus;
    aktuelleZeit = istFokus ? fokusZeit : pauseZeit;
    phaseGesamt = aktuelleZeit;

    const statusDot = document.getElementById("statusDot");
    if (istFokus) {
        statusDot.style.background = "#c5ff3a";
        statusDot.style.boxShadow = "0 0 10px rgba(197,255,58,0.7)";
    } else {
        statusDot.style.background = "#00ccff";
        statusDot.style.boxShadow = "0 0 10px rgba(0,204,255,0.7)";
    }

    if (istFokus) {
        zyklus++;
        document.getElementById("zyklusInfo").innerText = `Zyklus: ${zyklus}`;
    }

    updateAnzeige();
    startTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    aktuelleZeit = fokusZeit;
    istFokus = true;
    zyklus = 1;
    phaseGesamt = fokusZeit;

    updateAnzeige();
    const statusEl = document.getElementById("status");
    statusEl.innerText = "Fokus";
    statusEl.style.color = "#c5ff3a";
    document.getElementById("zyklusInfo").innerText = "Zyklus: 1";
}

// Initial
updateAnzeige();
window.addEventListener("load", () => {
    const startBtn = document.getElementById("startBtn");
    if (startBtn) startBtn.focus();
});
