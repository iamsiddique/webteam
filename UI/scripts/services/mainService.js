webTeam.config(function($httpProvider) {

	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.factory('mainService',['$http','$rootScope',function($http, $rootScope) {

		//$rootScope.urlBase = 'http://166.62.40.162:8080/a2z/';
		$rootScope.urlBase = 'http://localhost:8080/webteam_rest/';
		$rootScope.header = {header: { "Content-type" : "application/json","Accept" : "application/json" }};
		$rootScope.uploadheader = { headers : { 'Content-Type' : undefined } };

		var dataFetch = {};

		dataFetch.emplrSignup = function(data) {
		    return $http.post($rootScope.urlBase+'master/save', data, $rootScope.header);		    
		    
		};
		dataFetch.empleSignup = function(data) {
		    return $http.post($rootScope.urlBase+ 'worker/save', data, $rootScope.header);		    
		    
		};
		
		return dataFetch;
		
}])
// .factory('logCheck',['$http','$rootScope',function($http, $rootScope) {

		
// 		var credentialFetch = {};

// 		credentialFetch.checkUser = function(callback) {
			
// 			if (localStorage.getItem('userLoggedin') !== null) {
//     	var currentUser = JSON.parse(localStorage.getItem('userLoggedin'));
//     	console.log(currentUser[0].password);
//     	callback(currentUser);
//     	} 
		    
// 		};
// 		return credentialFetch;
// }]);