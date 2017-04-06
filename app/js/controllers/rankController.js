angular.module('app')
    .controller('RankController', function($scope, GifService, VoteService, UserService, CurrentUser) {
        var table = [];
        var classe = {};
        $scope.gifs = [];
        var userId = CurrentUser.user()._id;

        $scope.copy = function(copy) {
            UserService.copyUpdate(userId, $scope.gifId, $scope.smallUrl).then(function(res) {
                // console.log(res);
            });
            // var toCopy = document.getElementById('to-copy'),
            //     btnCopy = document.getElementById('copy');

            // toCopy.select();
            document.execCommand(copy);
            return false;
        };

        VoteService.getAll().then(function(res) {
            var table = res.data;
            for (var i = 0; i < table.length; i++) {
                $scope.gifs = {
                    class: i + 1
                };
            }
            console.log(table);
            $scope.gifs = table;
        });


    });
