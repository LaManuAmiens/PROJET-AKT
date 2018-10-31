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

angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', function ($scope) {

  $scope.inventory = [
    { id :  1, category : "water bottle", description : "small water bottle",   price :   2.99, qty : 1 },
    { id :  2, category : "water bottle", description : "large water bottle",   price :   2.99, qty : 1, onSale : true },
    { id :  3, category : "flashlight",   description : "small flashlight",     price :   6.99, qty : 1 },
    { id :  4, category : "flashlight",   description : "big flashlight",       price :  12.99, qty : 1 },
    { id :  5, category : "stove",        description : "small stove",          price :  29.99, qty : 1 },
    { id :  6, category : "stove",        description : "big stove",            price :  29.99, qty : 1 },
    { id :  7, category : "sleeping bag", description : "simple sleeping bag",  price :  49.99, qty : 1 },
    { id :  8, category : "sleeping bag", description : "deluxe sleeping bag",  price :  79.99, qty : 1 },
    { id :  9, category : "tent",         description : "1-person tent",        price : 119.99, qty : 1 },
    { id : 10, category : "tent",         description : "2-person tent",        price : 169.99, qty : 1 },
    { id : 11, category : "tent",         description : "3-person tent",        price : 249.99, qty : 1 },
    { id : 12, category : "tent",         description : "4-person tent",        price : 319.99, qty : 1 }
  ];

  $scope.cart = [];

  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };

  $scope.getCost = function(item) {
    return item.qty * item.price;
  };

  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };

  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, item) {
      return sum + $scope.getCost(item);
    }, 0);
    console.log('total: ' + total);
    return total;
  };

  $scope.clearCart = function() {
    $scope.cart.length = 0;
  };

  $scope.removeItem = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };

});
