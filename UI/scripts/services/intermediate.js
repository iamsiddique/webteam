webTeam.factory('intermediateService', ['$rootScope', 'mainService', function($rootScope, mainService) {

    var serviceObject = {};

    serviceObject.cstockDetails = [];
    serviceObject.emplrSignup = function(data, callback) {
        

        mainService.emplrSignup(data).success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };

    serviceObject.empleSignup = function(data, callback) {
        
        mainService.empleSignup(data).success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };
    serviceObject.skillsList = function(callback) {
        
        mainService.skillsList().success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };
    serviceObject.jobList = function(callback) {
        
        mainService.jobList().success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };
    serviceObject.jobListMaster = function(id,callback) {
        
        mainService.jobListMaster(id).success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };
    serviceObject.restCountries = function(callback) {
        
        mainService.restCountries().success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };
    serviceObject.postJob = function(data,callback) {
        
        mainService.postJob(data).success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };
    serviceObject.signIn = function(data,callback) {
        
        mainService.signIn(data).success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };
    serviceObject.logout = function(id,callback) {
        
        mainService.logout(id).success(function(response) {
            callback(response);
        }).error(function(response) {
            callback(response);
        });
    };
    serviceObject.tokenUpdate = function(data) {
        
        mainService.tokenUpdate(data)
    };
    

    return serviceObject;

}]);
