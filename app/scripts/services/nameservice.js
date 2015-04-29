'use strict';

/**
 * @ngdoc service
 * @name headerDemoUiApp.nameService
 * @description
 * # nameService
 * Service in the headerDemoUiApp.
 */
angular.module('headerDemoUiApp')
  .service('nameService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var vm = this;
    vm.responsename = "default-response";


  });
