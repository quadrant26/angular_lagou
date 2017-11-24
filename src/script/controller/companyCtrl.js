'use strict';

angular.module('app').controller('companyCtrl', ['$http', '$state', '$scope', function ($http, $state, $scope){

    $http.get('/data/company.json', {
        params : {
            id: $state.params.id
        }
    }).success(function (resq){
        // console.log(resq);
        $scope.company = resq;
    });
    
}])