'use strict';

/**
 * @ngdoc overview
 * @name headerDemoUiApp
 * @description
 * # headerDemoUiApp
 *
 * Main module of the application.
 */
angular
  .module('headerDemoUiApp', [])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });
