'use strict';

angular.module('app').value('dict', {}).run(['dict', '$http', function (dict, $http){
    $http.get('/data/city.json').success(function(resq){
        dict.city = resq;
    })
    $http.get('/data/salary.json').success(function(resq){
        dict.salary = resq;
    })
    $http.get('/data/scale.json').success(function(resq){
        dict.scale = resq;
    })
}])