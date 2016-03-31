myApp.controller('sideController', function($scope, sideFactory, detailFactory){
  $scope.setTract = function(tract){
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

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
  }
})