'use strict';

angular.module('allegroApp', ['webStorageModule'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/zad1', {
        templateUrl: 'views/zad1.html',
        controller: 'MainCtrl'
      })
      .when('/zad2', {
        templateUrl: 'views/zad2.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
