angular.module('app')
    .service('UserService', function($http) {
        return {
            getAll: function() {
                return $http.get('/users');
            },
            getOne: function(id) {
                return $http.get('/users/' + id);
            },
            copyUpdate: function(id, gif,url) {
                console.log(id, gif);
                return $http.put('/users/copy/'+ id ,{gifId: gif, url: url});
            },
            update: function(id, user) {
                return $http.put('/users/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/users/' + id);
            }
        };
    });
