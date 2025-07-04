function zeigeBegruessung() {
  const name = document.getElementById("nameInput").value;
  const ausgabe = document.getElementById("ausgabeText");

  if (name.trim() === "") {
    ausgabe.innerText = "❗ Bitte gib deinen Namen ein.";
  } else {
    ausgabe.innerText = `👋 Hallo, ${name}! Willkommen auf meiner Seite.`;
  }
}
