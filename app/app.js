angular
      .module('Kruise', ['ui.router', 'ngMap'])
      .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'Components/Home/Home.html',            
            controller: 'HomeCtrl'            
          });
      });