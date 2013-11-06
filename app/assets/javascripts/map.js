var map;

function showMap(lat, lng) {
  console.log("Drawing map of " + lat + ", " + lng);
  var map_options = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }
  map = new google.maps.Map($('#map-canvas')[0], map_options);
  //declare timer
  var timer;

  google.maps.event.addListener(map, "center_changed", function() {
    //reset timer every time we move
    clearTimeout(timer);
    timer = setTimeout(function(){
      var msg = "New Center=>" + map.getCenter().lat()+ ", " + map.getCenter().lng();
      console.log(msg);
      //if we don't move for 2000 fire an ajax request
      $.ajax({
        url: '/crimes/stats',
        data: {
          lat: map.getCenter().lat(),
          lng: map.getCenter().lng()
        },
        success: function(json) {
          _(json).each(function(c) {
            var myLatlng = new google.maps.LatLng(c.location.latitude,c.location.longitude)
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title:"Hello World!"
            });
          });
        drawChart(json);
        }
      });
    }, 2000);
  });
}
$(document).ready(function(){
  showMap(51.4955481, -0.0881087);
});