myApp.controller('sideController', function($scope, sideFactory, detailFactory){
  $scope.setTract = function(tract){
    detailFactory.tract = tract.toString()
  }
  // $scope.ba_percent = false
  // $scope.checkTruth = function(){
  //   if ($scope.ba_percent === true){
  //     map.setLayoutProperty ('ba_percent', 'visibility', 'visible')
  //   }
  // }
  // $scope.factWord = detailFactory.word
  $scope.change = function(name){
    var layer = name.srcElement.id
    if (map.getLayoutProperty (layer, 'visibility') === 'none'){
    map.setLayoutProperty (layer, 'visibility', 'visible')
    } else {
    map.setLayoutProperty (layer, 'visibility', 'none')
    }
  }

    $scope.checkCheckboxes = function(){
    if (map.getLayoutProperty ('ba_percent', 'visibility') === 'visible'){
      $scope.ba_percent = true
    }
    if (map.getLayoutProperty ('ma_percent', 'visibility') === 'visible'){
      $scope.ma_percent = true
    }
    if (map.getLayoutProperty ('walk_or_bike_25', 'visibility') === 'visible'){
      $scope.walk_or_bike_25 = true
    }
    if (map.getLayoutProperty ('rural_400', 'visibility') === 'visible'){
      $scope.rural_400 = true
    }
    if (map.getLayoutProperty ('single_45', 'visibility') === 'visible'){
      $scope.single_45 = true
    }
  }

  if (map.getLayer('ba_percent')){
    $scope.checkCheckboxes()
  }
  

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
  }
})