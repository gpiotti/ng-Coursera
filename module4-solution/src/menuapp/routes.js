(function () {
	'use strict';
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		 $stateProvider

		 .state('home',{
		 		url: '/',
		 		templateUrl: 'src/menuapp/templates/home.template.html'
		 	})

		 .state('categories',{
		 		url: '/categories',
		 		templateUrl: 'src/menuapp/templates/categories.template.html',
		 		controller: 'CategoriesController as catCtrl', //en el template se refiere con este alias
		 		resolve: { 	// esto resuelve la promise que devuelve MenuDataService.getAllCategories()
		 					// el nombre 'categories' se tiene que inyectar en el controller ('CategoriesController') 
		 			categories: ['MenuDataService', function(MenuDataService){
		 				return MenuDataService.getAllCategories();
		 			}]
		 		}
		 	})

		 .state('items',{
		 	url: '/items/{itemId}',
		 	templateUrl: 'src/menuapp/templates/items.template.html',
		 	controller: 'ItemsController as itemCtrl',
		 	resolve: {
		 		items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService){
		 			return MenuDataService.getItemsForCategory($stateParams.itemId);
		 		}]
		 	}
		 });
	}
}());