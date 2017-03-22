angular.module('app')
    .controller('SearchController', function($scope, GifService) {
        $scope.goSearch = function() {
            search = $scope.search;
            GifService.getSearch(search).then(function(res) {
              var i = Math.floor(Math.random(0,101)*100);
              console.log(i);
                $scope.getSearch = res.data.data[i];
                console.log($scope.getSearch);
            });
        };
    });
