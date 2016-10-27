(function(){
	'use strict';
	angular.module('MenuApp')
	.component('categories', {
		templateUrl: "src/menuapp/templates/categories.template.html",
		bindings:{
			categories: '<' // en el template categories se obtiene del controller
		}
	});
})();