// grouplist

groupbuyingController.controller('GroupListCtrl', ['$rootScope', '$scope', '$http', '$location', '$cookies',
    function($rootScope, $scope, $http, $location, $cookies) {
        // $rootScope.isLogin = false;
        // 
        $("#getul li").click(function() {
            $("#getul li").removeClass('selected');
            $(this).attr('class', 'selected');
        });

        var postData={
    		due_date:''
    	}
    	$scope.groups=[];
    	$http.get(API_SOURCE + "/group/get/due_date/now")
            //catch error code
            .error(function(data, status) {
                console.log(status);
            })
            .success(function(data) {
                //get search movie list
                if (data) {
                    // console.log(data);
                    $scope.group = {
                        group_id: data.group_id,
                        group_name: data.group_name,
                        group_status: data.group_status,
                        start_date: data.start_date,
                        due_date: data.due_date,
                        number_threshold: data.number_threshold,
                        item:{
                        	item_id:data.item.item_id,
                        	item_name:data.item.item_name,
                        	price:data.item.price,
                        	item_specification:data.item.item_specification,
                        	item_description:data.item.item_description,
                        	image:data.item.image,
                        	category_id:data.item.category_id
                        }
                    };
                } else {
                    console.log("no data");
                }
            });
    }
])