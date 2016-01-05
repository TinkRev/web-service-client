// login

groupbuyingController.controller('LoginCtrl', ['$rootScope', '$scope', '$http','$location', '$cookies',
    function($rootScope, $scope, $http, $location, $cookies) {
    	$scope.login = this;
    	$scope.response = '';

        this.userdata = {
            email: '',
            password: ''
        };
        this.userforgot='';
        
    	this.doLogin = function() {
            var member = {
                email: this.userdata.email,
                password: CryptoJS.SHA3(this.userdata.password, { outputLength: 512 }).toString(CryptoJS.enc.Base64),
            }
            $http.post(API_SOURCE + "/user/login", JSON.stringify(member))
                //catch error code
                .error(function(data, status) {
                    console.log(status);
                })
                .success(function(data) {
                    if (data) {
                        $scope.response = 'Login Successful!';
                        $rootScope.isLogin = true;
                        $rootScope.loginData = {
                            member_id: data.member_id,
                            email: data.email,
                            first_name: data.first_name,
                            last_name: data.last_name,
                            cellphone: data.cellphone,
                            address: data.address,
                            gender: data.gender,
                            joindate: data.joindate
                        };
                        // set cookie
                        $cookies.putObject('loginData',$rootScope.loginData);
                        $location.path('/countmein');
                    } else {
                        $rootScope.isLogin = false;
                        $scope.response = 'Please check your input data.';
                    }
                });
        }
        this.redirect = function() {
            if ($rootScope.isLogin) {
                $location.path('/countmein');
            }
        }
    }])