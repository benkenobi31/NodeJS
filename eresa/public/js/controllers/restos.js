// js/controllers/main.js
angular.module('restoController', [])

// inject the Person service factory into our controller
.controller('restoMainController', function($scope, $http, Restos) {
    $scope.formRestoData = {};

    // GET =====================================================================
    // when landing on the page, get all todos and show them
    // use the service to get all the todos
    Restos.get()
    .success(function(data) {
        $scope.restos = data;
    });

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createResto = function() {

        // validate the formRestoData to make sure that something is there
        // if form is empty, nothing will happen
        // people can't just hold enter to keep adding the same to-do anymore
        if (!$.isEmptyObject($scope.formRestoData)) {

            // call the create function from our service (returns a promise object)
            Restos.create($scope.formRestoData)

            // if successful creation, call our get function to get all the new todos
            .success(function(data) {
                $scope.formRestoData = {}; // clear the form so our user is ready to enter another
                $scope.restos = data; // assign our new list of todos
            });
        }
    };

    // DELETE ==================================================================
    // delete a todo after checking it
    $scope.deleteResto = function(id) {
        Restos.delete(id)
        // if successful creation, call our get function to get all the new todos
        .success(function(data) {
            $scope.restos = data; // assign our new list of todos
        });
    };
});
