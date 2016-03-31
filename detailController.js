myApp.controller('detailController',  function($scope, detailFactory, sideFactory, $routeParams){
  $scope.setTract = function(tract){
    detailFactory.tract = tract.toString()
  }

  $scope.tract = detailFactory.tract
  $scope.coords = [$routeParams.lat, $routeParams.lng]
  $scope.yelpCoords = "" + $routeParams.lat + ',' + $routeParams.lng
  $scope.instaCoords = $routeParams


  $scope.ireName = function(coords){
    detailFactory.censusIre(coords)
    .then(function(data){
      $scope.placeName = data.objects[2].name
      $scope.tractNumber = data.objects[4].name
    })
  }

  $scope.ireData = function(tract){
    detailFactory.censusIreData(tract)
    .then(function(data){
      $scope.placeData = data.data['2010']
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

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
  }


  $scope.ireName($scope.coords)
  $scope.ireData($scope.tract)
  $scope.yelp($scope.yelpCoords)
  $scope.instagram($scope.instaCoords)

})
