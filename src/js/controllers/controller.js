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

app.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;

            attrs.expanded = false;

            element.bind('click', function() {
                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');

                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});


app.controller('contactController', ['$scope',($scope) => {
}])

app.controller('mainController', ['$scope',($scope) => {
}])

app.controller('bioController', ['$scope',($scope) => {
  $scope.flags = [false, false, false, false];
  $scope.open = function(i){
    console.log(i);
    $scope.flags[i] = !$scope.flags[i]
  };
}])

app.controller('pjController', ['$scope',($scope) => {
  $scope.pShow = [true,false];
  $scope.open = function(b){
    if(b){
      $scope.pShow[0] = true;
      $scope.pShow[1] = false;
    }else{
      $scope.pShow[1] = true;
      $scope.pShow[0] = false;
    }
  };
}])

app.controller('mapController', ($scope) => {
  init();
})
