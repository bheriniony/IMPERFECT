'use strict';

/**
 * @ngdoc function
 * @name ImperfectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ImperfectApp
 */
angular.module('ImperfectApp')
	.factory('Articles', ['$http', function($http){
          return $http.get('/getListArticles');
        }])
  .controller('MainCtrl', ['$scope', 'Articles', function ($scope, Articles) {

  	 Articles.success(function(data){
  	 		console.log('success'+ status);
            $scope.Articles = data;
            //$scope.photos = Articles.photos[];
          })
  	 .error(function(data, status){
           console.log('error'+ status);
            $scope.Articles = [];
        });
  

  }]);


