(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('Item', ItemModel);

  /** @ngInject */
  function ItemModel() {

    var Item = function(id, answer, img, isExample, evaluated, isCorrect, toggleVisibility, userAnswer) {
      this.id = id || 0;
      this.inputValue = "";
      this.answer = answer || "";
      this.img = img || "";
      this.isExample = isExample || "";
      this.evaluated = false;
      this.isCorrect = false;
      this.toggleVisibility = toggleVisibility || false;
      this.userAnswer = userAnswer || "";
    }

    Item.prototype = {
      setId: function(id) {
        this.id = id;
      },

      setAnswers: function(answer) {
        this.answer = answer;
      },

      setImg: function(img) {
        this.img = img;
      },

      setisExample: function(isExample) {
        this.isExample = isExample;
      },

      setUserAnswer: function(userAnswer) {
        this.userAnswer = this.inputValue;
      },

      reset: function() {
        this.evaluated = false;
        this.isCorrect = false;
      },

      evaluate: function() {
        this.evaluated = true;
        if(this.answer.toLowerCase() === this.inputValue.toLowerCase() ){
          this.isCorrect = true;
        }
      }
    };
    return Item;
  }
})();
