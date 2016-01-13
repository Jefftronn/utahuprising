angular.module('myApp')
.controller('blogController', function($scope, blogService, $firebaseArray) {

	$scope.blogSort = '-date';

  $scope.tester = blogService.test;

  $scope.blogs = blogService.getblogcontent();

  window.scrollTo(0, 0);

  // $scope.orderOldest = function() {
  // 	$scope.blogs = ['date'];
  // }
  
  var ref = new Firebase("https://utahuprisingpaintball.firebaseio.com/");

  $scope.allTheEmails = $firebaseArray(ref);

  $scope.addEmails = function(user) {
  	$scope.allTheEmails.$add(user);
  	alert('Thanks for signing up! You will recieve up to date news and events!')
  }

});

