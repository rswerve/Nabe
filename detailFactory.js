myApp.factory('detailFactory', function($http, $q){
  var service = {}
  // service.coords
  service.word = 'from the detail factory'
  service.getData = function(){
    return $http({
      method: 'GET',
      url: '/testdata'
    })
    .then(function(data){
      return data
    })
  }

  service.censusIre = function(coords){
    return $q(function(resolve, reject){
      ire_census.do_with_contains_results(coords, function(data){
      console.log('factory ire ', data)
      resolve(data)
    })
  })
  }


  // service.yelp = function(yelpCoords)


return service
})