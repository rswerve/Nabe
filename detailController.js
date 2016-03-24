myApp.controller('detailController',  function($scope, detailFactory, sideFactory, $routeParams){
  console.log($routeParams)
  $scope.id = 'detail'
  // $scope.setCoords = function(coords){
  //   detailFactory.coords.coordinates = coords
  // }
  $scope.testDetail = 'details wired up'
  $scope.fromFactory = sideFactory.test
  $scope.coords = [$routeParams.lat, $routeParams.lng]

  $scope.ire = function(coords){
    console.log('controller ire called')
    detailFactory.censusIre(coords)
    .then(function(data){
      $scope.placeData = data.objects[2].name
    })
  }

  $scope.yelp = function(){
    console.log('yelp controller called')
    detailFactory.yelp()
    .then(function(data){
      console.log('controller get yelp ', data.data.businesses)
      $scope.yelpData = data.data.businesses
    })
  }


  // $scope.getRequest = function(){
  //   detailFactory.getData()
  //   .then(function(data){
  //     $scope.dataGot = data.data.simple_shape.coordinates[0][0]
  //   })
  // }

  $scope.ire($scope.coords)
  $scope.yelp()
  // $scope.getRequest()
  // $scope.setCoords()
})

    // $scope.dataGot = d.value.data.simple_shape.coordinates
