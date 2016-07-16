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

var app = angular.module('App', ['ngRoute']);
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
app.controller('mapController', function ($scope) {});
//# sourceMappingURL=app.js.map
