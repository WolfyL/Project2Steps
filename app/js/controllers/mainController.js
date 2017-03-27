angular.module('app')
    .controller('MainController', function($scope, GifService, VoteService) {
        var n = 0;


        function ramdonGif() {
            GifService.getLucky().then(function(res) {
                $scope.lucky = res.data.data.image_url;
                $scope.gifId = res.data.data.id;
                console.log($scope.gifId);
                console.log($scope.lucky);
            });
        }

        $scope.addNumber = function() {
            n = $scope.number;
            GifService.getX(n).then(function(res) {
                $scope.X = res.data;
                console.log($scope.X);
            });
        };

        $scope.goSearch = function() {
            search = $scope.search;
            GifService.getSearch(search).then(function(res) {
                $scope.getSearch = res.data;
                console.log($scope.getSearch);
            });
        };

        $scope.copy = function() {
            var toCopy = document.getElementById('to-copy'),
                btnCopy = document.getElementById('copy');

            toCopy.select();
            document.execCommand('copy');
            return false;
        };

        $scope.addDislike = function() {
            VoteService.updateDislike($scope.gifId, +1).then(function(res) {
            });

            ramdonGif();
        };

        $scope.addLike = function() {
            VoteService.updateLike($scope.gifId, +1).then(function(res) {
            });

            ramdonGif();
        };
        ramdonGif();
    });
