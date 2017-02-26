(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, ExerciseModel) {

    $scope.HideReset = true;
    $scope.data = true;

    $scope.checkAnswers = function() {
      if($scope.data) ExerciseModel.userAnswers();
      ExerciseModel.listOfItems();
      ExerciseModel.evaluateItems();
      ExerciseModel.visibility();
      $scope.data = !$scope.data;
      if ($scope.data) {
        ExerciseModel.resetValues();
      }
      $scope.$broadcast("getAnswers", ExerciseModel.listOfItems());
    };

    $scope.taskName = function(){
      return ExerciseModel.taskName();
    };

    $scope.taskQuestion = function(){
      return ExerciseModel.taskQuestion();
    };
  }

})();
