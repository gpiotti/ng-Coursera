(function () {
	'use strict';
	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories']; //se inyecta categories que se creo en el resolve de routes
	function CategoriesController(categories){
		var catCtrl = this;
		catCtrl.categories = categories;
		
	}
}());