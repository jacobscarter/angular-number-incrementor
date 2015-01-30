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
