angular.module('app')
    .controller('SearchController', function($scope, GifService, $stateParams) {
        console.log($stateParams.query);
        GifService.getSearch($stateParams.query).then(function(res) {
            var i = Math.floor(Math.random(0, res.data.data.length) * 100);
            $scope.getSearch = res.data.data[i];
            console.log($scope.getSearch);
        });
    });
