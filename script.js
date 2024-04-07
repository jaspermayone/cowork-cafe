// config map
let config = {
  minZoom: 3,
  // maxZoom: 18,

};
// magnification with which the map will start
const zoom = 5;
// co-ordinates
const lat = 40.713830752389896;
const lng = -98.18415927140622;

var cafeDarkIcon = L.icon({
  iconUrl: './cafe-black.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize: [20, 20], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([44.168530, -72.865840], { icon: cafeDarkIcon }).addTo(map);