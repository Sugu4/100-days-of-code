window.onload = function () {
  const gespeicherteNotiz = localStorage.getItem("meineNotiz");
  if (gespeicherteNotiz) {
    document.getElementById("notiz").value = gespeicherteNotiz;
  }

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
};

function speichern() {
  const text = document.getElementById("notiz").value;
  localStorage.setItem("meineNotiz", text);
  alert("✅ Notiz gespeichert!");
}

function loeschen() {
  localStorage.removeItem("meineNotiz");
  document.getElementById("notiz").value = "";
  alert("🗑️ Notiz gelöscht.");
}

function umschalten() {
  document.body.classList.toggle("dark");
  const istDunkel = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", istDunkel);
}