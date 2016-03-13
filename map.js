
mapboxgl.accessToken = 'pk.eyJ1IjoiYXRpZ2hpIiwiYSI6ImNpbG43OTRlcjAyZ2l1aG0xdnIxZGliczcifQ.xGmAblnDZCyuNOpFLWfT9Q';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/atighi/cilocmidf000s9mkmkmiyqc6v', //stylesheet location
    center: [-88.89, 41.7], // starting position
    zoom: 7 // starting zoom
});

map.addControl(new mapboxgl.Navigation({position: 'bottom-left'})); // no position = top-right

//get lat/lng from click and send those coordinates to tracts route in server.js
map.on('click', function(data) {
  var lng = data.lngLat.lng
  var lat = data.lngLat.lat
  var url = 'http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x=' + lng + '&y=' + lat + '&benchmark=4&vintage=4&format=json'
  $.ajax({
    url: '/tracts',
    type: 'GET',
    data: url,
    dataType: 'json',
    success: function(response){
      console.log('jquery response ', response)
    }
  })
});