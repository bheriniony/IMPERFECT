'use strict';

/**
 * @ngdoc overview
 * @name ImperfectApp
 * @description
 * # ImperfectApp
 *
 * Main module of the application.
 */
angular
  .module('ImperfectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/lookbook/:id', {
        templateUrl: 'views/lookbookdetail.html',
        controller: 'LookbookdetailCtrl',
        controllerAs: 'lookBookDetail'
      })
      .when('/lookbook', {
        templateUrl: 'views/lookbook.html',
        controller: 'LookbookCtrl',
        controllerAs: 'lookbook'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
