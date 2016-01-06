// groupManagement

groupbuyingController.controller('GroupManagementCtrl', ['$rootScope', '$scope', '$http', '$location', '$cookies',
    function($rootScope, $scope, $http, $location, $cookies) {
        $scope.createlist = [];
        $scope.orderlist = [];
        var postData = {
            member_id: $rootScope.loginData.member_id
        };
        $http.post(API_SOURCE + "/user/record/view", JSON.stringify(postData))
            //catch error code
            .error(function(datas, status) {
                console.log(status);
                console.log(datas);
            })
            .success(function(datas) {
                // console.log(datas);
                if (datas.create) {
                    datas.create.map(function(d) {
                        var image_url = './img/no_image_available.png';
                        if (d.item.image != null) {
                            image_url = d.item.image
                        };
                        $scope.createlist.push({
                            group_id: d.group_id,
                            group_name: d.group_name,
                            group_status: d.group_status,
                            number_threshold: d.number_threshold,
                            start_date: moment(d.start_date).format("YYYY-MM-DD hh:mm:ss"),
                            due_date: moment(d.due_date).format("YYYY-MM-DD hh:mm:ss"),
                            item: {
                                item_id: d.item.item_id,
                                item_name: d.item.item_name,
                                price: d.item.price,
                                item_specification: d.item.item_specification,
                                item_description: d.item.item_description,
                                image: image_url,
                                category_id: d.item.category_id
                            }
                        });
                    });
                }
                if (datas.order) {

                    datas.order.map(function(d) {
                        var image_url = './img/no_image_available.png';
                        if (d.group.item.image != null) {
                            image_url = d.group.item.image
                        };
                        $scope.orderlist.push({
                            group_id: d.group.group_id,
                            group_name: d.group.group_name,
                            group_status: d.group.group_status,
                            number_threshold: d.group.number_threshold,
                            start_date: moment(d.group.start_date).format("YYYY-MM-DD hh:mm:ss"),
                            due_date: moment(d.group.due_date).format("YYYY-MM-DD hh:mm:ss"),
                            item: {
                                item_id: d.group.item.item_id,
                                item_name: d.group.item.item_name,
                                price: d.group.item.price,
                                item_specification: d.group.item.item_specification,
                                item_description: d.group.item.item_description,
                                image: image_url,
                                category_id: d.group.item.category_id
                            },
                            order_id: d.order_id,
                            order_number: d.order_number,
                            order_amount: d.order_amount,
                            order_date: moment(d.order_date).format("YYYY-MM-DD hh:mm:ss")
                        });
                    });
                }
            });

        $scope.go = function(group_id) {
                $location.path('/groupDetail/' + group_id);
        };
    }
])
