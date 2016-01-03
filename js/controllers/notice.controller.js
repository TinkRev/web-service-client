// notice

groupbuyingController.controller('NoticeCtrl', ['$rootScope', '$scope', '$http', '$location', '$cookies',
    function($rootScope, $scope, $http, $location, $cookies) {
        // $rootScope.isLogin=false;
        $scope.go = function(path) {
            $location.path(path);
        };
    }])