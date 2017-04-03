angular.module('app')
    .controller('RankController', function($scope, GifService, VoteService, UserService, CurrentUser) {
        var table = [];
        var classe ={};
        $scope.gifs=[];


        VoteService.getAll().then(function(res) {
            var table = res.data;
            for (var i = 0; i < table.length; i++) {
                 $scope.gifs = {
                    class: i + 1
                };
            }
$scope.gifs = table;
});


    });
