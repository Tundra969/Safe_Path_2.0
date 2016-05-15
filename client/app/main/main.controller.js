'use strict';

(function() {



angular.module('testProjectApp')
  .controller('MainController', function($http, $uibModal) {
    this.results = "=";
    this.isHidden = true;
    var self = this;

    this.testFunc = function() {
       $http.get('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=mental-health-counselor&location=44.9778%2C-93.2650%2C100&user_location=44.9778%2C-93.2650&skip=0&limit=10&user_key=41718e01b8fe03f28c973af6d766278a').then(function(response){
        console.log(response.data.data[1].practices);
        self.results = response.data.data[1].practices;
        self.isHidden = false;
      });
    };

    this.showProfile = function() {
      $uibModal.open({
        templateUrl: 'profile.html'
      });
    };

  });

})();
