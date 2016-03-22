var myApp = angular.module("myApp", ['ngRoute'])

myApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'side.html',
    controller: 'sideController'
  })
})

// myApp.controller('sidesController', function($scope, sideFactory){
//   $scope.test = 'hello'

// })