var express = require("express")
var app = express()
var bodyParser = require('body-parser')
var request = require('superagent')
var config = require('./config.js')
var Instagram = require('instagram-node-lib')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = process.env.PORT || 3000

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
      console.log(response.body.result.geographies)
      var tract_number = response.body.result.geographies['Census Tracts'][0].GEOID
      res.end(tract_number)
    }
  })
})


app.get('/yelp', function(req, res){
 var ll = req.query.coordinates
 config.yelp.search({ term: 'food', ll: ll })
  .then(function (data) {
    res.send(data)
    res.end()
  })
  .catch(function (err) {
    console.error(err);
  })
})

app.get('/instagram', function(req, res){
  Instagram.media.search({
    lat: req.query.lat,
    lng: req.query.lng,
    complete: function(data){
    res.send(data)
    res.end()
    }
  })
})


app.listen(port, function(){
  console.log('Listening on ' + port)
})
