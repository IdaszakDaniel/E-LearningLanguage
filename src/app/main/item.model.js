(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('Item', ItemModel);

  /** @ngInject */
  function ItemModel() {

    var Item = function(id, answer, img, isExample) {
      this.id = id || 0;
      this.inputValue = "";
      this.answer = answer || "";
      this.img = img || "";
      this.isExample = isExample || "";
      this.evaluated = false;
      this.isCorrect = false;
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
