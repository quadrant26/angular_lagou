'use strict';

angular.module('app').controller('searchCtrl', ['$http', '$scope', function ($http, $scope){
    

    $scope.name = '';
    $scope.visiable = true;
    $scope.search = function (){
        $http.get('data/positionList.json', {
            params: {
                name : $scope.name
            }
        }).success(function (resq){
            $scope.list = resq;
        });
    }

    // 初始化搜索结果
    $scope.search();

    $scope.tabList = [
        {id: 'city', name: '城市'},
        {id: 'salary', name: '薪水'},
        {id: 'sacle', name: '公司规模'}
    ]

}])