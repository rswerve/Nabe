var myApp = angular.module("myApp", ['ngRoute'])

myApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateURL: 'side.html',
    controller: 'sideController'
  })
})