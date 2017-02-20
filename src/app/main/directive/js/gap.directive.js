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
        console.log(Model);
        GetJson.getData().then(function(data) {
          console.log(data.name);
          console.log(data.question);
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
