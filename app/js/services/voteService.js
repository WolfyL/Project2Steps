angular.module('app')
    .service('VoteService', function($http, $sce) {
        return {
            getUser: function(id, userId) {
                console.log('reaquete commencée');
                return $http.get('/gifs/vote', {
                    params: {
                        gif: id,
                        user: userId
                    }
                });
            },

            getOne: function(id) {
                console.log(id);
                return $http.get('/gifs/' + id);
            },

            getAll: function() {
                return $http.get('/gifs');
            },
            createGif: function(gif) {
                return $http.post('/gifs/', gif);

            },
            updateLike: function(id, userId) {
                return $http.put('/gifs/like/' + id, {
                    user: userId
                });
            },

            updateDislike: function(id, userId) {
                return $http.put('/gifs/dislike/' + id, {
                    user: userId
                });
            },

            delete: function(id) {
                return $http.delete('/users/' + id);
            }
        };
    });
