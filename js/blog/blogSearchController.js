angular.module('myApp')
.controller('blogSearchController', function($scope, blogService) {

	// $scope.count = 0;

 //  	$scope.counter = function() {
 //  		$scope.count++;
	// }

	$scope.orderOldest = function() {
  		$scope.toggleOrder = '+date';
  }

  $scope.orderNewest = function() {
  	$scope.toggleOrder = '-date';
  }

});
