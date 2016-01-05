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
            .when('/groupCategory', {
                templateUrl: 'templates/groupCategory.html',
                controller: 'GroupCategoryCtrl'
            })
            .when('/newGroup', {
                templateUrl: 'templates/newGroup.html',
                controller: 'NewGroupCtrl'
            })
            .when('/groupDetail/:group_id', {
                templateUrl: 'templates/groupDetail.html',
                controller: 'GroupDetailCtrl'
            })
            .when('/follow/:group_id/:price', {
                templateUrl: 'templates/follow_group.html',
                controller: 'FollowGroupCtrl'
            })
            .when('/groupManagement', {
                templateUrl: 'templates/groupManagement.html',
                controller: 'GroupManagementCtrl'
            })
            .when('/groupManagementItem/:group_id', {
                templateUrl: 'templates/groupManagementItem.html',
                controller: 'GroupManagementItemCtrl'
            })
            .otherwise({
                redirectTo: '/countmein'
            });
    }
]);