var myApp = angular.module("myApp", ['ngRoute', 'ngAnimate'])

myApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: './HTML/side.html',
    controller: 'sideController'
  })

  .when('/detail/:lat/:lng', {
    templateUrl: './HTML/detail.html',
    controller: 'detailController'
  })
})
