(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('ExerciseModel', ExerciseModelService);

  /** @ngInject */
  function ExerciseModelService() {
    var _list = [];
    //var _title;
    //var _question;
    var answersList = [];

    return {
      addItem: function(model) {
        return _list.push(model);
      },

     /* addName: function(title, question){
        _title = title;
        _question = question;
      },

      taskName: function(){
        return _title;
      },

      taskQuestion: function(){
        return _question;
      },*/

      evaluateItems: function() {
        _list.forEach(function(element) {
          element.evaluate();
        });
        return _list;
      },

      visibility: function(){
        _list.forEach(function(element){
          element.toggleVisibility = !element.toggleVisibility;
        });
        return _list;
      },

      listOfItems: function(){
        return _list;
      },

      userAnswers: function() {
        _list.forEach(function(element) {
          element.setUserAnswer();
        });
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
