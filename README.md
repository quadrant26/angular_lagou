# angular_lagou
angular lagou

project begin

    install packages

        npm install
        bower install
    
    port localhost://3000

    test

        gulp json/js/less/image/lib/html

    build

        gulp build

    server start

        gulp || gulp server


1. controller

        angualr.module('app').controller('controlName', [arg1, arg2, function (arg1, arg2){

        }])

2. directive

        angular.module('app').directive('appTagName', [function (){

        return {
            restrict: 'name',
            replace: true,
            templateUrl: 'path
        }

    }])

3. ui.router

        angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
            $stateProvider.state('routername', {
                url: '/routername',
                templateUrl: 'path',
                controller: 'controllerName'
            })

            // 设置默认的路由地址
            $urlRouterProvider.otherwise('routername')
        })

        // 默认选中高亮设置 ui-router提供的属性，会判断当前在哪个页面，然后添加active这个类
        ui-sref-active="active"

        // 链接到路由
        ui-sref="hello"

