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
            createGif: function(gif){
              console.log(gif);
              return $http.post('/gifs/',gif);

            },
            updateLike: function(id, like) {
              console.log(id, "like");
              console.log(like, "like");
                return $http.put('/gifs/' + id, like);
            },
            updateDislike: function(id, dislike) {
              console.log(id,"dislike");
              console.log(dislike, "dislike");
                return $http.put('/gifs/' + id, dislike);
            },
            delete: function(id) {
                return $http.delete('/gifs/' + id);
            }
        };
    });
