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

// receive lat/lng from click handler and send to census for tract/county/state codes
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
      var tract_info = response.body.result.geographies['Census Tracts'][0]
      res.send(tract_info)
      res.end
    }
  })
})

// query the census for the given tract with whatever variable is passed in
app.get('/census', function(req, res){
  var state = req.query.state
  var county = req.query.county
  var tract = req.query.tract
  var variable = req.query.censusVariable
  var url = 'http://api.census.gov/data/2014/acs5?get=NAME,' + variable + '&for=tract:' + tract + '&in=state:' + state + '+county:' + county + '&key=' + config.censusKey
  request
  .get(url)
  .end(function(err, response){
    if (err){
      console.error(err)
    } else {
      res.send(response.body)
      res.end()
    }
  })
})

//get place name and zip from openstreetmap
app.get('/locale', function(req, res){
  var lat = req.query.lat
  var lon = req.query.lng
  var url = 'http://nominatim.openstreetmap.org/reverse?lat=' + lat + '&lon=' + lon + '&format=json'
  request
  .get(url)
  .end(function(err, response){
    if (err){
      console.error(err)
    } else {
      res.send(response.body)
      res.end()
    }
  })
})

//query yelp for local food options
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

//query instagram for latest photos at location
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
