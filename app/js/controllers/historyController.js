angular.module('app')
    .controller('HistoryController', function($scope,UserService,CurrentUser) {
        id = CurrentUser.user()._id;
        console.log("coucou",id);

      UserService.getOne(id).then(function (res){
        console.log(res);

      });

      $scope.gifs = [{
        url: 'http://media4.giphy.com/media/l0MYLXhHYuKUD2bZK/giphy.gif',
        download: '235',
        idGif: '59321562',
        date:'02/03/2016'
      }, {
        url: 'http://media0.giphy.com/media/wpB5Jw5xjesjm/giphy.gif',
        download: '587',
        idGif: '1181899',
        date:'12/01/2017'
      }, {
        url: 'http://media4.giphy.com/media/JvgwSgxDMNlbG/giphy.gif',
        download: '639',
        idGif: '1178296',
        date:'12/02/2017'
      }, {
        url: 'http://media3.giphy.com/media/ACM6F5e0XS0oM/giphy.gif',
        download: '25',
        idGif: '19882',
        date:'27/01/2017'
    }];

    });
