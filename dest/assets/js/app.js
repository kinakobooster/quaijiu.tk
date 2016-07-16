"use strict";

var tabs = [$("#tab1"), $("#tab2")];
var conts = [$("#cont1"), $("#cont2")];

tabs[0].click(function () {
  conts[0].show();
  conts[1].hide();

  // switch tab color
  tabs[0].css("background-color", "#0d0322");
  tabs[1].css("background-color", "#0d030f");
});

tabs[1].click(function () {
  conts[1].show();
  conts[0].hide();
  tabs[1].css("background-color", "#0d0322");
  tabs[0].css("background-color", "#0d030f");
});

$(".person").click(function () {
  $(this).toggleClass('active');
});
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
    }).otherwise({
        redirectTo: '/'
    });
});

app.controller('mainController', function ($scope) {});
app.controller('bioController', ['$scope', function ($scope) {
    $scope.expand = function () {
        console.log("aaa");
        $(undefined).toggleClass('active');
    };
}]);

app.controller('pjController', function ($scope) {});
app.controller('mapController', function ($scope) {
    init();
});
//# sourceMappingURL=app.js.map
