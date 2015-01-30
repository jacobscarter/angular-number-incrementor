# angular-number-incrementor
A UI Component For Incrementing Numbers

##Install

bower install:

    bower install angular-number-incrementor

##Use

dependency injection:

    angular.module('myApp', ['angular-number-incrementor']);

using directive:

    <number-incrementor output="output"></number-incrementor>

setting a `$scope.output` in your controller and attaching it to the directive via the `output` attribute will give you access to the incrementor data.

sample controller:

    angular.module('myApp', ['angular-number-incrementor])
        .controller('myCtrl', ['$scope', function($scope) {
            //set initial value to zero
            $scope.output = 0
        }]);
