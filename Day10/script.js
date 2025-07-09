let count = 0;

function updateAnzeige() {
  const anzeige = document.getElementById("anzeige");
  anzeige.innerText = count;

  
  if (count > 0) {
    anzeige.className = "positiv";
  } else if (count < 0) {
    anzeige.className = "negativ";
  } else {
    anzeige.className = "";
  }
}

function anzahlErhöhen() {
  count++;
  updateAnzeige();
}

function anzahlVerringern() {
  count--;
  updateAnzeige();
}

function zurücksetzen() {
  count = 0;
  updateAnzeige();
}
