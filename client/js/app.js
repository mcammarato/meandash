var app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
  //Setup Routes
  $routeProvider
    .when('/', {
      templateUrl: '/dash.html'
    })

  $routeProvider
    .when('/301', {
      templateUrl: '/301.html'
    })

  $routeProvider
    .when('/travel', {
      templateUrl: '/travel.html'
    })

  $routeProvider
    .when('/form', {
      templateUrl: '/form.html'
    })

  $routeProvider
    .when('/form1', {
      templateUrl: '/form1.html'
    }) 
});