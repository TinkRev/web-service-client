// new group

groupbuyingController.controller('FollowGroupCtrl', ['$rootScope', '$scope', '$http', '$location', '$routeParams',
    function($rootScope, $scope, $http, $location, $routeParams) {
        $scope.followGroup = this;
        $scope.group_id=$routeParams.group_id;
        $scope.price=$routeParams.price;
        $scope.response = '';

        this.order = {
            order_number: '',
            receiver_name: '',
            receiver_address: '',
            receiver_phone: '',
            price: $routeParams.price
        };

        this.doOrder = function() {
            var postData = {
                member_id: $rootScope.loginData.member_id,
                group_id: $scope.group_id,
                order_number: this.order.order_number,
                order_amount: this.order.order_number*this.order.price,
                receiver_name: this.order.receiver_name,
                receiver_address: this.order.receiver_address,
                receiver_phone: this.order.receiver_phone
            }
            $http.post(API_SOURCE + "/order/post", JSON.stringify(postData))
                //catch error code
                .error(function(data, status) {
                    console.log(status);
                    console.log(data);
                })
                .success(function(data) {
                    // console.log(data);
                    if (data) {
                        $scope.response = 'Order is Successful.';
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