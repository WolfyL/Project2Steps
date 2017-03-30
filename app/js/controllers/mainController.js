angular.module('app')
    .controller('MainController', function($scope, GifService, VoteService, $location,UserService, CurrentUser) {
        var n = 0;
        var userId = CurrentUser.user()._id;
        $scope.getSearch = [];
        $scope.lucky = [];


        $scope.modalShown = false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        };

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

        function randomGif() {
            GifService.getLucky().then(function(res) {
                $scope.lucky = res.data.data.image_url;
                $scope.gifId = res.data.data.id;
                console.log($scope.gifId);
                VoteService.getOne($scope.gifId).then(function(res){
                  console.log(res.data);
                });

            });
        }


        $scope.addNumber = function() {
            n = $scope.number;
            GifService.getX(n).then(function(res) {
                $scope.X = res.data;
            });
        };


        $scope.loupe = function PromptMessage() {
            var saisie = prompt("Saisissez votre texte :", "");
            if (saisie !== null) {
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


        $scope.addDislike = function() {
          VoteService.updateDislike($scope.gifId, userId).then(function(res){

            randomGif();
          });
        };


        $scope.addLike = function() {
          VoteService.updateLike($scope.gifId, userId).then(function(res){

            randomGif();
          });


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


        randomGif();




    });
