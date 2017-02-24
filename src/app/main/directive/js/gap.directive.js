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
          console.log("marian pedale:", param);
          param.forEach(function(answer){
            if(answer.id === Model.id){
              $scope.Model.inputValue = answer.answer;
            }
          });
        });

        //console.log(Model);
        GetJson.getData().then(function(data) {
          ExerciseModel.addName(data.name, data.question);
          data.tasks.forEach(function(answer) {
            //console.log(answer);
            if (Model.id === answer.id) {
      //        console.log(Item.toggleVisibility);
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
