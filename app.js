var myApp = angular.module("myApp", ['ngRoute'])

myApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'side.html',
    controller: 'sideController'
  })

  .when('/detail/:lat/:lng', {
    templateUrl: 'detail.html',
    controller: 'detailController'
  })
})
