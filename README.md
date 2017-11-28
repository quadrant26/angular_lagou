# angular_lagou
angular lagou

1. project begin

    install packages

        npm install
        bower install
    
    port 

        open: localhost://3000

    gulp test method

        gulp json/js/less/image/lib/html

    build

        gulp build

    server start

        gulp || gulp server


2. controller

        angualr.module('app').controller('controlName', [arg1, arg2, function (arg1, arg2){

        }])

3. directive

        angular.module('app').directive('appTagName', [function (){

            return {
                restrict: 'name',
                replace: true,
                templateUrl: 'path,
                scope: {
                    data : '='
                }
            }

        }])

4. nagular ui-router

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

5. value

        angualr.module('app').value('dict', {}).run(['dict', '$http', function (dict, $http){
            $http.get('url').success(function (response){
                dict.attr = response
            })
        }])

6. 过滤器

    默认的过滤器

        currency	格式化数字为货币格式。
        filter	从数组项中选择一个子集。
        lowercase	格式化字符串为小写。
        orderBy	根据某个表达式排列数组。
        uppercase	格式化字符串为大写。

    自定义过滤器

        angular.module('app').filter('filterName', function (){
            // 依赖注入的方式
            return function (){
                return ...
            }
        })

