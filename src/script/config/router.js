'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
    
    
    $stateProvider.state('main', {
        url : '/main',
        templateUrl: 'view/main.html',
        controller: 'mainCtrl'
    }).state('position', {
        url: '/position/:id',
        templateUrl: 'view/position.html',
        constroller: 'positionCtrl'
    }).state('company', {
        url: '/company/:id',
        templateUrl: 'view/company.html',
        constroller: 'companyCtrl'
    })

    // 设置默认路径
    $urlRouterProvider.otherwise('main');
}])