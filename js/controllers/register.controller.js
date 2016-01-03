// register

groupbuyingController.controller('RegisterCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
    	$scope.register = this;
        $scope.response = '';

        this.userdata = {
            email: '',
            password: '',
            passwordConfirm: '',
            first_name: '',
            last_name: '',
            gender: ''
        };
        this.doRegister = function() {
            if (this.userdata.email && this.userdata.password == this.userdata.passwordConfirm && this.userdata.first_name&&this.userdata.last_name&&this.userdata.cellphone&&this.userdata.address) {
                var newMember = {
                    email: this.userdata.email,
                    password: CryptoJS.SHA3(this.userdata.password, { outputLength: 512 }).toString(CryptoJS.enc.Base64),
                    first_name: this.userdata.first_name,
                    last_name: this.userdata.last_name,
                    cellphone:this.userdata.cellphone,
                    address:this.userdata.address,
                    gender: this.userdata.gender
                }
                // console.log(JSON.stringify(newMember));
                $http.post(API_SOURCE + "/user/register", JSON.stringify(newMember))
                    //catch error code
                    .error(function(data, status) {
                        console.log(status);
                        console.log(data);
                    })
                    .success(function(data) {
                        // console.log(data);
                        if (data) {
                            $scope.response = 'Register is Successful.';
                            $location.path('/countmein');
                        } else {
                            // user account is already exist
                            $scope.response = 'Please choose use other E-mail.';
                        }
                    });

            } else {
                $scope.response = 'Please check your input data.';
            }

        }
        this.redirect = function() {
            if ($scope.response == 'Register is Successful.') {
                $location.path('/countmein');
            }
        }
    	
    }])