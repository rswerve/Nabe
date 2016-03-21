var express = require("express")
var app = express()
var bodyParser = require('body-parser')
var request = require('superagent')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname+'/'))

app.get('/', function(req, res){
  res.sendFile(__dirname+'index.html')
})

// receive lat/lng from click handler and send to census for tract ID
app.get('/tracts', function(req, res){
  var lng = req.query.lng
  var lat = req.query.lat
  var url = 'http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x=' + lng + '&y=' + lat + '&benchmark=4&vintage=4&format=json'
  request
  .get(url)
  .end(function(err, response){
    if (err){
      console.error(err)
    } else {
      var tract_number = response.body.result.geographies['Census Tracts'][0].GEOID
      console.log([lng, lat])
      console.log(response.body.result.geographies['Census Tracts'][0].GEOID)
res.end(tract_number)
    }
  })
})

app.listen(3000, function(){
  console.log('Listening on 3000')
})
