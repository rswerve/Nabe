myApp.controller('sideController', function($scope, sideFactory, detailFactory){
  $scope.id = 'side'
  $scope.setTract = function(tract){
    console.log('side set tract called ', tract)
    detailFactory.tract = tract.toString()
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