(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('GetJson', GetJson);

    /** @ngInject **/
    function GetJson($http, $q) {
      var _data = null;
      return {

        loadJson: function(id) {
          return $http.get('answers'+Number(id)+'.json').then(function(data) {
            _data = data.data;
            console.log(_data);
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
        },

        getTest: function(){
          return _data.content;
        }
      };
    }
})();
