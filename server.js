var express = require("express")
var app = express()
var request = require('superagent')


app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
});

app.use(express.static(__dirname+'/'))

app.get('/', function(req, res){
  res.sendFile(__dirname+'index.html')
})

app.listen(3000, function(){
  console.log('Listening on 3000')
})
var lng = 88
var lat = 47

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