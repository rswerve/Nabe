myApp.controller('detailController',  function($scope, detailFactory, sideFactory, $routeParams){

  //parse URL params into lat/lng format each method requires
  $scope.coords = [$routeParams.lat, $routeParams.lng]
  $scope.yelpCoords = "" + $routeParams.lat + ',' + $routeParams.lng
  $scope.instaCoords = $routeParams

  //need the tract info before making census calls
  //so subsequent calls must follow the promise being fulfilled
  $scope.getTract = function(instaCoords){
    detailFactory.tracts(instaCoords)
    .then(function(data){
      $scope.tractInfo = {
        state: data.data.STATE,
        county: data.data.COUNTY,
        tract: data.data.TRACT
         }
      $scope.householdIncome($scope.tractInfo)
      //census queries use the same server route with different variables
      //setTimeout is critical; otherwise the previous calls get clobbered
      //and all the calls return data for the same variable
      window.setTimeout(function(){
        $scope.medianAge($scope.tractInfo)
      }, 10)
      $scope.locale($scope.instaCoords)
      $scope.yelp($scope.yelpCoords)
      $scope.instagram($scope.instaCoords)
    })
  }

  $scope.locale = function(instaCoords){
    detailFactory.locale(instaCoords)
    .then(function(data){
      $scope.locale = data.data.address
    })
  }

  //add census variable to tractInfo object before making request
  $scope.householdIncome = function(tractInfo){
    tractInfo.censusVariable = "B19013_001E"
    detailFactory.censusQuery(tractInfo)
    .then(function(data){
      $scope.householdIncome = data.data[1][1]
    })
  }

  //add census variable to tractInfo object before making request
  $scope.medianAge = function(tractInfo){
    tractInfo.censusVariable = "B01002_001E"
    detailFactory.censusQuery(tractInfo)
    .then(function(data){
      $scope.medianAge = data.data[1][1]
    })
  }

  $scope.yelp = function(yelpCoords){
    detailFactory.yelp(yelpCoords)
    .then(function(data){
      $scope.yelpData = data.data.businesses
    })
  }

  $scope.instagram = function(instaCoords){
    detailFactory.instagram(instaCoords)
    .then(function(data){
      $scope.instagramData = data.data
    })
  }

  //kick everything off on view load
  $scope.getTract($scope.instaCoords)  

})
