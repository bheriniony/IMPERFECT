'use strict';

/**
 * @ngdoc function
 * @name ImperfectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ImperfectApp
 */
angular.module('ImperfectApp')
	.factory('LookBooks', ['$http', function($http){
          return $http.get('/loadBook');
        }])
  .controller('MainCtrl', ['$scope', 'LookBooks', function ($scope, LookBooks) {

  	 LookBooks.success(function(data){
  	 		console.log('success'+ status);
            $scope.LookBooks = data;
          })
  	 .error(function(data, status){
           console.log('error'+ status);
            $scope.LookBooks = [];
        });  
  }]);
