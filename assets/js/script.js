var home = angular.module('testApp', ['ngRoute']);

home.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl:'partials/home.html',
    controller:'homeCtrl'
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
  .otherwise({
    redirectTo:'/home'
  })
}]);

//on crée un controller rattaché à notre object "home"
home.controller('homeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope){
$scope.sendData = function (){
//crée une variable qui sera accessible dans tout le document
    $rootScope.subjectList.push($scope.subject);
    $rootScope.nameList.push($scope.name);
    $rootScope.emailList.push($scope.email);
    $rootScope.textList.push($scope.text);
    }
}]);
home.controller('epicerieCtrl',['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
    $scope.id = $routeParams.id;
    $scope.subject = $rootScope.subjectList[$scope.id];
    $scope.name = $rootScope.nameList[$scope.id];
    $scope.email = $rootScope.emailList[$scope.id];
    $scope.text = $rootScope.textList[$scope.id];
}]);
