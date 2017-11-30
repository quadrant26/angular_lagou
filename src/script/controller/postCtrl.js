'use strict';

angular.module('app').controller('postCtrl', ['$http', '$scope', function ($http, $scope){
    $scope.tabList = [
        {"id": "all", name: "所有"},
        {"id": "pass", name: "面试邀请"},
        {"id": "fail", name: "不合格"},
    ];

    $http.get('/data/myPost.json').success(function (resq){
        $scope.list = resq;
        console.log(resq);
    })

    $scope.filterByObj = {};

    $scope.tClick = function (id, name){

        switch(id){
            case 'all':
                delete $scope.filterByObj.state;
                break;
            case 'pass':
                $scope.filterByObj.state = '1';   
                break;
            case 'fail':
                $scope.filterByObj.state = '-1';   
                break;
        }
    }
}])