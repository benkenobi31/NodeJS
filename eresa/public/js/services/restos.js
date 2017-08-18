// js/services/persons.js
angular.module('restoService', [])

// super simple service
// each function returns a promise object
.factory('Restos', function($http) {
    return {
        get : function() {
            return $http.get('/api/restos');
        },
        create : function(restoData) {
            return $http.post('/api/restos', restoData);
        },
        delete : function(id) {
            return $http.delete('/api/restos/' + id);
        }
    }
});
