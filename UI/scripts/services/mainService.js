webTeam.config(function($httpProvider) {

	delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.factory('mainService',['$http','$rootScope',function($http, $rootScope) {

		$rootScope.urlBase = 'http://localhost:8383/webteam_rest/';
		$rootScope.header = {header: { "Content-type" : "application/json","Accept" : "application/json" }};
		
		var dataFetch = {};
		dataFetch.tokens = {};

		dataFetch.tokenUpdate = function(data){
			$rootScope.secureheader ={};			
			dataFetch.tokens = data;			
			$rootScope.secureheader = { headers: { "Content-type" : "application/json","token":dataFetch.tokens.token,"user":dataFetch.tokens.user }};
			console.log($rootScope.secureheader);
		}
		dataFetch.emplrSignup = function(data) {
		    return $http.post($rootScope.urlBase+'master/save', data, $rootScope.header);		    
		    
		};
		dataFetch.empleSignup = function(data) {
		    return $http.post($rootScope.urlBase+ 'worker/save', data, $rootScope.header);		    
		    
		};
		dataFetch.skillsList = function() {
		    return $http.get($rootScope.urlBase+ 'secure/skill/list', $rootScope.secureheader);		    
		    
		};
		dataFetch.jobList = function() {
			console.log($rootScope.secureheader);
		    return $http.get($rootScope.urlBase+ 'secure/job/list', $rootScope.secureheader);		    
		    
		};
		dataFetch.jobListMaster = function(id) {
			console.log($rootScope.secureheader);
		    return $http.get($rootScope.urlBase+ 'secure/job/list/' + id, $rootScope.secureheader);		    
		    
		};
		dataFetch.postJob = function(data) {
		    return $http.post($rootScope.urlBase+ 'secure/job/post',data, $rootScope.secureheader);		    
		    
		};
		dataFetch.restCountries = function() {
		    return $http.get('https://restcountries.eu/rest/v2/all', $rootScope.header);		    
		    
		};
		dataFetch.signIn = function(data) {
		    return $http.post($rootScope.urlBase+ 'user/login',data, $rootScope.header);		    
		    
		};  
		dataFetch.logout = function(id) {
		    return $http.get($rootScope.urlBase+ 'user/logout/' + id, $rootScope.header);		    
		    
		};       
		
		return dataFetch;
		
}])
.factory('logCheck',['$http','$rootScope',function($http, $rootScope) {

		
		var credentialFetch = {};

		credentialFetch.checkUser = function() {
			
		if (localStorage.getItem('userLoggedin') !== null) {
    	var currentUser = JSON.parse(localStorage.getItem('userLoggedin'));
    	console.log(currentUser[0]);
    	return currentUser[0];
    	} 
		    
		};
		return credentialFetch;
}]);