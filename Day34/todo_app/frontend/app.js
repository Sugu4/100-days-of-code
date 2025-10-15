// frontend/app.js
// API-URL des FastAPI-Servers
const API = "http://127.0.0.1:8000";

async function fetchTasks() {
  const res = await fetch(`${API}/tasks`);
  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.className = "task-item";

    const contentDiv = document.createElement("div");
    contentDiv.className = "task-content";
    
    const titleSpan = document.createElement("span");
    titleSpan.textContent = `${t.id}. ${t.title} ${t.completed ? "✅" : "❌"}`;
    contentDiv.appendChild(titleSpan);

    if (t.description && t.description.trim()) {
        const descP = document.createElement("p");
        descP.className = "task-description";
        descP.textContent = t.description;
        contentDiv.appendChild(descP);
    }
    
    li.appendChild(contentDiv);

    contentDiv.addEventListener("click", async () => {
      await fetch(`${API}/tasks/${t.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ completed: !t.completed })
      });
      fetchTasks();
    });

    const del = document.createElement("button");
    del.textContent = "Löschen";
    del.addEventListener("click", async (e) => {
      e.stopPropagation();
      await fetch(`${API}/tasks/${t.id}`, { method: "DELETE" });
      fetchTasks();
    });
    li.appendChild(del);

    list.appendChild(li);
  });
}

document.getElementById("addBtn").addEventListener("click", async () => {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim(); 
  
  if (!title) return alert("Bitte Titel eingeben");
  
  await fetch(`${API}/tasks`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ 
      title: title, 
      description: description || null
    })
  });
  
  document.getElementById("title").value = "";
  document.getElementById("description").value = ""; 
  
  fetchTasks();
});

fetchTasks();