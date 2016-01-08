angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('Home', {
      url: '/home',
      templateUrl: 'js/home/home.html',
      controller: 'homeController'
    })

    .state('Contact', {
      url: '/contact',
      templateUrl: 'js/contact/contact.html'

    })

    .state('Events', {
      url: '/events',
      templateUrl: 'js/events/events.html',
      controller: 'eventsController'
    })

    .state('Blog', {
      url: '/blog',
      templateUrl: 'js/blog/blog.html',
      controller: 'blogController'
    })

    .state('Roster', {
      url: '/roster',
      templateUrl: 'js/roster/roster.html'

    })

    .state('Sponsors', {
      url: '/sponsors',
      templateUrl: 'js/sponsors/sponsors.html'

    })

    .state('Media', {
      url: '/media',
      templateUrl: 'js/media/media.html',
      controller: 'mediaController'
    });




  $urlRouterProvider.otherwise('home');

});
