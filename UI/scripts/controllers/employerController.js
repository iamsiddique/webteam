webTeam.controller("employerDashboard", ['$rootScope', '$scope', '$location', 'intermediateService', '$filter',
    function($rootScope, $scope, $location, intermediateService, $filter) {
        $rootScope.itIsLog = true;
        $scope.listofJobs = [];
        $scope.jobslist = function() {
            if (localStorage.getItem('userLoggedin') !== null) {
                var currentUser = JSON.parse(localStorage.getItem('userLoggedin'));
                console.log(currentUser[0]);
                id = currentUser[0].master;
                $scope.masterobj = currentUser[0].data;
            }
            
            
            intermediateService.jobListMaster(id, function(response) {
                console.log('called');
                if (response.statusCode == 1) {
                    $scope.listofJobs = response.data;
                    console.log(response);
                } else if (response.statusCode == 0) {

                }
            });
        }
        $scope.jobslist();

        $scope.showModal = function(data) {
            console.log(data);
            $scope.modaldata = data;
        }


    }
]);
