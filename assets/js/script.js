
//Declaration d'une variable
var home = angular.module('testApp', ['ngRoute']);

home.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
<<<<<<< HEAD
    templateUrl:'partials/home.html'
  })
  .when('/epicerie',{
    templateUrl:'partials/epicerie.html'
  })
  .when('/confiserie',{
    templateUrl:'partials/confiserie.html'
  })
  .when('/cremerie',{
    templateUrl:'partials/cremerie.html'
=======
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

>>>>>>> ca9ddd17281e49df84bcaac4e1ecb50abf326da2
  })
  .otherwise({
    redirectTo:'/home'
  })
}]);
<<<<<<< HEAD
=======

angular.module('testApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', function ($scope) {

  $scope.inventory = [
    { id : confiserie1, description : "Haribo Dragibus",   price :   1.90, qty : 1 },
    { id : confiserie2, description : "Haribo Dragolo",   price :   1.90, qty : 1 },
    { id : confiserie3, description : "Haribo Sunset",     price :   1.90, qty : 1 },
    { id : confiserie4, description : "Haribo Happy",       price :  1.90, qty : 1 },
    { id : cremerie1, description : "Comté 6 mois",          price :  21.90, qty : 1 },
    { id : cremerie2, description : "Beaufort 6 mois d'affinage",            price :  24.90, qty : 1 },
    { id : cremerie3, description : "St Marcelin",  price :  11.90, qty : 1 },
    { id : cremerie4, description : "Bleu des Causses",  price :  17.90, qty : 1 },
    { id : epicerie1, description : "Fois gras de canard entier",        price : 19.90, qty : 1 },
    { id : epicerie2, description : "Cou de canard farci",        price : 2.90, qty : 1 },
    { id : epicerie3, description : "Blé soufflet au miel",        price : 1.70, qty : 1 },
    { id : epicerie4, description : "Riz et soja",        price : 1.70, qty : 1 }
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


category = osef
>>>>>>> ca9ddd17281e49df84bcaac4e1ecb50abf326da2
