(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('ExerciseModel', ExerciseModelService);

  /** @ngInject */
  function ExerciseModelService() {
    var _list = [];
    var sum = 0;

    return {
      addItem: function(model) {
        return _list.push(model);
      },

      evaluateItems: function() {
        _list.forEach(function(element) {
          element.evaluate();
        });
        return _list;
      }
    }
  }
})();
