angular.module('app')
    .service('VoteService', function($http, $sce) {
        return {
            getUser: function(id, userId) {
                return $http.get('/gifs/vote', {
                    params: {
                        gif: id,
                        user: userId
                    }
                });
            },

            getGif: function(id, url) {
                return $http.get('/gifs/gif', {
                    params: {
                        gif: id,
                        lien: url
                    }
                });
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
