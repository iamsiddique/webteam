webTeam.controller("signUpController", ['$rootScope', '$scope', '$location','intermediateService',
    function($rootScope, $scope, $location,intermediateService) {

        
            $scope.formHire = false;
            $scope.formWork = false;
        
        $scope.hire = function() {
            
            $scope.formHire = true;
            $scope.formWork = false;
        }
        $scope.work = function() {
            console.log('frmwrk');
            $scope.formWork = true;
            $scope.formHire = false;
        }
        $scope.emplr = {};
        $scope.emplr.user = {};
        $scope.emplrSignUp = function(){
            intermediateService.emplrSignup($scope.emplr, function(response) {
                
            if(response.statusCode == 1){
                $scope.emplrDetails = response.data;
                $location.path('/employerDashboard');
                //$scope.credentials = [{username:$scope.empr.companyEmail ,password:$scope.empr.user.password}];
                //localStorage.setItem('userLoggedin', JSON.stringify($scope.credentials));
                //$rootScope.loginPage=true;
               // console.log($rootScope.loginPage);
            }
            else if (response.statusCode == 0) {
                // $scope.credError = true;
                // $timeout(function(){
                //     $scope.credError = false;
                // },2000);
            }
        });
        }
        $scope.emple = {};
        $scope.emple.user = {};
        $scope.empleSignUp = function(){
            intermediateService.empleSignup($scope.emple, function(response) {
                
            if(response.statusCode == 1){
                $scope.empleDetails = response.data;
                $location.path('/employeeDashboard');
                //$scope.credentials = [{username:$scope.empr.companyEmail ,password:$scope.empr.user.password}];
                //localStorage.setItem('userLoggedin', JSON.stringify($scope.credentials));
                //$rootScope.loginPage=true;
               // console.log($rootScope.loginPage);
            }
            else if (response.statusCode == 0) {
                // $scope.credError = true;
                // $timeout(function(){
                //     $scope.credError = false;
                // },2000);
            }
        });
        }


    }
]);
