mapboxgl.accessToken = 'pk.eyJ1IjoiYXRpZ2hpIiwiYSI6ImNpbG43OTRlcjAyZ2l1aG0xdnIxZGliczcifQ.xGmAblnDZCyuNOpFLWfT9Q';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/atighi/cimdr73pj00hq9qkp54pn1kgc', //stylesheet location
    center: [-89.75, 40.04], // starting position
    zoom: 6 // starting zoom

});
var tooltip
map.addControl(new mapboxgl.Navigation({position: 'bottom-left'})); // no position = top-right
//get lat/lng from click and send those coordinates to tracts route in server.js
map.on('click', function(data) {

  // var lngLat = {lng: data.lngLat.lng, lat:data.lngLat.lat}
  // var ireCoords = [data.lngLat.lat, data.lngLat.lng]
  var lng = data.lngLat.lng
  var lat = data.lngLat.lat
  var detailUrl = '/#/detail/' + lat + '/' + lng

  if ($(".mapboxgl-canvas").hasClass('active')){
    $(".mapboxgl-canvas").toggleClass('active')
    $("#outside").toggleClass('active')
    $(".mapboxgl-ctrl-bottom-right").toggleClass('active')
  } else {
    tooltip = new mapboxgl.Popup(data)
    .setLngLat(data.lngLat)
    .setHTML("<div id='popDetail'><a href='"+ detailUrl +"'>Details</a></div>")
    .addTo(map);
  }

  // $.ajax({
  //   url: '/tracts',
  //   type: 'GET',
  //   data: lngLat,
  //   dataType: 'json',
  //   success: function(response){
  //     angular.element(document.getElementById('outside')).scope().$$childHead.setTract(response)
  //   }
  // })

});

$('#map').on('click', '#popDetail', function() {
    $(".mapboxgl-canvas").toggleClass('active')
    $("#outside").toggleClass('active')
    $(".mapboxgl-ctrl-bottom-right").toggleClass('active')
    tooltip.remove()
});

// if ($('#testbox').is(':checked')){
  $('#testbox').css('color', 'blue')
// }

