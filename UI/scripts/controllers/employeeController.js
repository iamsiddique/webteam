webTeam.controller("employeeDashboard", ['$rootScope', '$scope', '$location', 'intermediateService','$filter',
    function($rootScope, $scope, $location, intermediateService,$filter) {
        $rootScope.itIsLog = true;
        $scope.getcreds = function(){
            if (localStorage.getItem('userLoggedin') !== null) {
                var currentUser = JSON.parse(localStorage.getItem('userLoggedin'));
                console.log(currentUser[0]);
                id = currentUser[0].master;
                $scope.workerobj = currentUser[0].data;
            }
        }
        
        $scope.listofJobs = [];
        $scope.jobslist = function() {
            intermediateService.jobList(function(response) {

                if (response.statusCode == 1) {
                    $scope.listofJobs = response.data;
                    console.log(response);
                } else if (response.statusCode == 0) {

                }
            });
        }
        $scope.jobslist();
        $scope.getcreds();
        $scope.showModal = function(data){
            console.log(data);
            $scope.modaldata = data;
        }

    }
]);
