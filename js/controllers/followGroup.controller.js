// new group

groupbuyingController.controller('FollowGroupCtrl', ['$rootScope', '$scope', '$http', '$location',
    function($rootScope, $scope, $http, $location) {
        $scope.followGroup = this;
        $scope.response = '';


        $scope.categorylist = [];

        //get categorylist
        $http.get(API_SOURCE + "/category/get/all")
            //catch error code
            .error(function(datas, status) {
                console.log(status);
            })
            .success(function(data) {
                //get search movie list
                if (data) {
                    // console.log(data);
                    data.category.map(function(d) {
                        $scope.categorylist.push({
                            category_id: d.category_id,
                            category_name: d.category_name
                        });
                    });
                } else {
                    console.log("no data");
                }
            });

        this.group = {
            group_name: '',
            due_date: '',
            number_threshold: '',
            item_name: '',
            price: '',
            item_specification: '',
            category: '',
            item_description: ''
        };
        this.doCreate = function() {
            var postData = {
                member_id: $rootScope.loginData.member_id,
                group_name: this.group.group_name,
                due_date: this.group.due_date,
                number_threshold: this.group.number_threshold,
                item_name: this.group.item_name,
                price: this.group.price,
                item_specification: this.group.item_specification,
                category: this.group.category,
                item_description: this.group.item_description,
            }
            $http.post(API_SOURCE + "/group/create", JSON.stringify(postData))
                //catch error code
                .error(function(data, status) {
                    console.log(status);
                    console.log(data);
                })
                .success(function(data) {
                    // console.log(data);
                    if (data) {
                        $scope.response = 'Create is Successful.';
                        $location.path('/countmein');
                    } else {
                        $scope.response = 'Please check input data!';
                    }
                });

        }
        this.redirect = function() {
            if ($scope.response == 'Register is Successful.') {
                $location.path('/countmein');
            }
        }

    }
])