'use strict';

/**
 * @ngdoc function
 * @name headerDemoUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the headerDemoUiApp
 */
angular.module('headerDemoUiApp')
  .controller('MainCtrl', function ($scope,$http) {

    load(); // load on initialization
    var vm = this;
    vm.greeting = "default";
    vm.refresh = refresh;

    function load() {
      $http.get('http://localhost:8080/greeting').
        success(function (data) {
          vm.greeting = data;
        });
    }

    function refresh(){
      load();
    }

  });
