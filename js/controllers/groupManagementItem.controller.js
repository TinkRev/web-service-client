// groupManagementItem

groupbuyingController.controller('GroupManagementItemCtrl', ['$rootScope', '$scope', '$http', '$location', '$cookies',
    function($rootScope, $scope, $http, $location, $cookies) {
       $scope.searchGroup = $routeParams.group_id;

    	var postData={
    		group_id:$routeParams.group_id
    	};

    	$http.post(API_SOURCE + "/group/get/group_id", JSON.stringify(postData))
            //catch error code
            .error(function(data, status) {
                console.log(status);
            })
            .success(function(data) {
                //get search movie list
                if (data) {
                    console.log(data);
                    $scope.group = {
                        group_id: data.group_id,
                        group_name: data.group_name,
                        group_status: data.group_status,
                        start_date: moment(data.start_date).format("YYYY-MM-DD hh:mm:ss"),
                        due_date: moment(data.due_date).format("YYYY-MM-DD hh:mm:ss"),
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
    }])