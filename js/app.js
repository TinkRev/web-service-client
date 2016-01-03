'use strict';

/* App Module */
var groupbuyingApp = angular.module('groupbuyingApp', [
    'ngRoute', 'ngCookies', 'ngDialog',
    'groupbuyingController'
]);

groupbuyingApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/countmein', {
                templateUrl: 'templates/countMeIn.html',
                controller: 'GroupListCtrl'
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .when('/logout', {
                templateUrl: 'templates/logout.html',
                controller: 'LogoutCtrl'
            })
            .when('/register', {
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
            })
            .when('/notice', {
                templateUrl: 'templates/notice.html',
                controller: 'NoticeCtrl'
            })
            .when('/goodsDetail/:goods_id', {
                templateUrl: 'templates/goodsDetail.html',
                controller: 'GoodsDetailCtrl'
            })
            .when('/update_my_watchlist/:user_id/:movie_id/:status', {
                templateUrl: 'templates/watchList.html',
                controller: 'UpdateWatchListCtrl'
            })
            .otherwise({
                redirectTo: '/countmein'
            });
    }
]);
