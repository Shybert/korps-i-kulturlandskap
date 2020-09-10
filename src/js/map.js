function createMap(latitude, longitude, zoomLevel) {
  const map = L.map("map").setView([latitude, longitude], zoomLevel);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
      id: "shybert/ckef8pc4f1n4b19s0o0dy816u",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1Ijoic2h5YmVydCIsImEiOiJja2VjZWp0M3AwaTBhMnNsZTB5dWhjb2V0In0.FMpbQ94ZHOpSvn6ZAfHjhQ",
    }
  ).addTo(map);
  return map;
}

function addMapMarker(map, latitude, longitude, text, options) {
  L.marker([latitude, longitude]).bindTooltip(text, options).addTo(map);
  return map;
}
