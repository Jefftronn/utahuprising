angular.module('myApp')
.controller('blogController', function($scope, blogService) {

  $scope.tester = blogService.test;

  $scope.blogs = blogService.getblogcontent();

  window.scrollTo(0, 0);

  // $scope.count = 0;

  // $scope.counter = function () {
  // 	console.log($scope.count++);
  // }

});

