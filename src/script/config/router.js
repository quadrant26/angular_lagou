'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
    
    
    $stateProvider.state('main', {
        url : '/main',
        templateUrl: 'view/main.html',
        controller: 'mainCtrl'
    })

    // 设置默认路径
    $urlRouterProvider.otherwise('main');
}])