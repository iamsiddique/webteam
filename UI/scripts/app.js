var webTeam = angular.module("webteam", ["ngRoute","ngTagsInput","ui.bootstrap"]);
//'webcam','bcQrReader'
webTeam.config(function($routeProvider) {
    $routeProvider
        .when("/webteam", {
           //controller: 'authenticationController',
           templateUrl: "UI/templates/main.html"
        })
        .when("/signUp", {
           controller: 'signUpController',
           templateUrl: "UI/templates/signup.html"
        })
        .when("/signIn", {
           //controller: 'signUpController',
           templateUrl: "UI/templates/signin.html"
        })
        .when("/employerDashboard", {
           controller: 'employerDashboard',
           templateUrl: "UI/templates/employerDashboard.html"
        })
        .when("/postTask", {
           controller: 'jobPostController',
           templateUrl: "UI/templates/postTask.html"
        })
        .when("/employeeDashboard", {
           controller: 'employeeDashboard',
           templateUrl: "UI/templates/employeeDashboard.html"
        })
        .when("/profile", {
           //controller: 'signUpController',
           templateUrl: "UI/templates/profile.html"
        })
        .when("/", {
            //controller: 'authenticationController',
            templateUrl: "UI/templates/main.html"
        });


})
//webTeam.run(['logCheck', '$rootScope', function(logCheck, $rootScope) {
    /*console.log('first called');
    var currentUser = logCheck.checkUser();
    console.log(logCheck.checkUser());*/
    //$rootScope.username = currentUser[0].username;
    //$rootScope.password = currentUser[0].password;
    //$scope.login();
//}]);
