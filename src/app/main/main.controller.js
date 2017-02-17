(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, ExerciseModel) {

     $scope.checkAnswers = function() {
      console.log(ExerciseModel.evaluateItems());
    };
  }

})();
