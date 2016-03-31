myApp.factory('detailFactory', function($http, $q){
  var service = {}
  service.tract
  service.word = 'from the detail factory'



  service.censusIre = function(coords){
    return $q(function(resolve, reject){
      ire_census.do_with_contains_results(coords, function(data){
      resolve(data)
    })
  })
  }

  service.censusIreData = function(tract){
    return $q(function(resolve, reject){
      ire_census.do_with_sf1_data(tract, function(data){
      resolve(data)
    })
  })
  }

  service.yelp = function(yelpCoords){
    return $http({
      method: 'GET',
      url: '/yelp',
      params: {'coordinates': yelpCoords}
    })
    .then(function(data){
      return data
    })
  }

  service.instagram = function(instaCoords){
    return $http({
      method: 'GET',
      url: '/instagram',
      params: instaCoords
    })
    .then(function(data){
      return data
    })
  }

return service
})