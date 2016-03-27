myApp.controller('detailController',  function($scope, detailFactory, sideFactory, $routeParams){
  console.log($routeParams)
  $scope.setTract = function(tract){
    // console.log('detail set tract called ', tract)
    detailFactory.tract = tract.toString()
  }

  $scope.tract = detailFactory.tract
  $scope.coords = [$routeParams.lat, $routeParams.lng]
  $scope.yelpCoords = "" + $routeParams.lat + ',' + $routeParams.lng
  $scope.instaCoords = $routeParams
  // $scope.testDetail = 'details wired up'
  // $scope.fromFactory = sideFactory.test


  $scope.ireName = function(coords){
    // console.log('controller ire called')
    detailFactory.censusIre(coords)
    .then(function(data){
      $scope.placeName = data.objects[2].name
    })
  }

  $scope.ireData = function(tract){
    // console.log('controller ireData called')
    detailFactory.censusIreData(tract)
    .then(function(data){
      $scope.placeData = data.data['2010']
    })
  }  

  $scope.yelp = function(yelpCoords){
    // console.log('yelp controller called')
    detailFactory.yelp(yelpCoords)
    .then(function(data){
      // console.log('controller get yelp ', data.data.businesses)
      $scope.yelpData = data.data.businesses
    })
  }

  $scope.instagram = function(instaCoords){
    detailFactory.instagram(instaCoords)
    .then(function(data){
      console.log('instagram data ', data.data)
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
