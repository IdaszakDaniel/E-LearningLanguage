(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, ExerciseModel) {
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
             $scope.Model.inputValue = answer.answer; 
            } else {
              $scope.Model.inputValue = "";
            }
          });
        });

        GetJson.getData().then(function(data) {
          ExerciseModel.addName(data.name, data.question);
          data.tasks.forEach(function(answer) {
            if (Model.id === answer.id) {
              Model.setAnswers(answer.answers);
              Model.setImg(answer.img);
              Model.setisExample(answer.isExample);
            }

          });
        });
      }
    };
  };
})();
