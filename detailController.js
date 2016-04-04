myApp.controller('detailController',  function($scope, detailFactory, sideFactory, $routeParams){
  // console.log('routeparams ', $routeParams)

  $scope.coords = [$routeParams.lat, $routeParams.lng]
  $scope.yelpCoords = "" + $routeParams.lat + ',' + $routeParams.lng
  $scope.instaCoords = $routeParams


  $scope.getTract = function(instaCoords){
    detailFactory.tracts(instaCoords)
    .then(function(data){
      $scope.tractInfo = {
        state: data.data.STATE,
        county: data.data.COUNTY,
        tract: data.data.TRACT
         }
      $scope.householdIncome($scope.tractInfo)
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
      // console.log($scope.locale)
    })
  }

  $scope.householdIncome = function(tractInfo){
    tractInfo.censusVariable = "B19013_001E"
    detailFactory.censusQuery(tractInfo)
    .then(function(data){
      $scope.householdIncome = data.data[1][1]
    })
  }

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

  $scope.getTract($scope.instaCoords)

  // $scope.logout = function() {
  //   auth.signout();
  //   store.remove('profile');
  //   store.remove('token');
  // }
  

})
