var myApp = angular.module("myApp", ['ngRoute', 'myApp.sideController', 'myApp.sideFactory'])

myApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateURL: 'side.html',
    controller: 'sideController'
  })
})