var home = angular.module('testApp', ['ngRoute']);

home.run(function($rootScope){
  $rootScope.nameList;
});

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

home.controller("cremerieCtrl", ["$scope", "$http", "$rootScope", function($scope, $http, $rootScope){
  $http.get('assets/js/cremerie.json').then(function(res){
    $scope.products = res.data;
  });

  $scope.addToCart = function($scope, $rootScope) {
    $rootScope.nameList.push($scope.name);
  }
}]);

home.controller("confiserieCtrl", ["$scope", "$http", "$rootScope", function($scope, $http, $rootScope){
  $http.get('assets/js/confiserie.json').then(function(res){
    $scope.products = res.data;
  });

  $scope.addToCart = function($scope, $rootScope) {
    $rootScope.nameList.push($scope.name);
  }
}]);

home.controller("epicerieCtrl", ["$scope", "$http", "$rootScope", function($scope, $http, $rootScope){
  $http.get('assets/js/epicerie.json').then(function(res){
    $scope.products = res.data;
  });

  $scope.addToCart = function($scope, $rootScope) {
    $rootScope.nameList.push($scope.name);
  }
}]);

home.controller("productsCtrl", ["$scope", "$rootScope", function($scope, $rootScope){
  $scope.name = $rootScope.nameList;
}]);
