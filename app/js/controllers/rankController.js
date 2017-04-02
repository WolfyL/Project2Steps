angular.module('app')
    .controller('RankController', function($scope, GifService, VoteService, UserService, CurrentUser) {
        var rank = [];

        function compare(a, b) {
            if (a.vote < b.vote)
                return 1;
            if (a.vote > b.vote)
                return -1;
            return 0;
        }

        VoteService.getAll().then(function(res) {
            var table = res.data;
            for (i = 0; i < table.length; i++) {
                var calc = {
                    gif: table[i].gif,
                    vote: table[i].like.length - table[i].like.length,
                    like: table[i].like.length,
                    dilike: table[i].like.length
                };
                rank.push(calc);
                rank.sort(compare);

            }
            console.log(rank);
        });



    });
