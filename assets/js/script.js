var home = angular.module('testApp', ['ngRoute']);

home.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
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

  })
  .when('/panier',{
    templateUrl:'partials/panier.html'

  })
  .otherwise({
    redirectTo:'/home'
  })
}]);

//
// testApp.controller('productsCtrl', function($scope, $http) {
//     $http.get('assets/js/products.json').then(function(res){
//         $scope.product = res.data;
//     });
// });

        var app = angular.module("myModule", [])
				.controller("productsCtrl", function($scope){
				$scope.carts=[];
				$scope.products =[
					{p_id: "1", p_name: "Haribo Dragibus", p_description: "500 grammes de plaisir pour les gourmands !", p_image: "images/bonbon1.jpg", p_price: 1.90},
					{p_id: "2", p_name: "Haribo Dragolo", p_description: "500 grammes de plaisir pour rigoler la matinée!", p_image: "images/bonbon2.jpg", p_price: 1.90},
					{p_id: "3", p_name: "Haribo Sunset", p_description: "500 grammes de plaisir pour booster votre journée !", p_image: "images/bonbon3.jpg", p_price: 1.90},
					{p_id: "4", p_name: "Haribo Happy", p_description: "500 grammes de plaisir gustatifs pour les plus jeunes!",p_image: "images/bonbon4.jpg", p_price: 1.90},
          {p_id: "5", p_name: "Fois gras de canard entier", p_description: "Fois gras de canard entier pour les fins connaisseurs",p_image: "images/epicerie1.jpg", p_price: 19.90},
          {p_id: "6", p_name: "Cou de canard farci", p_description: "Ça vaut le coup !",p_image: "images/epicerie2.jpg", p_price: 2.90},
          {p_id: "7", p_name: "Blé soufflet au miel", p_description: "Parfait quand on est à bout de souffle !",p_image: "images/epicerie3.jpg", p_price: 1.70},
          {p_id: "8", p_name: "Riz et soja", p_description: "Riz majestueux en bouche !",p_image: "images/epicerie4.jpg", p_price: 1.70},
          {p_id: "9", p_name: "Comté 6 mois", p_description: "Comté 6 mois d'affinage, 21.90 €/kilo",p_image: "images/cremerie1.jpg", p_price: 21.90},
          {p_id: "10", p_name: "Beaufort 6 mois d'affinage", p_description: "Beaufort 6 mois d'affinage, 24.90 €/kilo",p_image: "images/cremerie2.jpg", p_price: 24.90},
          {p_id: "11", p_name: "St Marcelin", p_description: "Fromage de chèvre, 11.90 €/kilo",p_image: "images/cremerie3.jpg", p_price: 11.90},
          {p_id: "12", p_name: "Bleu des Causses", p_description: "Bleu des Causses, 11.90 €/kilos",p_image: "images/cremerie4.jpg", p_price: 17.90}
      	];

				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}
				}


				$scope.total = 0;

				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}

				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});
