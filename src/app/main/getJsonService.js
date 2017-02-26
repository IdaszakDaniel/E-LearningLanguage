(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('GetJson', GetJsonService);

    function GetJsonService($http, $q) {
      var _data;
      return {

        loadJson: function(id) {
          return $http.get('answers'+Number(id)+'.json').then(function(data) {
            _data = data.data;
          });
        },
        
        getName: function() {
          return _data.name;
        },

        getQuestion: function() {
          return _data.question;
        },

        getAnswers: function() {
          return _data.tasks;
        }
      };
    }
})();
