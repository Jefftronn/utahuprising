angular.module('myApp')
.controller('blogController', function($scope, blogService) {

	$scope.blogSort = '-date';

  $scope.tester = blogService.test;

  $scope.blogs = blogService.getblogcontent();

  window.scrollTo(0, 0);

  // $scope.orderOldest = function() {
  // 	$scope.blogs = ['date'];
  // }
  

});

