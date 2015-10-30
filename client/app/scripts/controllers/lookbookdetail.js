'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LookbookdetailCtrl
 * @description
 * # LookbookdetailCtrl
 * Controller of the clientApp
 */
angular.module('ImperfectApp')
.controller('LookbookdetailCtrl', ['$scope', '$routeParams','$http', function ($scope, $routeParams, $http) {
      
    var look;
    
    $scope.look = look = [];  
    var request = $http.get('/showAlook/'+$routeParams.id);

  	 request.success(function(data){
  	 		console.log('success detail'+ data);
            $scope.look = data;
          })
  	 .error(function(data, status){
           console.log('error detail'+ data);
           $scope.look = [];
        });  
  }]);
