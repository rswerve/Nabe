
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
  map.style._layers["acs2014-5yr-b15003-14000us170318"].layout.visibility = "none"
  console.log('zoom ', map.style.z)
  console.log(map)
  var lngLat = {lng: data.lngLat.lng, lat:data.lngLat.lat}
  $.ajax({
    url: '/tracts',
    type: 'GET',
    data: lngLat,
    dataType: 'json',
    success: function(response){
      console.log('jquery response ', response)
    }
  })
});

map.on('dblclick', function(e){
  console.log('e ', e)
  console.log('doubleclick ', map)
  map.setLayoutProperty ("acs2014-5yr-b15003-14000us170318", 'visibility', 'none')
})
