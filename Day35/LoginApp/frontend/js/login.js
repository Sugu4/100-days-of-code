const API = "http://127.0.0.1:8000";

document.getElementById("loginForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const f = new FormData(e.target);
  const data = new URLSearchParams();
  data.append("username", f.get("username"));
  data.append("password", f.get("password"));

  const res = await fetch(`${API}/token`, {
    method:"POST",
    body: data,
  });
  const msg = document.getElementById("msg");
  if (res.ok) {
    const json = await res.json();
    localStorage.setItem("access_token", json.access_token);
    msg.textContent = "✅ Login erfolgreich.";
    setTimeout(()=> location.href = "index.html", 800);
  } else {
    const err = await res.json().catch(()=>({detail:"Login fehlgeschlagen"}));
    msg.textContent = "❌ " + (err.detail || JSON.stringify(err));
  }
});
