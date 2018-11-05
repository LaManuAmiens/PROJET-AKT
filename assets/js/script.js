var home = angular.module('testApp', ['ngRoute']);

home.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl:'partials/home.html',
    controller: 'productsCtrl'
  })
  .when('/epicerie',{
    templateUrl:'partials/epicerie.html',
    controller: 'epicerieCtrl'
  })
  .when('/confiserie',{
    templateUrl:'partials/confiserie.html',
    controller: 'confiserieCtrl'
  })
  .when('/cremerie',{
    templateUrl:'partials/cremerie.html',
    controller: 'cremerieCtrl'
  })
  .when('/panier',{
    templateUrl:'partials/panier.html',
    controller: 'productsCtrl'
  })
  .otherwise({
    redirectTo:'/home'
  })
}]);

home.controller("cremerieCtrl", function($scope, $http){
  $http.get('assets/js/cremerie.json').then(function(res){
    $scope.products = res.data;
  });
});

home.controller("confiserieCtrl", function($scope, $http){
  $http.get('assets/js/confiserie.json').then(function(res){
    $scope.products = res.data;
  });
});

home.controller("epicerieCtrl", function($scope, $http){
  $http.get('assets/js/epicerie.json').then(function(res){
    $scope.products = res.data;
  });
});

$scope.addToCart = function() {
  console.log("products");
}
