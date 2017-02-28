(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, ExerciseModel, GetJson, $compile, $stateParams) {

    $scope.data = true;

    //console.log(GetJson.getQuestion());
    /*angular.element(".content").html(GetJson.getName());
    $compile(angular.element(".content").contents())($scope);*/

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

    $scope.showAnswers = ExerciseModel.listOfAnswers();

    $scope.taskName = function(){
      return ExerciseModel.taskName();
    };

    $scope.taskQuestion = function(){
      return ExerciseModel.taskQuestion();
    };
  }

})();
