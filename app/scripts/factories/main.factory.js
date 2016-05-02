'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.factory:MainFactory
 * @description
 * # MainFactory
 * Factory of the weatherAppApp
 */
angular.module('weatherAppApp').factory('MainFactory', function ($http, $log) {
    var factory = {
        getLocation:getLocation,
    };
    var url = 'http://ipinfo.io';
    
    return factory;
    
    function getLocation(){
      return  $http.get(url, {}).
      success(function(data, status, headers, config) {
          console.log(data);
      }).
      error(function(data, status, headers, config) {
          // Log an error in the browser's console.
          $log.error('Could not retrieve data from ' + url);
      });
    }    
    
    

});