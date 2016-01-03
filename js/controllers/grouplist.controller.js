// grouplist

groupbuyingController.controller('GroupListCtrl', ['$rootScope', '$scope', '$http', '$location', '$cookies',
    function($rootScope, $scope, $http, $location, $cookies) {
        $rootScope.isLogin = false;
        // 
        $("#getul li").click(function() {
            $("#getul li").removeClass('selected');
            $(this).attr('class', 'selected');
        });
    }
])