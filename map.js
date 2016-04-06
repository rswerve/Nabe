mapboxgl.accessToken = 'pk.eyJ1IjoiYXRpZ2hpIiwiYSI6ImNpbG43OTRlcjAyZ2l1aG0xdnIxZGliczcifQ.xGmAblnDZCyuNOpFLWfT9Q';
var map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/atighi/cimdr73pj00hq9qkp54pn1kgc', 
    center: [-89.75, 40.04], 
    zoom: 6 

});
var tooltip
map.addControl(new mapboxgl.Navigation({position: 'bottom-left'})); // default position = top-right

//get lat/lng from click and send those coordinates to controller as url params
//has benefit of being able to save url and go directly to tract (next version)
map.on('click', function(data) {
  var lng = data.lngLat.lng
  var lat = data.lngLat.lat
  var detailUrl = '/#/detail/' + lat + '/' + lng

  //if the map is hinged open, hinge it closed on click
  //if it's closed, create a tooltip at the click point
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
});

//if the 'details' link is clicked in the tooltip, remove the tooltip and hinge the map open
$('#map').on('click', '#popDetail', function() {
    $(".mapboxgl-canvas").toggleClass('active')
    $("#outside").toggleClass('active')
    $(".mapboxgl-ctrl-bottom-right").toggleClass('active')
    tooltip.remove()
});

