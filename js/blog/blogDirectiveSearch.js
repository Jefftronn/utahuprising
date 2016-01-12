angular.module('myApp')
.directive('blogDirectiveSearch', function () {


		return {
		templateUrl: '/js/blog/blogDirectiveSearch.html',
		scope: {
			title: '='
		},
		restrict: 'E',
		link: function ( scope, element, attributes ) {
			
		} 
	}



})