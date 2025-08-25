const input = document.getElementById("aufgabeInput");
const liste = document.getElementById("todoListe");

// gespeicherte Aufgaben laden
let aufgaben = JSON.parse(localStorage.getItem("aufgaben")) || [];
renderListe();

function aufgabeHinzufuegen() {
  const text = input.value.trim();
  if (text === "") return;

  aufgaben.push({ text: text, erledigt: false });
  speichern();
  renderListe();
  input.value = "";
}

function aufgabeToggle(index) {
  aufgaben[index].erledigt = !aufgaben[index].erledigt;
  speichern();
  renderListe();
}

function aufgabeLoeschen(index) {
  aufgaben.splice(index, 1);
  speichern();
  renderListe();
}

function speichern() {
  localStorage.setItem("aufgaben", JSON.stringify(aufgaben));
}

function renderListe() {
  liste.innerHTML = "";
  aufgaben.forEach((aufgabe, index) => {
    const li = document.createElement("li");
    li.className = aufgabe.erledigt ? "erledigt" : "";

    li.innerHTML = `
      <span onclick="aufgabeToggle(${index})">${aufgabe.text}</span>
      <button class="loeschen" onclick="aufgabeLoeschen(${index})">❌</button>
    `;

    liste.appendChild(li);
  });
}
