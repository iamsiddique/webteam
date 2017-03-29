var webTeam = angular.module("webteam", ["ngRoute"]);
//'webcam','bcQrReader'
webTeam.config(function($routeProvider) {
    $routeProvider
        .when("/Webteam", {
           //controller: 'authenticationController',
           templateUrl: "UI/templates/main.html"
        })
        .when("/SignUp", {
           controller: 'signUpController',
           templateUrl: "UI/templates/signup.html"
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
