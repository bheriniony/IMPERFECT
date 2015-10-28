'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LookbookdetailCtrl
 * @description
 * # LookbookdetailCtrl
 * Controller of the clientApp
 */
angular.module('ImperfectApp')
  .factory('LookBook', ['$http','$routeParams', function($http, $routeParams){
          console.log("id in the controller "+$routeParams.id);
            var request = $http.get('/showAlook/'+$routeParams.id);
            return request;
        }])
.controller('LookbookdetailCtrl', ['$scope', '$routeParams','LookBook', function ($scope, $routeParams, LookBook) {
      
  	 LookBook.success(function(data){
  	 		console.log('success detail'+ data);
            $scope.LookBook = data;
          })
  	 .error(function(data, status){
           console.log('error detail'+ data);
           $scope.LookBook = [];
        });  
  }]);
