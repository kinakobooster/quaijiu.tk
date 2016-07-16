const app = angular.module('App', ['ngRoute', 'ngAnimate']);

app.config(($routeProvider) =>(
            $routeProvider
                .when('/',{
                    templateUrl : 'dest/assets/templates/pages/main.html',
                    controller : 'mainController'
                })
                .when('/biography',{
                    templateUrl : 'dest/assets/templates/pages/biography.html',
                    controller : 'bioController'
                })
                .when('/projects',{
                    templateUrl : 'dest/assets/templates/pages/projects.html',
                    controller : 'pjController'
                })
                .when('/map',{
                    templateUrl : 'dest/assets/templates/pages/map.html',
                    controller : 'mapController'
                })
                .when('/contact',{
                    templateUrl : 'dest/assets/templates/pages/contact.html',
                    controller : 'contactController'
                })
                .otherwise({
                  redirectTo: '/'
                })
							)
)

app.controller('contactController', ['$scope',($scope) => {
}])

app.controller('mainController', ['$scope',($scope) => {
}])

app.controller('bioController', ['$scope',($scope) => {

}])

app.controller('pjController', ['$scope',($scope) => {
  $scope.pShow = [true,false];
  $scope.open = function(b){
      $scope.pShow[0] = b;
      $scope.pShow[1] = !b;
    };
}])

app.controller('mapController', ($scope) => {
  init();
})
