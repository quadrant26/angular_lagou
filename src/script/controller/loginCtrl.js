'use strict';

angular.module('app').controller('loginCtrl', ['$http', '$scope', '$state', 'cache', function ($http, $scope, $state, cache){
    $scope.submit = function (){
        $http.post('/data/login.json', $scope.user).success(function (resq){
            if(resq){
                cache.put('id', resq.id);
                cache.put('name', resq.name);
                cache.put('image', resq.image);
                $state.go('main');
            }
        });
    }
}])