function init(){

};

const app = angular.module('App', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              })
            $urlRouterProvider.otherwise("/")
            $stateProvider
                .state('/',{
                    url: '/',
                    templateUrl : 'dest/assets/templates/pages/main.html',
                    controller: ($scope) => {

                    }
                })
                .state('biography',{
                    url: '/biography',
                    templateUrl : 'dest/assets/templates/pages/biography.html',
                    controller: ($scope) => {

                    }
                })
                .state('projects',{
                    url: '/projects',
                    templateUrl : 'dest/assets/templates/pages/projects.html',
                    controller: ($scope) => {
                      $scope.pShow = [true,false];
                      $scope.open = function(b){
                          $scope.pShow[0] = b;
                          $scope.pShow[1] = !b;
                        };
                    }
                })
                .state('map',{
                    url: '/map',
                    templateUrl : 'dest/assets/templates/pages/map.html',
                    controller: ($scope) => {
                      const latlng = new google.maps.LatLng(35.676272,139.6404296);
                      const myOptions = {
                        zoom: 12,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                      };
                      const map = new google.maps.Map(document.getElementById('map'), myOptions);

                      const styledMapOptions = { name: 'EIFUKU' }

                      const styleOptions = [
                      {
                        "stylers": [
                          { "invert_lightness": true },
                          { "hue": "#003bff" }
                        ]
                      }
                      ]

                      const markerOptions = {
                        position: latlng,
                        map: map,
                      };
                      var marker = new google.maps.Marker(markerOptions);
                      var type = new google.maps.StyledMapType(styleOptions, styledMapOptions);
                      map.mapTypes.set('eifuku', type);
                      map.setMapTypeId('eifuku');
                    }
                })
                .state('contact',{
                    url: '/contact',
                    templateUrl : 'dest/assets/templates/pages/contact.html',
                    controller: ($scope) => {
                    }
                })
                .state('poop',{
                    url: 'projects/poop',
                    templateUrl : 'dest/assets/templates/pages/pj_poop.html',
                    controller: ($scope) => {

                    }
                });
							});
