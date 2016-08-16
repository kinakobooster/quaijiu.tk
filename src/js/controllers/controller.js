function init(){ };

const projects = [
  {id: "2" , title: 'Eternal Unknown Pleasures', detail:'You can enjoy Unknown Pleasures etarnally...', date:'2016/5/5',name:"unkn"},
  {id: "1", title: 'YOU ARE DEAD', detail:'escape from poop death is inevitable', date:'2016/6/5',name:"poop"}
];

const app = angular.module('App', ['ui.router']);

var main_content = document.getElementById("main_content");

app.config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/")
            $stateProvider
                .state('/',{
                    url: '/',
                    templateUrl : 'dest/assets/templates/pages/main.html',
                    controller: ($scope) => {
                      main_content.classList.remove('blur');
                    }
                })
                .state('biography',{
                    url: '/biography',
                    templateUrl : 'dest/assets/templates/pages/biography.html',
                    controller: ($scope) => {
                      main_content.classList.add('blur');
 }
                })
                .state('projects',{
                    url: '/projects',
                    templateUrl : 'dest/assets/templates/pages/projects.html',
                    controller: ($scope, $state) => {
                      main_content.classList.add('blur');
                      $scope.url = $state;
                      $scope.projects = projects;
                      $scope.pShow = [true,false];
                      $scope.open = function(b){
                          $scope.pShow[0] = b;
                          $scope.pShow[1] = !b;
                        };
                    }
                })
                .state('projects.detail',{
                    url: '/detail/{projectName}',
                    templateUrl : 'dest/assets/templates/pages/projects/pde.html',
                    controller: ($stateParams,$scope) => {
                      main_content.classList.add('blur');
                      $scope.project = projects.find((item) => (item.name === $stateParams.projectName));
                      $scope.src = 'src/pde/' + $scope.project.name + '.pde';
                      let pde_name = 'pde_script_' + $scope.project.id;
                      let script = document.getElementById(pde_name).innerHTML;
                      let canvas = document.getElementById("processing-canvas")
                      var p = new Processing(canvas, script);
                    }
                })
                .state('map',{
                    url: '/map',
                    templateUrl : 'dest/assets/templates/pages/map.html',
                    controller: ($scope) => {
                      main_content.classList.add('blur');
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
                      main_content.classList.add('blur');
                    }
                })
                .state('poop',{
                    url: 'projects/poop',
                    templateUrl : 'dest/assets/templates/pages/pj_poop.html',
                    controller: ($scope) => {
                      main_content.classList.add('blur');
                    }
                });
							});
