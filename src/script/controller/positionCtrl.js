'use strict';

angular.module('app').controller('positionCtrl', ['$q', '$http', '$state', '$scope', function ($q, $http, $state, $scope){
    // console.log($state);
    $scope.isLogin = false;

    $http.get("/data/position.json?id=" + $state.params.id).success(function (resq){
        console.log(resq);
        $scope.position = resq;
    })

    // function getPosition(){
    //     var def = $q.defer();
    //     $http.get('/data/position.json', {
    //         params: {
    //             id: $state.params.id
    //         }
    //     }).success(function (resq){
    //         console.log(resq);
    //         $scope.position = resq;
    //         def.resolve(resq);
    //     }).error(function (resq){
    //         def.reject(err);
    //     });

    //     return def.promise;
    // }

    // function getCompany(id) {
    //     $http.get('/data/company.json?id=' + id).success( function (resq){
    //         $scope.company = resq;
    //     })
    // }

    // getPosition().then( function (obj){
    //     getCompany(obj.companyId)
    // })
    
}])