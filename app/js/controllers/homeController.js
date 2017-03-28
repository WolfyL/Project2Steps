angular.module("app")
.controller('MyCtrl', ['$scope', function($scope) {
        $scope.modalShown = false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        };
    }]);
