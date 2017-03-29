webTeam.controller("signUpController", ['$rootScope', '$scope', '$location', 
    function($rootScope, $scope, $location) {

    	$scope.formHire = false;
        $scope.formWork = false;
    
        $scope.formHire = function(){
        	$scope.formHire = true;
        	$scope.formWork = false;
        }
        $scope.formWork = function(){
        	$scope.formHire = false;
        	$scope.formWork = true;
        }
        
        

    }
]);