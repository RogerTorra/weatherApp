'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')
  .controller('MainCtrl', function ($scope, $http, $log , MainFactory) {
    var vm = this;
    
    // Set default values for our form fields.
    MainFactory.getLocation().then(function(response){
        console.log(response);
        vm.city = response.data.city;
    },function(errorData){
        vm.city = 'Madrid';
    });
    vm.units = 'metric';
    vm.change = change;

    // Trigger form submission for first load.
    //vm.change();

    // Define a function to process form submission.
    function change() {
        // Fetch the data from the public API through JSONP.
        // See http://openweathermap.org/API#weather.
        var url = 'http://api.openweathermap.org/data/2.5/weather';
        $http.jsonp(url, { params : {
            q : vm.city,
            units : vm.units,
            callback: 'JSON_CALLBACK',
            APPID:'84b6347084ad65774961a206dabb80e5'
            }}).
        success(function(data, status, headers, config) {
            vm.main = data.main;
            vm.wind = data.wind;
            vm.description = data.weather[0].description;
            vm.urlIcon = 'http://openweathermap.org/img/w/'+ data.weather[0].icon+'.png'
        }).
        error(function(data, status, headers, config) {
            // Log an error in the browser's console.
            $log.error('Could not retrieve data from ' + url);
        });
    };  
    
  });
