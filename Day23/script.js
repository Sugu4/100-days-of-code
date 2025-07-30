
const map = L.map("map").setView([20, 0], 2);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors',
}).addTo(map);

const markerListe = [];

map.on("click", function (e) {
  const { lat, lng } = e.latlng;
  const neuerMarker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`📌 Eigener Ort<br><small>${lat.toFixed(2)}, ${lng.toFixed(2)}</small>`)
    .openPopup();

  markerListe.push(neuerMarker);
});
