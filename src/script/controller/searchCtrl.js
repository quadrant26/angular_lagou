'use strict';

angular.module('app').controller('searchCtrl', ['dict', '$http', '$scope', function (dict, $http, $scope){
    

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
        {id: 'scale', name: '公司规模'}
    ];
    $scope.sheet = {};

    var tabId = '';
    $scope.tClick = function (id, name){
        tabId = id;
        $scope.sheet.list = dict[id];
        $scope.sheet.visiable = true;
    }

    // 操作下拉列表
    $scope.sClick = function (id, name){
        // 根据下拉选项修改标题名称
        if( id ){
            angular.forEach($scope.tabList, function (item){
                if( item.id === tabId){
                    item.name = name;
                }
            });
        }else{
            angular.forEach($scope.tabList, function (item){
                if( item.id === tabId ){
                    switch(item.id){
                        case 'city':
                            item.name = '城市';
                            break;
                        case 'salary':
                            item.name = '薪水';
                            break;
                        case 'scale':
                            item.name = '公司规模';
                            break;
                    }
                }
            })
        };
    }

}])