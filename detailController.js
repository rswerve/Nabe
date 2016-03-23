myApp.controller('detailController',  function($scope, detailFactory){
  $scope.testDetail = 'details wired up'
  $scope.fromFactory = detailFactory.word
  $scope.getRequest = function(){
    // detailFactory.getData()
    detailFactory.getData()
    .then(function(data){
      $scope.dataGot = data.data.simple_shape.coordinates[0][0]
    })
    
    // console.log('getting')
    // console.log(detailFactory.word)
    // console.log('function returns ', detailFactory.getData())
    // return detailFactory.getData()

  }
  $scope.getRequest()
})

    // $scope.dataGot = d.value.data.simple_shape.coordinates
