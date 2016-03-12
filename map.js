// var request = require('superagent')

var request = window.superagent //http request library
mapboxgl.accessToken = 'pk.eyJ1IjoiYXRpZ2hpIiwiYSI6ImNpbG43OTRlcjAyZ2l1aG0xdnIxZGliczcifQ.xGmAblnDZCyuNOpFLWfT9Q';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/atighi/cilocmidf000s9mkmkmiyqc6v', //stylesheet location
    center: [-88.89, 41.7], // starting position
    zoom: 7 // starting zoom
});

map.addControl(new mapboxgl.Navigation({position: 'bottom-left'})); // no position = top-right

map.on('click', function(data) {
  console.log('clicked, data ', data)
  var lng = data.lngLat.lng
  var lat = data.lngLat.lat
  var url = 'http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x' + lng + '&y=' + lat + '41.7&benchmark=4&vintage=4&format=json'
  request
  .get(url)
  .set('Content-Length', "contentLength")
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .end(function(err, res){
    if (err){
      console.error(err)
    } else {
      console.log(res.body)
    }
  })
});