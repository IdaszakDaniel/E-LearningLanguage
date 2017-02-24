(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('ExerciseModel', ExerciseModelService);

  /** @ngInject */
  function ExerciseModelService() {
    var _list = [];
    var sum = 0;
    var _title;
    var _question;
    var answersList = [];

    return {
      addItem: function(model) {
        return _list.push(model);
      },

      addName: function(title, question){
        _title = title;
        _question = question;
      },

      taskName: function(){
        return _title;
      },

      taskQuestion: function(){
        return _question;
      },

      evaluateItems: function() {
        _list.forEach(function(element) {
          element.evaluate();
          //element.toggleVisibility();
        });
        return _list;
      },

      visibility: function(){
        _list.forEach(function(element){
          console.log(element.toggleVisibility = !element.toggleVisibility);
        });
        return _list;
      },

      listOfItems: function(){
        /*_list.forEach(function(item) {
          answersList.push(item.answer);
        });
        return answersList;*/ 
        return _list;
      },

      resetValues: function() {
        _list.forEach(function(element) {
          element.reset();
        });
        return _list;
      },
    }
  }
})();
