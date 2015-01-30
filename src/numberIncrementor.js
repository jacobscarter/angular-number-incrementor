angular.module('angular-number-incrementor').directive('numberIncrementor', [ function() {
        

    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            output : '=',
            mincount : '=',
            maxcount : '='
        },
        templateUrl: function(element, attributes) {
          return attributes.template || "numberincrementor.html";
        },
        link: function($scope, $element, $attrs) {

            $scope.output = $scope.spinnerValue;



            $scope.spinnerValue = 0;

            $scope.increase = function(){
                if($scope.maxcount && (typeof $scope.maxcount === 'number') && ($scope.spinnerValue < $scope.maxcount)){
                    $scope.spinnerValue++;
                    $scope.output = $scope.spinnerValue;
                } else if(!$scope.maxcount || (typeof $scope.maxcount !== 'number')){
                    $scope.spinnerValue++;
                    $scope.output = $scope.spinnerValue;
                }
                
            };

            $scope.decrease = function(){
                if($scope.mincount && (typeof $scope.mincount === 'number') && ($scope.spinnerValue > $scope.mincount)){
                    $scope.spinnerValue--;
                    $scope.output = $scope.spinnerValue;
                } else if(!$scope.mincount || (typeof $scope.mincount !== 'number')){
                    $scope.spinnerValue--;
                    $scope.output = $scope.spinnerValue;
                }
            };

            

        }
    };
}]);
