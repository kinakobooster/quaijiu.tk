
angular.module('App', [])
  .controller('linksController', function($scope) {
    $scope.links = [
      {image:'twitter.png', name:'twitter',view:'@quaijiu',url:'https://twitter.com/quaijiu'},
      {image:'note.png', name:'note',view:'quaijiu',url:'https://note.mu/quaijiu'},
    {image:'mail.png', name:'mail',view:'quaijiu.kakai[at]gmail.com',
  url:'https://docs.google.com/forms/d/e/1FAIpQLSf0XPwV7ECYuJ4VGk8xyrjVtEYrBglS2HQ7LBAoBv5GIT9tUQ/viewform'}
  ];
      
  });