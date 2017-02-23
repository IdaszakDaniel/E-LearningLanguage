(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, ExerciseModel) {

    $scope.HideReset = true;

     $scope.checkAnswers = function() {
      console.log(ExerciseModel.evaluateItems());
      $scope.HideCheck = true;
      $scope.HideReset = false;
    };

    $scope.reset = function(){
      ExerciseModel.resetValues();
      $scope.HideReset = true;
      $scope.HideCheck = false;
    };

    $scope.taskName = function(){
      return ExerciseModel.taskName();
    };

    $scope.taskQuestion = function(){
      return ExerciseModel.taskQuestion();
    };
  }

})();
