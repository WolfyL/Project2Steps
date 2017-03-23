angular.module('app')
    .controller('MainController', function($scope, GifService) {
        var n = 0;
        GifService.getAll().then(function(res) {
            $scope.all = res.data;
        });
        GifService.getLucky().then(function(res) {
            $scope.lucky = res.data;
            // console.log($scope.lucky);
        });

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
                // $scope.goSearch = function() {
                    // search = $scope.search;
                    console.log(saisie);
                    GifService.getSearch(saisie).then(function(res) {
                        var i = Math.floor(Math.random(0, 101) * 100);
                        console.log(i);
                        $scope.getSearch = res.data.data[i];
                        console.log($scope.getSearch);
                    // });
                });
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

        $scope.next = function() {
            GifService.getLucky().then(function(res) {
                $scope.lucky = res.data;
                // console.log($scope.lucky);
            });
        };

        $scope.goSearch = function() {
            search = $scope.search;
            GifService.getSearch(search).then(function(res) {
                var i = Math.floor(Math.random(0, 101) * 100);
                console.log(i);
                $scope.getSearch = res.data.data[i];
                console.log($scope.getSearch);
            });
        };
    });
