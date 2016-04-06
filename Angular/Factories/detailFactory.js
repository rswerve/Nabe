myApp.factory('detailFactory', function($http, $q){
  var service = {}

  //get tract/county/state codes
  service.tracts = function(instaCoords){
    return $http({
      method: 'GET',
      url: '/tracts',
      params: instaCoords
    })
    .then(function(data){
      return data
    })
  }
  //get census data for chosen variable
  //variable added to tractInfo object by controller
  service.censusQuery = function(tractInfo){
    return $http({
      method: 'GET',
      url: '/census',
      params: tractInfo
    })
    .then(function(data){
      return data
    })
  }

  //openstreetmap locale data
  service.locale = function(instaCoords){
    return $http({
      method: 'GET',
      url: '/locale',
      params: instaCoords
    })
    .then(function(data){
      return data
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