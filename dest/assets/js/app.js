'use strict';

function init() {};

var projects = [{ id: "2", title: 'Eternal Unknown Pleasures', detail: 'You can enjoy Unknown Pleasures etarnally...', name: "unkn" }, { id: "1", title: 'YOU ARE DEAD', detail: 'escape from poop death is inevitable', name: "poop" }];

var app = angular.module('App', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('/', {
        url: '/',
        templateUrl: 'dest/assets/templates/pages/main.html',
        controller: function controller($scope) {}
    }).state('biography', {
        url: '/biography',
        templateUrl: 'dest/assets/templates/pages/biography.html',
        controller: function controller($scope) {}
    }).state('projects', {
        url: '/projects',
        templateUrl: 'dest/assets/templates/pages/projects.html',
        controller: function controller($scope, $state) {
            $scope.url = $state;
            $scope.projects = projects;
            $scope.pShow = [true, false];
            $scope.open = function (b) {
                $scope.pShow[0] = b;
                $scope.pShow[1] = !b;
            };
        }
    }).state('projects.detail', {
        url: '/detail/{projectName}',
        templateUrl: 'dest/assets/templates/pages/projects/pde.html',
        controller: function controller($stateParams, $scope) {
            $scope.project = projects.find(function (item) {
                return item.name === $stateParams.projectName;
            });
            $scope.src = 'src/pde/' + $scope.project.name + '.pde';
            var pde_name = 'pde_script_' + $scope.project.id;
            var script = document.getElementById(pde_name).innerHTML;
            var canvas = document.getElementById("processing-canvas");
            var p = new Processing(canvas, script);
        }
    }).state('map', {
        url: '/map',
        templateUrl: 'dest/assets/templates/pages/map.html',
        controller: function controller($scope) {
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
        }
    }).state('contact', {
        url: '/contact',
        templateUrl: 'dest/assets/templates/pages/contact.html',
        controller: function controller($scope) {}
    }).state('poop', {
        url: 'projects/poop',
        templateUrl: 'dest/assets/templates/pages/pj_poop.html',
        controller: function controller($scope) {}
    });
});
//# sourceMappingURL=app.js.map
