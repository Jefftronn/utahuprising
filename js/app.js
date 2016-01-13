angular.module('myApp', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('Home', {
      url: '/home',
      templateUrl: 'js/home/home.html',
      controller: 'homeController'
    })

    .state('Contact', {
      url: '/contact',
      templateUrl: 'js/contact/contact.html',
      controller: 'contactController'
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
      templateUrl: 'js/roster/roster.html',
      controller: 'rosterController'
    })

    .state('Sponsors', {
      url: '/sponsors',
      templateUrl: 'js/sponsors/sponsors.html',
      controller: 'sponsorsController'
    })

    .state('Media', {
      url: '/media',
      templateUrl: 'js/media/media.html',
      controller: 'mediaController'
    });




  $urlRouterProvider.otherwise('home');

});
