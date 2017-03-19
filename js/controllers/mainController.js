var test = document.getElementById("test");
angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC').
        then(function(response) {
            $scope.greeting = response.data;
            console.log($scope.greeting.data[0].id);
            var blbl = "https://media.giphy.com/media/"+ $scope.greeting.data[0].id + "/giphy.gif";
            test.innerHTML = `<td><img src="${blbl}"/></td>`;
        });
});
