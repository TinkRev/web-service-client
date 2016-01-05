// logout

groupbuyingController.controller('LogoutCtrl', ['$rootScope', '$scope', '$location', '$cookies', 'ngDialog',
    function($rootScope, $scope, $location, $cookies, ngDialog) {
        $location.path('/countmein');
        $cookies.remove('loginData');
        $rootScope.isLogin = false;
        $rootScope.loginData = {};
        // ngDialog.open({
        //     template: 'Logout Successful',
        //     plain: 'ngdialog-theme-plain',
        //     scope: $scope
        // });
    }
])
