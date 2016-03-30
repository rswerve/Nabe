var express = require("express")
var app = express()
var bodyParser = require('body-parser')
var request = require('superagent')
var config = require('./config.js')
var Instagram = require('instagram-node-lib')
// Instagram.set('client_id', process.env.client_id || '7cecbb01064343e98ea2136cf2c2d644')
// Instagram.set('client_secret', process.env.client_secret || '52430394bb464cc8ba544c0969c403db')
// Instagram.set('access_token', process.env.access_token || '3059592243.1677ed0.8af9ea23813542a79c4b6797658d1526')

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
      var tract_number = response.body.result.geographies['Census Tracts'][0].GEOID
      // console.log([lng, lat])
      console.log(response.body.result.geographies)
      // console.log('geographies ', response.body.result.geographies)
      res.end(tract_number)
    }
  })
})

// make a call to yelp
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
  console.log(req.query)
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
