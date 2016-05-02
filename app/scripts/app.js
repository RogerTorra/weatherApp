'use strict';

/**
 * @ngdoc overview
 * @name weatherAppApp
 * @description
 * # weatherAppApp
 *
 * Main module of the application.
 */
angular
  .module('weatherAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider,$translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
    $translateProvider.translations('es', {
        'clear sky': 'Dia solejat',
        'few clouds': 'Una mica nuvolat',
        'scattered clouds': 'Núvols dispersos',
    });
    $translateProvider.preferredLanguage('es');
  });
