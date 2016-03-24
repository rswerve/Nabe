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

  service.yelp = function(){
    console.log('yelp factory called')
    return $http({
      method: 'GET',
      url: '/yelp'
    })
    .then(function(data){
      console.log('factory yelp ', data)
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





return service
})