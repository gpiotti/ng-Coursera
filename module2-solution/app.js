(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)	
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
	var buyList = this;

	buyList.moveToBought = function(itemIndex) {
		ShoppingListCheckOffService.moveToBought(itemIndex);
	}

	buyList.items = ShoppingListCheckOffService.getToBuyItems();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
	var boughtList = this;
	boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService (){
	var service = this;
	var toBuyItems = [
						{name: "Milk", quantity: "1 L"},
						{name: "Meat", quantity: "2 kg"},
						{name: "Rice", quantity: "1 kg"},
						{name: "Apples", quantity: "2 kg"},
						{name: "Bananas", quantity: "2 kg"},

					];
	var boughtItems = []

	service.moveToBought = function (itemIndex){
		var item = toBuyItems[itemIndex];
		toBuyItems.splice(itemIndex, 1);
		boughtItems.push(item);
	};

	service.getToBuyItems = function(){
		return toBuyItems;
	};

	service.getBoughtItems = function(){
		return boughtItems;
	}

}

}())
