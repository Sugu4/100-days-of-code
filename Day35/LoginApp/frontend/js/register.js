const API = "http://127.0.0.1:8000";

document.getElementById("regForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const f = new FormData(e.target);
  const body = {
    username: f.get("username"),
    email: f.get("email"),
    password: f.get("password"),
  };
  const res = await fetch(`${API}/register`, {
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(body)
  });
  const msg = document.getElementById("msg");
  if (res.ok) {
    msg.textContent = "✅ Registrierung erfolgreich. Weiter zum Login.";
  } else {
    const err = await res.json().catch(()=>({detail:"Fehler"}));
    msg.textContent = "❌ " + (err.detail || JSON.stringify(err));
  }
});
