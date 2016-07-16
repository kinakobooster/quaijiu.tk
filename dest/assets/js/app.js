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

app.controller('contactController', ['$scope', function ($scope) {}]);

app.controller('mainController', ['$scope', function ($scope) {}]);

app.controller('bioController', ['$scope', function ($scope) {}]);

app.controller('pjController', ['$scope', function ($scope) {
    $scope.pShow = [true, false];
    $scope.open = function (b) {
        $scope.pShow[0] = b;
        $scope.pShow[1] = !b;
    };
}]);

app.controller('mapController', function ($scope) {
    init();
});
//# sourceMappingURL=app.js.map
