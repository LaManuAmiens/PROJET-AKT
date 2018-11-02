var akt = angular.module('akt', ['ngRoute']);

akt.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl:'partials/home.html',
    controller:'homeCtrl'
  })
  .when('/epicerie',{
    templateUrl:'partials/epicerie.html',
    controller:'epicerieCtrl'
  })
  .when('/confiserie',{
    templateUrl:'partials/confiserie.html',
    controller:'confiserieCtrl'
  })
  .when('/cremerie',{
    templateUrl:'partials/cremerie.html',
    controller:'cremerieCtrl'
  })
  .otherwise({
    redirectTo:'/home'
  })
}]);

    akt.controller('epicerieCtrl', ['$scope', function ($scope) {
      $scope.epicerie1 = "Fois gras de canard entier";
      $scope.epicerie2 = "Fois gras de canard entier pour les fins connaisseurs";
      $scope.epicerie3 = "Cou de canard farci";
      $scope.epicerie4 = "Blé souffle au miel";
    }]),
    akt.controller('confiserieCtrl', ['$scope', function ($scope) {
      $scope.confiserie1 = "Haribo Dragibus";
      $scope.confiserie2 = "Haribo Dragolo";
      $scope.confiserie3 = "Haribo Sunset";
      $scope.confiserie4 = "Haribo Happy";
    }]),
    akt.controller('cremerieCtrl', ['$scope', function ($scope) {
      $scope.cremerie1 = "Comté 6 mois d'affinage";
      $scope.cremerie2 = "Beaufort 6 mois d'affinage";
      $scope.cremerie3 = "St Marcelin";
      $scope.cremerie4 = "Bleu des Causses";
    }]);
