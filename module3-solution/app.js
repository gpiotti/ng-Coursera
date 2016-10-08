(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

function FoundItems(){
	var ddo = {
		scope:{
			found: '<',
			removeItem: '&'
		},
		controller: FoundItemsDirectiveController,
		controllerAs: 'dirCtrl',
		bindToController: true,
		templateUrl: 'foundItems.html'
	};

	return ddo;
}

function FoundItemsDirectiveController (){
	var dirCtrl = this;


}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){
	var ctrl = this;
	var searchTerm = '';
	ctrl.found = [];
	console.log(ctrl);

	ctrl.search = function (){
		ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
		ctrl.found.then(
			function (result){
			ctrl.found = result;
		});
	};

	ctrl.removeItem = function(itemIndex){
		ctrl.found.splice(itemIndex,1);
	};

	ctrl.anyResult = function(){
		if (ctrl.found.length > 0){
			return true;
		}
		else {
			return false;
		}
	};

}

MenuSearchService.$inject= ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath){
	var service = this;

	service.getMatchedMenuItems = function (searchTerm){
		var promise = $http({
			method: 'GET',
			url: (ApiBasePath + '/menu_items.json')
		}).then(
			function (result){
				var foundItems = [];
				for(var i=0; i<result.data.menu_items.length; i++){
					var description = result.data.menu_items[i].description;
					if(description.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0){
						foundItems.push(result.data.menu_items[i]);					
					}
				}
				return foundItems;
			});
		return promise;
	};

}

})();