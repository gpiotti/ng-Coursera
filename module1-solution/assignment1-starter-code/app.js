(function(){
'use strict';

angular.module('LunchCheck', [])	
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope){
	$scope.menu = "";
	$scope.message = "";
	$scope.messageStyle = {
		color: '',
	};
	$scope.textBoxStyle = {
		borderColor: ''
	};

	$scope.sayMessage = function(){
		var arrMenu = $scope.menu.split(",");
		var length = 0;
		arrMenu.forEach(function(item){
			if (item.trim() !== ''){
				length += 1;
			}
		});
		if (length === 0){
			$scope.message = "Please enter data first";
			$scope.messageStyle.color = 'red';
			$scope.textBoxStyle.borderColor = 'red';
		}
		else if (length > 3){
			$scope.message = "Too much!";

		}
		else{
			$scope.message = "Enjoy!";
			$scope.messageStyle.color = 'green';
			$scope.textBoxStyle.borderColor = 'green';
		}	
	};
}

}());





