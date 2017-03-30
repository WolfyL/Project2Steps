angular.module('app')
    .service('VoteService', function($http) {
        return {
            getInformation: function(id) {
                return $http.get('/gifs/' + id);
            },

            getOne: function(id) {
                return $http.get('/gifs/' + id);
            },

            getAll: function() {
                return $http.get('/gifs');
            },
            createGif: function(gif) {
                return $http.post('/gifs/', gif);

            },
            updateLike: function(id, userId) {
                return $http.put('/gifs/' + id, {
                    like: [{
                        user: userId
                    }]
                });
            },

            updateDislike: function(id, userId) {
                return $http.put('/gifs/' + id, {
                    dislike: [{
                        user: userId
                    }]
                });
            },
            
            delete: function(id) {
                return $http.delete('/users/' + id);
            }
        };
    });
