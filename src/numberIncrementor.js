angular.module('angular-number-incrementor').directive('numberIncrementor', [ function() {
        

    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            output : '=',
            mincount : '=',
            maxcount : '=',
            start : '=',
            increment : '='
        },
        templateUrl: function(element, attributes) {
          return attributes.template || "numberincrementor.html";
        },
        link: function($scope, $element, $attrs) {

            $scope.output = $scope.spinnerValue;

            var startValue = 0;

            var incrementor = 1;

            if($scope.increment && (typeof $scope.increment === 'number')){
                incrementor = $scope.increment;
            }

            if($scope.start && (typeof $scope.start === 'number')){
                $scope.spinnerValue = $scope.start;
                startValue = $scope.start;
                $scope.output = $scope.spinnerValue;
            }

            if($scope.mincount && (typeof $scope.mincount === "number") && $scope.mincount > 0){

                $scope.spinnerValue = $scope.mincount;
                $scope.output = $scope.spinnerValue;
            } else {
                $scope.spinnerValue = startValue;
                $scope.output = $scope.spinnerValue;
            }
            console.log('min and start: ', $scope.mincount > startValue);
            if($scope.mincount > startValue){
                startValue = $scope.mincount;
                $scope.spinnerValue = startValue;
                $scope.output = $scope.spinnerValue;
            }

            

            $scope.increase = function(){
                if($scope.maxcount && (typeof $scope.maxcount === 'number') && ($scope.spinnerValue < $scope.maxcount)){
                    if($scope.spinnerValue + incrementor <= $scope.maxcount){
                        $scope.spinnerValue = $scope.spinnerValue + incrementor;
                        $scope.output = $scope.spinnerValue;
                    }
                } else if(!$scope.maxcount || (typeof $scope.maxcount !== 'number')){
                    $scope.spinnerValue = $scope.spinnerValue + incrementor;
                    $scope.output = $scope.spinnerValue;
                }
                
            };

            $scope.decrease = function(){
                if($scope.mincount && (typeof $scope.mincount === 'number') && ($scope.spinnerValue > $scope.mincount)){
                    if($scope.spinnerValue - incrementor >= $scope.mincount){
                        $scope.spinnerValue = $scope.spinnerValue - incrementor;
                        $scope.output = $scope.spinnerValue;
                    }
                } else if(!$scope.mincount || (typeof $scope.mincount !== 'number')){
                    $scope.spinnerValue = $scope.spinnerValue - incrementor;
                    $scope.output = $scope.spinnerValue;
                }
            };

            

        }
    };
}]);
