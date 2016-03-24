myApp.controller('sideController', function($scope, sideFactory, detailFactory){
  $scope.id = 'side'
  $scope.setCoords = function(coords){
    detailFactory.coords = coords
  }
  $scope.factWord = detailFactory.word
  $scope.change = function(name){
    var layer = name.srcElement.id
    if (map.getLayoutProperty (layer, 'visibility') === 'none'){
    map.setLayoutProperty (layer, 'visibility', 'visible')
    } else {
    map.setLayoutProperty (layer, 'visibility', 'none')
    }
  }
})