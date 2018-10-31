
//Declaration d'une variable
var home = angular.module('testApp', ['ngRoute']);

home.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl:'partials/home.html',

  })
  .when('/epicerie',{
    templateUrl:'partials/epicerie.html',

  })
  .when('/confiserie',{
    templateUrl:'partials/confiserie.html',

  })
  .when('/cremerie',{
    templateUrl:'partials/cremerie.html',

  })
  .otherwise({
    redirectTo:'/home'
  })
}]);
