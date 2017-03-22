angular.module('app')
    .controller('MainController', function($scope, GifService) {
        var n = 0;
        GifService.getAll().then(function(res) {
            $scope.all = res.data;
        });
        GifService.getLucky().then(function(res) {
            $scope.lucky = res.data;
            console.log($scope.lucky);
        });

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
            });
        };

        $scope.copy = function() {
            var toCopy = document.getElementById('to-copy'),
                btnCopy = document.getElementById('copy');

            toCopy.select();
            document.execCommand('copy');
            return false;
        };

        $scope.next = function(){
          GifService.getLucky().then(function(res) {
              $scope.lucky = res.data;
              console.log($scope.lucky);
          });
        };
    });
