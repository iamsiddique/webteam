webTeam.controller("logoutController", ['$rootScope', '$scope', '$location', 'intermediateService',
    function($rootScope, $scope, $location, intermediateService) {
    $rootScope.itIsLog = false;
    $scope.logout = function() {
        if (localStorage.getItem('userLoggedin') !== null) {
        var currentUser = JSON.parse(localStorage.getItem('userLoggedin'));
        console.log(currentUser[0].user);
        intermediateService.logout(currentUser[0].user, function(response) {
            console.log(response)
             $location.path('/webteam');
                localStorage.removeItem('userLoggedin');
            
        })
        } 

    }
      $scope.logout();

    }
]);
