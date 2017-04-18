webTeam.controller("signinController", ['$rootScope', '$scope', '$location','intermediateService','GooglePlus',
    function($rootScope, $scope, $location, intermediateService,GooglePlus) {
        if (localStorage.getItem('userLoggedin') !== null) {
                var currentUser = JSON.parse(localStorage.getItem('userLoggedin'));
                console.log(currentUser[0]);
                if(currentUser[0].data.companyName){
                    $location.path('/employerDashboard');
                }
                else{
                     $location.path('/employeeDashboard');
                }
               // / $location.path('/employerDashboard');
            }
 
     $rootScope.itIsLog = false;


$scope.empleesignInWithParam = function(obj) {
console.log('test123');
console.log(obj);
  intermediateService.signIn(obj, function(response) {

                if (response.statusCode == 1) {
                    console.log(response);  
                    var userid = response.data.user.id.toString();
                    if(response.data.master){
                        var masterid = response.data.master.id;
                        var data = {};
                        data = response.data.master;
                    }
                    else{
                        var masterid = response.data.worker.id;
                        var data = {};
                        data = response.data.worker;
                    }
                                    
                    $scope.credentials = [{
                        "token": response.data.token,
                        "user": userid,
                        "master": masterid,
                        "data" : data
                    }];
                    localStorage.setItem('userLoggedin', JSON.stringify($scope.credentials));
                    //$rootScope.loginPage=true;
                    if(response.data.user.role == "M"){
                        $location.path('/employerDashboard');
                        $scope.LoggedInUser = response.data;
                    }
                    else if(response.data.user.role == "W"){
                        $location.path('/employeeDashboard');
                        $scope.LoggedInUser = response.data;
                    }
                    intermediateService.tokenUpdate($scope.credentials[0]);
                } else if (response.statusCode == 0) {
                    // $scope.credError = true;
                    // $timeout(function(){
                    //     $scope.credError = false;
                    // },2000);
                }
            });
}
        $scope.empleesignIn = function() {
            
            var obj = {
                "userName": $scope.userName,
                "password": $scope.password
            }
            $scope.empleesignInWithParam(obj);
          
        }

            $scope.login = function () {
            console.log('gplus called');
        GooglePlus.login().then(function (authResult) {
            console.log(authResult);
 
            GooglePlus.getUser().then(function (user) {
                console.log('success');
                console.log(user);
                var emplr = {user: {password:user.id}, fullName:user.name, country:"", emailId:user.id};
                   intermediateService.empleSignup(emplr, function(response) {
               var obj = {
                "userName": user.id,
                "password": user.id
            }  
            if(response.statusCode == 1){
               
            $scope.empleesignInWithParam(obj);
                
            }
            else if (response.statusCode == 3) {
                $scope.empleesignInWithParam(obj);
            }
        });
            });
        }, function (err) {
            console.log(err);
        });
    };


    }
]);
