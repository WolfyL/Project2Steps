angular.module('app')

    .controller('MainController', function($scope, GifService, VoteService, $location) {
        var n = 0;
        $scope.getSearch = [];
        $scope.lucky = [];

        function randomGif() {
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


        $scope.loupe = function PromptMessage() {
            var saisie = prompt("Saisissez votre texte :", "");
            if (saisie !== null) {
                console.log(saisie);
                $location.path('/search/' + saisie);
            }
        };



        // };

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

            randomGif();
        };

        $scope.addLike = function() {
            VoteService.updateLike($scope.gifId, +1).then(function(res) {
            });

            randomGif();
        };
        randomGif();



        $scope.goSearch = function() {
            search = $scope.search;
            console.log(search);
            GifService.getSearch(search).then(function(res) {
                var i = Math.floor(Math.random(0, 101) * 100);
                console.log(i);
                $scope.getSearch = res.data.data[i];
                console.log($scope.getSearch);
            });
        };

    });
