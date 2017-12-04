'use strict';

angular.module('app').config(['$provide', function ($provide){
    $provide.decorator('$http', ['$delegate', '$q', function ($delegate, $q){
        $delegate.post = function (url, data, config){
            var def = $q.defer();
            $delegate.get(url).success(function (resq){
                def.resolve(resq);
            }).error(function (resq){
                def.reject(resq);
            });
            return {
                success: function (cb){
                    return def.promise.then(cb);
                },
                error: function (cb){
                    return def.promise.then(cb);
                }
            }
        }
        return $delegate;
    }])
}])