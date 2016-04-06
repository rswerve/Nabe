myApp.controller('sideController', function($scope, sideFactory, detailFactory){
 
  // get id from checkbox and active/deactivate corresponding layer
  $scope.change = function(name){
    var layer = name.srcElement.id
    if (map.getLayoutProperty (layer, 'visibility') === 'none'){
    map.setLayoutProperty (layer, 'visibility', 'visible')
    } else {
    map.setLayoutProperty (layer, 'visibility', 'none')
    }
  }
    // activate the checkbox on back/refresh by checking the corresponding map layer
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
  // map.loaded and map.on('load') won't work.  use this workaround (could be any layer)
  if (map.getLayer('ba_percent')){
    $scope.checkCheckboxes()
  }
  
})