webTeam.controller("jobPostController", ['$rootScope', '$scope', '$location', 'intermediateService','$filter',
    function($rootScope, $scope, $location, intermediateService,$filter) {
        $rootScope.itIsLog = true;
        $scope.job = {};
        $scope.products = [];
        $scope.skilslist = function() {
            intermediateService.skillsList(function(response) {

                if (response.statusCode == 1) {
                    $scope.products = response.data;
                    console.log(response);
                } else if (response.statusCode == 0) {

                }
            });
        }

        $scope.tags=[];
        $scope.skilslist();
        $scope.jobSkills = [];
        
        $scope.skill={};
        $scope.pushSkill = function(){
            var objone = {};
            var objtwo = {};
            objtwo.skill = {};
            objone.text = $scope.skill.product.skill;
            objtwo.skill.id = $scope.skill.product.id;
            $scope.tags.push(objone);
            $scope.jobSkills.push(objtwo);
            $scope.skill = {};
            console.log($scope.jobSkills);
                       
        }
        $scope.post = function(){
            if (localStorage.getItem('userLoggedin') !== null) {
                var currentUser = JSON.parse(localStorage.getItem('userLoggedin'));
                console.log(currentUser[0]);
                id = currentUser[0].master;
            }
            data = {};
            data.taskName = $scope.job.taskName;
            data.taskDescription = $scope.job.taskDescription;
            data.jobSkills = [];
            data.master = {};
            data.master.id = id;
            data.jobSkills = $scope.jobSkills;
            data.taskStartDate = $filter('date')($scope.job.taskStartDate, "yyyy-MM-dd");
            data.taskEndDate = $filter('date')($scope.job.taskEndDate, "yyyy-MM-dd");
            console.log(data);
            intermediateService.postJob(data,function(response) {

                if (response.statusCode == 1) {
                    $scope.products = response.data;
                    console.log(response);
                    $location.path('/employerDashboard');
                } else if (response.statusCode == 0) {

                }
            });
                       
        }
        $scope.cancel =function(){
            $scope.job = {};
            $location.path('/employerDashboard');
        }
        $scope.today = function() {
            $scope.job.taskStartDate = new Date();
            $scope.job.taskEndDate = new Date();
           
        };
        $scope.today();

        $scope.clear = function() {
            $scope.job.taskStartDate = null;
            $scope.job.taskEndDate = null;
           
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            // dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function() {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };
        

        $scope.setDate = function(year, month, day) {
            $scope.job.taskStartDate = new Date(year, month, day);
            $scope.job.taskEndDate = new Date(year, month, day);
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };
         
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [{
            date: tomorrow,
            status: 'full'
        }, {
            date: afterTomorrow,
            status: 'partially'
        }];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }


    }
]);
