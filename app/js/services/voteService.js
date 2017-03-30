angular.module('app')
    .service('VoteService', function($http) {
        return {
            getInformation: function(id) {
                return $http.get('/gif/' + id);
            },
            getOne: function(id) {
                return $http.get('/users/' + id);
            },
            updateLike: function(id, like) {
              console.log(id, "like");
              console.log(like, "like");
                return $http.put('/gif/' + id, like);
            },
            updateDislike: function(id, dislike) {
              console.log(id,"dislike");
              console.log(dislike, "dislike");
                return $http.put('/gif/' + id, dislike);
            },
            delete: function(id) {
                return $http.delete('/users/' + id);
            }
        };
    });
