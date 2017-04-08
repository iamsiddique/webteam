webTeam.controller("employerDashboard", ['$rootScope', '$scope', '$location', 'intermediateService','$filter',
    function($rootScope, $scope, $location, intermediateService,$filter) {
        
        $scope.listofJobs = [];
        $scope.jobslist = function() {
            id = 1;
            intermediateService.jobListMaster(id,function(response) {

                if (response.statusCode == 1) {
                    $scope.listofJobs = response.data;
                    console.log(response);
                } else if (response.statusCode == 0) {

                }
            });
        }
        $scope.jobslist();
       
        $scope.showModal = function(data){
            console.log(data);
            $scope.modaldata = data;
        }

    }
]);
