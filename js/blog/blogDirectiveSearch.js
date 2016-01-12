angular.module('myApp')
.directive('blogDirectiveSearch', function () {


		return {
		templateUrl: '/js/blog/blogDirectiveSearch.html',
		scope: {
			title: '=',
			toggleOrder: '='
		},
		restrict: 'E',
		link: function ( scope, element, attributes ) {
			
		}, 
		controller: 'blogSearchController'
	}



})