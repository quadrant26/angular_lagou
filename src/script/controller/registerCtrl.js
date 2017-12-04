'use strict';

angular.module('app').controller('registerCtrl', ['$interval', '$http', '$scope', '$state', function ($interval, $http, $scope, $state){

    // 提交注册
    $scope.submit = function (){
        $http.post('/data/regist.json', $scope.user).success(function (resq){

            if(resq){
                $state.go('login');
            }
        })
    };

    var count = 60;
    
    $scope.send = function (){
        $http.get('/data/code.json').success(function (resq){
            if(resq.state === 1){
                count = 60;
                $scope.time = '60s';
                var interval = $interval(function (){
                    count --;
                    if( count <= 0){
                        $interval.cancel(interval);
                        $scope.time = '';
                    }else{
                        $scope.time = count + 's';
                    }
                }, 1000);
            }
        })
    }

}])