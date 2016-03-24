var config = require('./config.js')

config.yelp.search({ term: 'food', ll: '37.77493,-122.419415' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});