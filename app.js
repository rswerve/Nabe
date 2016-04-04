var myApp = angular.module("myApp", ['ngRoute', 'ngAnimate', 'auth0', 'angular-storage', 'angular-jwt'])

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

myApp.config(function(authProvider){
  authProvider.init({
    domain: 'app48837577.auth0.com',
    clientID: 'ndO9Maaeuw5gtTboVghIMitLRY1cr4Eh'
  })
})
.run(function(auth) {
  // This hooks all auth events to check everything as soon as the app starts
  auth.hookEvents();
});

