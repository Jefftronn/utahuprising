angular.module('myApp')
.controller('blogController', function($scope, blogService) {

  $scope.tester = blogService.test;

  $scope.blogs = blogService.getblogcontent();

  window.scrollTo(0, 0);

});
