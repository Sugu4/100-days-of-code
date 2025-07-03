function zeigeFeuerwerk() {
  const fw = document.getElementById("firework");
  fw.classList.add("active");

  // Reset nach 1 Sekunde, damit Animation erneut funktioniert
  setTimeout(() => {
    fw.classList.remove("active");
  }, 1000);
}
