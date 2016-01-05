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
                    console.log(data);
                    data.group.map(function(d) {
                        var image_url = './img/no_image_available.png';
                        if (d.item.image != null) {
                            image_url = d.item.image
                        };
                        $scope.groups.push({
                            group_id: d.group_id,
                            group_name: d.group_name,
                            group_status: d.group_status,
                            start_date: moment(d.start_date).format("YYYY-MM-DD hh:mm:ss"),
                            due_date: moment(d.due_date).format("YYYY-MM-DD hh:mm:ss"),
                            number_threshold: d.number_threshold,
                            item: {
                                item_id:d.item.item_id,
                                item_name:d.item.item_name,
                                image:image_url,
                                item_specification:d.item.item_specification,
                                category_id:d.item.category_id,
                                item_description:d.item.item_description,
                                price:d.item.price
                            }
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
