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
    



    return serviceObject;

}]);
