# angular-number-incrementor
A UI Component For Incrementing Numbers

##Install

bower install:

    bower install angular-number-incrementor

##Use

**dependency injection:**

    angular.module('myApp', ['angular-number-incrementor']);

**using directive:**

    <number-incrementor></number-incrementor>
    
**accessing output:**

    <number-incrementor output="output"></number-incrementor>

setting a `$scope.output` in your controller and attaching it to the directive via the `output` attribute will give you access to the incrementor data.

sample controller:

    angular.module('myApp', ['angular-number-incrementor])
        .controller('myCtrl', ['$scope', function($scope) {
            //set initial value to zero
            $scope.output = 0
        }]);

**setting min and max counts:**

    <number-incrementor output="output" mincount="-1" maxcount="5"></number-incrementor>

`mincount` and `maxcount` attributes take numbers as values.  The set the limit for how low and how high the incrementor will count.

**setting start value**

    <number-incrementor output="output" mincount="-1" maxcount="5" start="2"></number-incrementor>
    
`start` attribute takes a number as a value.  This number is the number that the incrementor starts at.
    
##Coming Soon

* Setting "increment by" value
