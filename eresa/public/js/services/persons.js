// js/services/persons.js
angular.module('personService', [])

// super simple service
// each function returns a promise object
.factory('Persons', function($http) {
    return {
        get : function() {
            return $http.get('/api/persons');
        },
        create : function(personData) {
            return $http.post('/api/persons', personData);
        },
        delete : function(id) {
            return $http.delete('/api/persons/' + id);
        }
    }
});
