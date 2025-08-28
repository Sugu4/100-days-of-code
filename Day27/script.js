const API_KEY = "630f7905a801ad84597528eddde56c55";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const form = document.getElementById("searchForm");
const input = document.getElementById("cityInput");
const statusMsg = document.getElementById("status");
const card = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
const tempEl = document.getElementById("temp");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

// 1) Hilfsfunktion: Geocoding (gibt lat/lon + country)
async function getCoords(city) {
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`;
  const r = await fetch(geoUrl);
  if (!r.ok) throw new Error(`Geocoding Fehler ${r.status}`);
  const arr = await r.json();
  if (!arr.length) throw new Error('Geocoding: Stadt nicht gefunden (genauer Namen oder Land hinzufügen).');
  return arr[0]; // { name, lat, lon, country }
}

// 2) Fetch Wetter nach lat/lon (sicherer als nur q=city)
async function fetchWeatherByCoords(lat, lon) {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=de`;
  const r = await fetch(url);
  if (!r.ok) {
    const txt = await r.text().catch(() => r.statusText);
    throw new Error(`Wetter API Fehler ${r.status}: ${txt}`);
  }
  const data = await r.json();
  return data;
}

// 3) Rendern + Debug-Info
function render(data, loc) {
  // Debug-Log der kompletten Antwort (öffne Konsole)
  console.log('Weather API response:', data);

  // Datum/Zeit der Messung (data.dt ist Unix UTC, data.timezone ist Offset in Sekunden)
  const dt = data.dt || Math.floor(Date.now()/1000);
  const tz = data.timezone || 0;
  const local = new Date((dt + tz) * 1000);
  statusMsg.textContent = `Aktualisiert: ${local.toLocaleString()}`;

  cityName.textContent = `${loc?.name ?? data.name}, ${loc?.country ?? data.sys?.country ?? ''}`;
  const w = data.weather && data.weather[0];
  description.textContent = w ? w.description : '';
  weatherIcon.src = w ? `https://openweathermap.org/img/wn/${w.icon}@2x.png` : '';
  weatherIcon.alt = w ? w.description : '';

  tempEl.textContent = Math.round(data.main.temp);
  feelsLike.textContent = Math.round(data.main.feels_like);
  humidity.textContent = data.main.humidity;
  wind.textContent = (data.wind?.speed ?? 0).toFixed(1);

  card.classList.remove('hidden');
}

// 4) Haupt-Handler mit Debug-Logs
form.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const city = input.value.trim();
  if (!city) return;
  statusMsg.textContent = '⏳ Lade Wetterdaten…';
  card.classList.add('hidden');

  try {
    // Geocoding zuerst (verhindert falsche Stadt)
    const loc = await getCoords(city);
    console.log('Geocoding Ergebnis:', loc);

    const data = await fetchWeatherByCoords(loc.lat, loc.lon);
    render(data, loc);
    localStorage.setItem('lastCity', city);
  } catch (err) {
    console.error('Fehler:', err);
    statusMsg.textContent = '⚠️ ' + err.message;
  }
});

// Auto-laden der letzten Suche
window.addEventListener('load', () => {
  const last = localStorage.getItem('lastCity');
  if (last) {
    input.value = last;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  }
});
