// var test = document.getElementById("test");
angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://api.giphy.com/v1/gifs/search?q=sexy+girl&api_key=dc6zaTOxFJmzC').
        then(function(response) {
            $scope.greeting = response.data;
            console.log($scope.greeting.data[0].id);
            // for(var i = 0; i<10; i++){
            // console.log(i);
            // var blbl = "https://media.giphy.com/media/"+ $scope.greeting.data[i].id + "/giphy.gif";
            // let tr= document.createElement('tr');
            // test.innerHTML = `<td><img src="${blbl}"/><br/></td>`;

            var blbl = "https://media.giphy.com/media/"+ $scope.greeting.data[0].id + "/giphy.gif";
            console.log(blbl);
            test.innerHTML = `<td><img src="${blbl}"/><br/></td>`;
            // blbl = "https://media.giphy.com/media/"+ $scope.greeting.data[1].id + "/giphy.gif";
            // console.log(blbl);
            // test.innerHTML = `<td><img src="${blbl}"/><br/></td>`;
          // }
        });
});
