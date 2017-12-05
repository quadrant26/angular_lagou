'use strict';

angular.module('app').controller('favoriteCtrl', ['$http', '$scope', function ($http, $scope){
    $http.get('/data/MyFavorite.json').success(function (resq){
        $scope.list = resq;
    });
}])