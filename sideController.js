myApp.controller('sideController', function($scope, sideFactory){
  $scope.test = 'hello'
  $scope.change = function(name){
    var layer = name.srcElement.id
    if (map.getLayoutProperty (layer, 'visibility') === 'none'){
    map.setLayoutProperty (layer, 'visibility', 'visible')
    } else {
    map.setLayoutProperty (layer, 'visibility', 'none')
    }
  }
})