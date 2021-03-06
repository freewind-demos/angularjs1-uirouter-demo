const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state({
    name: 'pa',
    url: '/page-a',
    templateUrl: './templates/a.html'
  });

  $stateProvider.state({
    name: 'pb',
    url: '/page-b',
    templateUrl: './templates/b.html'
  });

  $urlRouterProvider.otherwise('/page-a');

});

