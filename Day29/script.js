// Navigation
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
  navToggle.setAttribute("aria-expanded", !expanded);
  navList.classList.toggle("show");
});

// Feature-Karten
const featureCards = document.querySelectorAll(".features article");
featureCards.forEach(card => {
  card.addEventListener("click", () => toggleFeature(card));
  card.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFeature(card);
    }
  });
});

function toggleFeature(card) {
  const targetId = card.dataset.target;
  const section = document.getElementById(targetId);
  const isVisible = !section.classList.contains("hidden");

  // Alle ausblenden
  document.querySelectorAll(".feature-section").forEach(s => s.classList.add("hidden"));
  featureCards.forEach(c => c.setAttribute("aria-pressed", "false"));

  // Sichtbar machen, falls vorher hidden
  if(!isVisible){
    section.classList.remove("hidden");
    card.setAttribute("aria-pressed", "true");
    section.scrollIntoView({behavior:"smooth"});
  }
}

// Fortschrittsbalken
function updateProgress() {
  const input = document.getElementById("progressInput");
  let val = parseInt(input.value) || 0;
  if(val > 60) val = 60;
  const percent = (val/60)*100;
  const bar = document.getElementById("bar");
  bar.style.width = percent + "%";
  const container = bar.parentElement;
  container.setAttribute("aria-valuenow", percent);
}
