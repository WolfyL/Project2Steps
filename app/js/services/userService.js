angular.module('app')
    .service('UserService', function($http) {
        return {
            getAll: function() {
                return $http.get('/users');
            },
            
            getOne: function(id) {
                return $http.get('/users/' + id);
            },

            getCopy: function(id, gifId) {
                return $http.put('/users/copy' + id);
            },

            update: function(id, user) {
                return $http.put('/users/' + id, user);
            },

            delete: function(id) {
                return $http.delete('/users/' + id);
            }
        };
    });
