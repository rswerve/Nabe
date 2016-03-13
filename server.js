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
app.get('/tracts', function(req, response){
  var url = (req.url).substr(8)
  request
  .get(url)
  .end(function(err, res){
    if (err){
      console.error(err)
    } else {
      var tract_number = res.body.result.geographies['Census Tracts'][0].GEOID
      console.log(res.body.result.geographies['Census Tracts'][0].GEOID)
  response.end(tract_number)
    }
  })
})

app.listen(3000, function(){
  console.log('Listening on 3000')
})
