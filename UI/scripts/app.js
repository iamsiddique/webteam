var webTeam = angular.module("webteam", ["ngRoute","ngTagsInput","ui.bootstrap","googleplus"]);
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
           controller: 'signinController',
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
        .when("/logout", {
           controller: 'logoutController',
           template: "<h1>hi</h1>"
        })
        .when("/", {
            //controller: 'authenticationController',
            templateUrl: "UI/templates/main.html"
        })
        .otherwise({redirectTo:'/'});
        


});
webTeam.config(['GooglePlusProvider', function(GooglePlusProvider) {
     GooglePlusProvider.init({
        clientId: '590215744992-lgahiclsdc0sgah8edt6vnul5trievj6.apps.googleusercontent.com',
        apiKey: 'AIzaSyDrcij_KcB_pj-8HKTFLpuMVfyjg2_LwmU'
     });
}]);
webTeam.run(['logCheck', '$rootScope', function(logCheck, $rootScope) {
    console.log('first called');
    var currentUser = logCheck.checkUser();
    console.log(currentUser);
    if(currentUser){
    $rootScope.secureheader ={};  
    $rootScope.secureheader = { headers: { "Content-type" : "application/json","token":currentUser.token,"user":currentUser.user }};
    console.log($rootScope.secureheader);
    }
}]);
