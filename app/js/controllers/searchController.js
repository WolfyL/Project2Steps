angular.module('app')
    .controller('SearchController', function($scope, GifService, $stateParams, VoteService, $location, CurrentUser, UserService) {
        var n = 0;
        var userId = CurrentUser.user()._id;
        console.log(userId);
        $scope.gifId = "";
        $scope.gifUrl= "";
        $scope.theme = $stateParams.query;
        $scope.alert = "";
        $scope.getSearch = [];
        $scope.lucky = [];
        $scope.modalShown = false;
        $scope.search = {
            saisie: ""
        };


        function verif() {
            VoteService.getUser($scope.gifId, userId).then(function(res) {
                $scope.isVote = function() {
                    if (res.data) {
                        return true;
                    }
                };
            });
        }


        function themeGif() {
            GifService.getSearch($stateParams.query).then(function(res) {
                var i = Math.floor(Math.random(0, res.data.data.length) * 100);
                $scope.getSearch = res.data.data[i];
                $scope.gifUrl = res.data.data[i].url;
                console.log($scope.gifUrl);
                $scope.gifId = res.data.data[i].id;
                VoteService.getGif($scope.gifId, $scope.gifUrl).then(function(res) {});
                verif();
            });
        }


        $scope.toNext = function() {
            themeGif();
        };


        $scope.loupe = function() {
            $scope.modalShown = !$scope.modalShown;
        };


        $scope.goSearch = function() {
            search = $scope.search.saisie;
            themeGif();
        };


        $scope.launchSearch = function() {
            var saisie = $scope.search.saisie;
            if (saisie !== undefined) {
                $location.path('/search/' + saisie);
            }
        };


        $scope.copy = function() {
          UserService.copyUpdate(userId, $scope.gifId).then(function(res){
            console.log(res);
          });
            var toCopy = document.getElementById('to-copy'),
                btnCopy = document.getElementById('copy');
            toCopy.select();
            document.execCommand('copy');
            return false;
        };


        $scope.addDislike = function() {
            VoteService.updateDislike($scope.gifId, userId).then(function(res) {});
            themeGif();
        };


        $scope.addLike = function() {
            VoteService.updateLike($scope.gifId, userId).then(function(res) {});
            themeGif();
        };


        themeGif();
    });
