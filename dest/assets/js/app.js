'use strict';

angular.module('App', ['components']);
'use strict';

angular.module('components', []).directive('tabs', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function controller($scope, $element) {
      var panes = $scope.panes = [];

      $scope.select = function (pane) {
        angular.forEach(panes, function (pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function (pane) {
        if (panes.length == 0) $scope.select(pane);
        panes.push(pane);
      };
    },
    template: '<div class="tabbable">' + '<ul class="nav nav-tabs">' + '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' + '<a href="" ng-click="select(pane)">{{pane.title}}</a>' + '</li>' + '</ul>' + '<div class="tab-content" ng-transclude></div>' + '</div>',
    replace: true
  };
}).directive('pane', function () {
  return {
    require: '^tabs',
    restrict: 'E',
    transclude: true,
    scope: { title: '@' },
    link: function link(scope, element, attrs, tabsController) {
      tabsController.addPane(scope);
    },
    template: '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' + '</div>',
    replace: true
  };
});
'use strict';

angular.module('App', []).controller('linksController', function ($scope) {
  $scope.links = [{ image: 'twitter.png', name: 'twitter', view: '@quaijiu', url: 'https://twitter.com/quaijiu' }, { image: 'note.png', name: 'note', view: 'quaijiu', url: 'https://note.mu/quaijiu' }, { image: 'mail.png', name: 'mail', view: 'quaijiu.kakai[at]gmail.com' }];
});
//# sourceMappingURL=app.js.map
