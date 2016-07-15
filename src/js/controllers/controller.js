const app = angular.module('App', ['ngRoute']);
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
                .otherwise({
                  redirectTo: '/'
                })
							)
)

app.controller('mainController', ($scope) => {})
app.controller('bioController', ['$scope',($scope) => {
  $scope.expand = () => {
    console.log("aaa");
    $(this).toggleClass('active')
  }
}])
