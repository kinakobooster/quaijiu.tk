'use strict';

function init() {
  var latlng = new google.maps.LatLng(35.676272, 139.6404296);
  var myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), myOptions);

  var styledMapOptions = { name: 'EIFUKU' };

  var styleOptions = [{
    "stylers": [{ "invert_lightness": true }, { "hue": "#003bff" }]
  }];

  var markerOptions = {
    position: latlng,
    map: map
  };
  var marker = new google.maps.Marker(markerOptions);
  var type = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('eifuku', type);
  map.setMapTypeId('eifuku');
};
'use strict';

var app = angular.module('App', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    return $routeProvider.when('/', {
        templateUrl: 'dest/assets/templates/pages/main.html',
        controller: 'mainController'
    }).when('/biography', {
        templateUrl: 'dest/assets/templates/pages/biography.html',
        controller: 'bioController'
    }).when('/projects', {
        templateUrl: 'dest/assets/templates/pages/projects.html',
        controller: 'pjController'
    }).when('/map', {
        templateUrl: 'dest/assets/templates/pages/map.html',
        controller: 'mapController'
    }).when('/contact', {
        templateUrl: 'dest/assets/templates/pages/contact.html',
        controller: 'contactController'
    }).otherwise({
        redirectTo: '/'
    });
});

app.directive('slideable', function () {
    return {
        restrict: 'C',
        compile: function compile(element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = !attrs.duration ? '1s' : attrs.duration;
                attrs.easing = !attrs.easing ? 'ease-in-out' : attrs.easing;
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
}).directive('slideToggle', function () {
    return {
        restrict: 'A',
        link: function link(scope, element, attrs) {
            var target, content;

            attrs.expanded = false;

            element.bind('click', function () {
                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');

                if (!attrs.expanded) {
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
    };
});

app.controller('contactController', ['$scope', function ($scope) {}]);

app.controller('mainController', ['$scope', function ($scope) {}]);

app.controller('bioController', ['$scope', function ($scope) {
    $scope.flags = [false, false, false, false];
    $scope.open = function (i) {
        console.log(i);
        $scope.flags[i] = !$scope.flags[i];
    };
}]);

app.controller('pjController', ['$scope', function ($scope) {
    $scope.pShow = [true, false];
    $scope.open = function (b) {
        if (b) {
            $scope.pShow[0] = true;
            $scope.pShow[1] = false;
        } else {
            $scope.pShow[1] = true;
            $scope.pShow[0] = false;
        }
    };
}]);

app.controller('mapController', function ($scope) {
    init();
});
//# sourceMappingURL=app.js.map
