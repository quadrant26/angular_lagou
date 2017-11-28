'use strict';

angular.module('app').directive('appTab', [function ($scope){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/tab.html',
        scope: {
            list: '=',
            tab: '=',
            tabClick: '&'
        },
        link: function ($scope){
            $scope.click = function (tab){
                // 点击行高亮设置
                $scope.selectId = tab.id;
                // searchCtrl 操作
                $scope.tabClick(tab);
            }
        }
    }
}])