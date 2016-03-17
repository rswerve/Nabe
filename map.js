
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
  map.featuresAt([data.point.x, data.point.y], { radius: 10 }, function(err, features) {
  // console.log('features ', features);
  });
  // console.log('zoom ', map.style.z)
  // console.log(map)
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

// map.on('move', function(e){
//   // console.log('e ', e)
//   // console.log('move ', map)
//   map.setLayoutProperty ("acs2014-5yr-b15003-14000us170318", 'visibility', 'none')
// })

map.on('zoomend', function(data){
  if (map.style.z > 8){
    map.featuresIn({}, function(err, features){
      if (err){
        console.error(err)
      } else {
        for (var i = 0; i < features.length; i++){
          // if (features[i].layer.id === "acs2014-5yr-b15003-14000us170318" && 
          //     features[i].properties.B15003022 !== 1688420 &&
          //     features[i].properties.B15003022 > 300) {
            // map.setFilter("acs2014-5yr-b15003-14000us170318", ["!=", "name", "Illinois"])
            map.setFilter("acs2014-5yr-b15003-14000us170318", ["in", "B15003022, Error", 0, 100])
            map.setPaintProperty("acs2014-5yr-b15003-14000us170318", 'fill-color', '#df8888')
          // }
        }
        // console.log('zoomend features ', features)
      }
    })
  }
})
