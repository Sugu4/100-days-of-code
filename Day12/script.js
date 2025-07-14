function prüfeAntwort(antwort) {
  const feedback = document.getElementById("feedback");

  if (antwort === "JavaScript") {
    feedback.innerText = "✅ Richtig!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "❌ Leider falsch.";
    feedback.style.color = "red";
  }
}
