angular.module('app')
    .controller('SearchController', function($scope, GifService, $stateParams, VoteService, $location) {
        console.log($stateParams.query);
        GifService.getSearch($stateParams.query).then(function(res) {
            var i = Math.floor(Math.random(0, res.data.data.length) * 100);
            $scope.getSearch = res.data.data[i];
            console.log($scope.getSearch);
        });

        var n = 0;
        $scope.getSearch = [];
        $scope.lucky = [];

        $scope.modalShown = false;
        // $scope.toggleModal = function() {
        //     $scope.modalShown = !$scope.modalShown;
        // };

        $scope.loupe = function () {
          $scope.modalShown = !$scope.modalShown;
        };

        $scope.search = {saisie:""};
        $scope.launchSearch = function(){
          var saisie = $scope.search.saisie;
          console.log('saisie', saisie);
          if (saisie !== undefined) {
              console.log(saisie);
              $location.path('/search/' + saisie);
          }
        };

        $scope.copy = function() {
            var toCopy = document.getElementById('to-copy'),
                btnCopy = document.getElementById('copy');

            toCopy.select();
            document.execCommand('copy');
            return false;
        };

        function themeGif() {
          GifService.getSearch($stateParams.query).then(function(res) {
              var i = Math.floor(Math.random(0, res.data.data.length) * 100);
              $scope.getSearch = res.data.data[i];
              console.log($scope.getSearch);
            });
        }


        $scope.addDislike = function() {
            VoteService.updateDislike($scope.gifId, +1).then(function(res) {
            });

            themeGif();
        };

        $scope.addLike = function() {
            VoteService.updateLike($scope.gifId, +1).then(function(res) {
            });

            themeGif();
        };


        $scope.goSearch = function() {
            search = $scope.search.saisie;
            console.log(search);
            GifService.getSearch(search).then(function(res) {
                var i = Math.floor(Math.random(0, 101) * 100);
                console.log(i);
                $scope.getSearch = res.data.data[i];
                console.log($scope.getSearch);
            });
        };

    });
