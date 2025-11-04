// frontend/login.js (KORRIGIERT)

const API = "http://127.0.0.1:8000"; // Entfernt unnötiges Leerzeichen am Ende

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  const data = new URLSearchParams();
  data.append("username", email); 
  data.append("password", password);

  const response = await fetch(`${API}/token`, {
    method: "POST",
    body: data, 
  });

  const msg = document.getElementById("message");
  if (response.ok) {
    const json = await response.json();
    // 🎯 KORREKTUR 1: Speichert den korrekten JWT-Namen
    localStorage.setItem("access_token", json.access_token); 
    msg.innerText = "✅ Login erfolgreich. Weiter zum Dashboard.";
    // 🎯 KORREKTUR 2: Leitet zum Dashboard weiter
    setTimeout(()=> window.location.href = "dashboard.html", 800); 
  } else {
    const err = await response.json().catch(()=>({detail:"Login fehlgeschlagen"}));
    msg.innerText = "❌ " + (err.detail || "Fehler beim Login.");
  }
});