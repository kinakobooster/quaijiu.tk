
angular.module('App', [])
  .controller('linksController', function($scope) {
    $scope.links = [
      {image:'twitter.png', name:'twitter',view:'@quaijiu',url:'https://twitter.com/quaijiu'},
      {image:'note.png', name:'note',view:'quaijiu',url:'https://note.mu/quaijiu'},
    {image:'mail.png', name:'mail',view:'quaijiu.kakai[at]gmail.com'}];
      
  });