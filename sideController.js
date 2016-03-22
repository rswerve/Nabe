myApp.controller('sideController', function($scope, sideFactory){
  $scope.test = 'hello'
  $scope.change = function(){
    console.log(map.getCenter())
  }
})