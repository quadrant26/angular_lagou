'use strict';

angular.module('app').directive('appTab', [function ($scope){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/tab.html',
        scope: {
            list: '='
        }
    }
}])