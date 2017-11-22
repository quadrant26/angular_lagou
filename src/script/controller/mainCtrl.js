'use strict';

angular.module('app').controller('mainCtrl', ['$http', '$scope', function ($http, $scope){
    // $scope.abc = '123';
    $scope.list = [
        {
            id: '1',
            name: '销售',
            imgSrc: 'image/company-3.png',
            companyName: '千度',
            city: '上海',
            industry: '互联网',
            time: '2017-06-01 11:05'
        },
        {
            id: '2',
            name: 'Web前端',
            imgSrc: 'image/company-1.png',
            companyName: '慕课',
            city: '上海',
            industry: '互联网',
            time: '2017-06-01 11:05'
        }
    ]
}])