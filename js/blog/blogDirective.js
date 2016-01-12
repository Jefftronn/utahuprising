angular.module('myApp')
.directive('blogDirective', function() {


	return {
		templateUrl: '/js/blog/blogDirectiveTemplate.html',
		scope: {
			blogs: '=insideBlogs',
			blogFilter: '='
		},
		restrict: 'E',
		link: function ( scope, element, attributes ) {

		} 
	}



});