webTeam.controller("signUpController", ['$rootScope', '$scope', '$location','intermediateService',
    function($rootScope, $scope, $location,intermediateService) {
        if (localStorage.getItem('userLoggedin') !== null) {
                var currentUser = JSON.parse(localStorage.getItem('userLoggedin'));
                console.log(currentUser[0]);
                if(currentUser[0].data.companyName){
                    $location.path('/employerDashboard');
                }
                else{
                     $location.path('/employeeDashboard');
                }
               
            }
        $rootScope.itIsLog = false;
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
            console.log($scope.emplr);
            var country =$scope.emplr.country.name;
            $scope.emplr.country = "";
            $scope.emplr.country = country;
            console.log($scope.emplr);
            intermediateService.emplrSignup($scope.emplr, function(response) {
                
            if(response.statusCode == 1){
                $scope.emplrDetails = response.data;
                $location.path('/signIn');
                
            }
            else if (response.statusCode == 0) {
                
            }
        });
        }
        $scope.emple = {};
        $scope.emple.user = {};
        $scope.empleSignUp = function(){
            console.log($scope.emple);
            var country =$scope.emple.country.name;
            $scope.emple.country = "";
            $scope.emple.country = country;
            console.log($scope.emple);
            intermediateService.empleSignup($scope.emple, function(response) {
                
            if(response.statusCode == 1){
                $scope.empleDetails = response.data;
                $location.path('/signIn');
                
            }
            else if (response.statusCode == 0) {
                
            }
        });
        }
        $scope.getCountries = function(){
            intermediateService.restCountries(function(response) {
                $scope.products = response;
            
                console.log(response)
            
        });
        }
        $scope.getCountries();
        

    }
]);
