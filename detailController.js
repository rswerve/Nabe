myApp.controller('detailController',  function($scope, detailFactory, sideFactory, $routeParams){
  console.log($routeParams)
  $scope.id = 'detail'
  $scope.setTract = function(tract){
    console.log('detail set tract called ', tract)
    detailFactory.tract = tract.toString()
  }
  $scope.tract = detailFactory.tract
  $scope.testDetail = 'details wired up'
  $scope.fromFactory = sideFactory.test
  $scope.coords = [$routeParams.lat, $routeParams.lng]

  $scope.ireName = function(coords){
    console.log('controller ire called')
    detailFactory.censusIre(coords)
    .then(function(data){
      $scope.placeName = data.objects[2].name
    })
  }

  $scope.ireData = function(tract){
    console.log('controller ireData called')
    detailFactory.censusIreData(tract)
    .then(function(data){
      $scope.placeData = data.data['2010']
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

  $scope.ireName($scope.coords)
  $scope.ireData($scope.tract)
  $scope.yelp()
  // $scope.getRequest()
  // $scope.setCoords()
})

    // $scope.dataGot = d.value.data.simple_shape.coordinates
