/**
 * A UI Component For Incrementing Numbers
 * @version v1.0.0 - 2015-01-30 * @link https://github.com/jacobscarter/angular-number-incrementor
 * @author Jacob Carter <jacob@ieksolutions.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('templates-angularnumberincrementor', ['numberincrementor.html']);

angular.module("numberincrementor.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("numberincrementor.html",
    "<div class=\"input-group spinner\">\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"spinnerValue\">\n" +
    "    <div class=\"input-group-btn-vertical\">\n" +
    "      <button class=\"btn btn-default\" ng-click=\"increase()\"><span>+</span></button>\n" +
    "      <button class=\"btn btn-default\" ng-click=\"decrease()\"><span>-</span></button>\n" +
    "    </div>\n" +
    "  </div>");
}]);

angular.module('angular-number-incrementor', ['templates-angularnumberincrementor']);

angular.module('angular-number-incrementor').directive('numberIncrementor', [ function() {
        

    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            output : '='
        },
        templateUrl: function(element, attributes) {
          return attributes.template || "numberincrementor.html";
        },
        link: function($scope, $element, $attrs) {


            $scope.output = $scope.spinnerValue;

            $scope.spinnerValue = 0;

            $scope.increase = function(){
                $scope.spinnerValue++;
                $scope.output = $scope.spinnerValue;
            };

            $scope.decrease = function(){
                $scope.spinnerValue--;
                $scope.output = $scope.spinnerValue;
            };

            

        }
    };
}]);
