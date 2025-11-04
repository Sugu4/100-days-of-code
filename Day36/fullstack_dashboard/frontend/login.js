// frontend/login.js (Korrekt für OAuth2PasswordRequestForm)

const API = "http://127.0.0.1:8000";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  const data = new URLSearchParams();
  // Wichtig: Der /token-Endpunkt erwartet "username" (für Email/Username) und "password"
  data.append("username", email); 
  data.append("password", password);

  const response = await fetch(`${API}/token`, {
    method: "POST",
    // Content-Type MUSS NICHT gesetzt werden, da body ein URLSearchParams-Objekt ist
    body: data, 
  });

  const msg = document.getElementById("message");
  if (response.ok) {
    const json = await response.json();
    // WICHTIG: Token wird unter 'access_token' im localStorage gespeichert
    localStorage.setItem("access_token", json.access_token); 
    msg.innerText = "✅ Login erfolgreich. Weiter zum Dashboard.";
    setTimeout(()=> window.location.href = "dashboard.html", 800);
  } else {
    const err = await response.json().catch(()=>({detail:"Login fehlgeschlagen"}));
    msg.innerText = "❌ " + (err.detail || "Fehler beim Login.");
  }
});