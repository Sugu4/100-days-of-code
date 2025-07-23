function generierePasswort() {
  const laenge = document.getElementById("laenge").value;
  const mitZahlen = document.getElementById("zahlen").checked;
  const mitSonderz = document.getElementById("sonderzeichen").checked;
  const mitGross = document.getElementById("grossbuchstaben").checked;

  let zeichen = "abcdefghijklmnopqrstuvwxyz";
  if (mitGross) zeichen += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (mitZahlen) zeichen += "0123456789";
  if (mitSonderz) zeichen += "!@#$%^&*()-_+=<>?";

  let passwort = "";
  for (let i = 0; i < laenge; i++) {
    const rand = Math.floor(Math.random() * zeichen.length);
    passwort += zeichen[rand];
  }

  document.getElementById("ausgabe").value = passwort;
}

function kopierePasswort() {
  const feld = document.getElementById("ausgabe");
  feld.select();
  feld.setSelectionRange(0, 999); // für mobile Geräte
  navigator.clipboard.writeText(feld.value);
  alert("Passwort kopiert!");
}
