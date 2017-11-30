'use strict';

angular.module('app').controller('postCtrl', ['$http', '$scope', function ($http, $scope){
    $scope.tabList = [
        {"id": "all", name: "所有"},
        {"id": "pass", name: "面试邀请"},
        {"id": "fail", name: "不合格"},
    ];
}])