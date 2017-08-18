// js/controllers/main.js
angular.module('personController', [])

// inject the Person service factory into our controller
.controller('personMainController', function($scope, $http, Persons) {
    $scope.formPersonData = {};

    // GET =====================================================================
    // when landing on the page, get all todos and show them
    // use the service to get all the todos
    Persons.get()
    .success(function(data) {
        $scope.persons = data;
    });

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createPerson = function() {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        // people can't just hold enter to keep adding the same to-do anymore
        if (!$.isEmptyObject($scope.formPersonData)) {

            // call the create function from our service (returns a promise object)
            Persons.create($scope.formPersonData)

            // if successful creation, call our get function to get all the new todos
            .success(function(data) {
                $scope.formPersonData = {}; // clear the form so our user is ready to enter another
                $scope.persons = data; // assign our new list of todos
            });
        }
    };

    // DELETE ==================================================================
    // delete a todo after checking it
    $scope.deletePerson = function(id) {
        Persons.delete(id)
        // if successful creation, call our get function to get all the new todos
        .success(function(data) {
            $scope.persons = data; // assign our new list of todos
        });
    };
});
