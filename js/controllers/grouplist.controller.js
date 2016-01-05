// grouplist

groupbuyingController.controller('GroupListCtrl', ['$rootScope', '$scope', '$http', '$location', '$cookies',
    function($rootScope, $scope, $http, $location, $cookies) {
        // $rootScope.isLogin = false;
        // 
        $("#getul li").click(function() {
            $("#getul li").removeClass('selected');
            $(this).attr('class', 'selected');
        });

        var postData = {
            due_date: ''
        }
        $scope.groups = [];
        $http.get(API_SOURCE + "/group/get/due_date/now")
            //catch error code
            .error(function(datas, status) {
                console.log(status);
            })
            .success(function(data) {
                //get search movie list
                if (data) {
                    // console.log(data);
                    data.group.map(function(d) {
                        $scope.groups.push({
                            group_id: d.group_id,
                            group_name: d.group_name,
                            group_status: d.group_status,
                            start_date: d.start_date,
                            due_date: d.due_date,
                            number_threshold: d.number_threshold,
                            item_id: d.item_id
                        });
                    });

                } else {
                    console.log("no data");
                }
            });
        //check login data
        var loginData = $cookies.getObject('loginData');
        if (loginData) {
            // console.log(loginData);
            $rootScope.loginData = loginData;
            $rootScope.isLogin = true;
        };
    }
])
