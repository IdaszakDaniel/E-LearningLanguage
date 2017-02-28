(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, ExerciseModel, $stateParams) {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'app/main/directive/html/gap.directive.html',
      link: function($scope, element, attrs) {
        var Model = new Item();
        Model.setId(attrs.id);
        $scope.Model = Model;
        ExerciseModel.addItem(Model);

        $scope.$on("getAnswers", function(a, param) {
          param.forEach(function(answer){
            if (Model.toggleVisibility === true) {
              if (Model.id === answer.id) {
                $scope.Model.inputValue = answer.answer; 
              }
            } else {
              $scope.Model.inputValue = Model.userAnswer;
            }
          });
        });
        ExerciseModel.addName(GetJson.getName(), GetJson.getQuestion());
        GetJson.getAnswers().forEach(function(answer) {
          if (Model.id === answer.id) {
            Model.setAnswers(answer.answers);
            Model.setImg(answer.img);
            Model.setisExample(answer.isExample);
          }
        });
      }
    };
  };
})();
