'use strict';

angular.module('testProjectApp', [
  'testProjectApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile.html'
      });

    $locationProvider.html5Mode(true);
  });
