var app = angular.module('App', [])

app.controller('AppController', ($scope) => {
	$scope.display = () => {
	let str = $scope.displayText;
		$scope.text = str;
	}
  }
)
