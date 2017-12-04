'use strict';

angular.module('app')
// .service('cache', ['$cookies', function ($cookies){
//     this.put = function (key, value){
//         $cookies.put(key, value);
//     };

//     this.get = function (key){
//         return $cookies.put(key);
//     };

//     this.remove = function (key){
//         $cookies.remove(key)
//     }
// }])
.factory('cache', ['$cookies', function ($cookies){
    return {
        put : function (key, value){
            $cookies.put(key, value);
        },
        get : function (key){
            return $cookies.put(key)
        },
        remove: function (key){
            $cookies.remove(key);
        }
    }
}])

