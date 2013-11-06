var map;

function showMap(lat, lng) {
  console.log("Drawing map of " + lat + ", " + lng);

  var map_options = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }
  map = new google.maps.Map($('#map-canvas')[0], map_options);
}

$(document).ready(function(){
  showMap(51.511213, -0.1198244);
});