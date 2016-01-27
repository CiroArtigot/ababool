

	app.controller('help', function ($scope, $timeout, $http, $compile) {

       // Form submit handler.
       $scope.submit = function(form) {
         // Trigger validation flag.
         $scope.submitted = true;

         // If form is invalid, return and let AngularJS show validation errors.
         if (form.$invalid) {
           return;
         }

         // Default values for the request.
         var config = {
           params : {
             'callback' : 'JSON_CALLBACK',
             'name' : $scope.name,
             'email' : $scope.email,
             'comment' : $scope.comment,
						 'token': $scope.token
           },
         };

         // Perform JSONP request.
         var $thecomment = $http.post('api/form', config)
           .success(function(data, status, headers, config) {
						 if (data.status == 'OK') {
               $scope.name = null;
               $scope.email = null;
               $scope.comment = null;
               $scope.messages = 'Your comment has been sent!';
               $scope.submitted = false;
             } else {
               $scope.messages = 'Oops, we received your request, but there was an error processing it.';
             }
           })
           .error(function(data, status, headers, config) {
             $scope.messages = 'There was a network error. Try again later.';
           })
           .finally(function() {
             // Hide status messages after three seconds.
             $timeout(function() {
               $scope.messages = null;
             }, 3000);
           });
       };
     });
