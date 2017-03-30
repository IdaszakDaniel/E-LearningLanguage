(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('LocalStorage', LocalStorageService);

  /** @ngInject */
  function LocalStorageService() {
    var _localStorageValues = [],
        _localStorageKeys = [],
        _eachViewStorage = []

    return {
      setLocalStorageData: function(key, localStorage) {
        _localStorageKeys.push(key);
        _localStorageValues.push(localStorage);
      },

      getLocalStorageValues: function() {
        return _localStorageValues;
      },

      getLocalStorageKeys: function() {
        return _localStorageKeys;
      },

      setEachViewStorage: function(eachView) {
        _eachViewStorage = eachView;
      },

      getEachViewStorage: function() {
        return _eachViewStorage;
      }
    }
  }
})();
