'use strict';
angular
  .module('headerDemoUiApp')
  .factory('AuthInterceptor', function AuthInterceptor(nameService) {

    return {
      request: handleRequest,
      response: handleResponse
    };

    function handleRequest(config) {
      if (angular.isDefined(config.headers)) {
        config.headers['Request-Header'] = "frank";
      }
      return config;
    }

    function handleResponse(response) {
      console.log('Response: ' + JSON.stringify(response));

      if (angular.isDefined(response.config.headers['Response-Header'])) {
        var respHead = response.config.headers['Response-Header'];
        console.log('Response-Header: ' + respHead);
        nameService.responsename=respHead;
      }
      return response;
    }

  });
