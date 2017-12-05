'use strict';

angular.module('app').controller('positionCtrl', ['$log', '$q', '$http', '$state', '$scope', 'cache', function ($log, $q, $http, $state, $scope, cache){

    $scope.isLogin = cache.get('name') || '';
    $scope.message = $scope.isLogin ? '投个简历' : '去登录';

    // $http.get("/data/position.json?id=" + $state.params.id).success(function (resq){
    //     console.log(resq);
    //     $scope.position = resq;
    // })

    function getPosition(){
        var def = $q.defer();
        $http.get('/data/position.json', {
            params: {
                id: $state.params.id
            }
        }).success(function (resq){
            console.log(resq);
            $scope.position = resq;
            if(resq.posted) {
                $scope.message = '已投递';
            }
            def.resolve(resq);
        }).error(function (resq){
            def.reject(err);
        });

        return def.promise;
    }

    function getCompany(id) {
        $http.get('/data/company.json?id=' + id).success( function (resq){
            $scope.company = resq;
        })
    }

    getPosition().then( function (obj){
        getCompany(obj.companyId)
    })

    $scope.go = function (){
        // console.log(123);
        if( $scope.message !== "已投递" ){
            if( $scope.isLogin ){
                $http.post('/data/handle.json', {
                    id: $scope.position.id
                }).success(function (resq){
                    if( resq.state === 1){
                        $log.info(resq);
                        $scope.message = '已投递';
                    }
                })
            }else{
                // 登录
                $state.go('login');
            }
        }
    }
    
}])