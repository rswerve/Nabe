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

    $scope.checkCheckboxes = function(){
      console.log('I should come after is loaded')
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

  if (map.loaded) {
    console.log('is loaded')
    console.log('property ', (map.getLayoutProperty ('ba_percent', 'visibility')))
    $scope.checkCheckboxes()
  }

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
  }
})