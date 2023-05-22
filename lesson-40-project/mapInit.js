// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 48.93648818392684, lng: 24.730527180010263 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "MAP_ID",
  });

  // The marker, positioned at Uluru
  new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });

  new AdvancedMarkerElement({
    map: map,
    position: { lat: 48.932823234517286, lng: 24.71361853606686 },
    title: "Uluru",
  });
}

initMap();
