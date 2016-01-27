

app.controller('ababoolPreloder', function ($scope, $timeout, $http, $compile) {

    /* preloader out */
    $timeout(function() {
          $scope.preloader = true;
    }, 1000);

});
