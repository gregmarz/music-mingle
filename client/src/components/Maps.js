
function initMap() {
var mapApiKey = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'
let map;
  map = new google.maps.Map(document.getElementById("mapDiv"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 12,
  });
  console.log('test map')
}

window.initMap = initMap;

export default initMap