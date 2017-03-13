(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, ExerciseModel, $stateParams, LocalStorage, $localStorage) {
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

        

        var storageValues = LocalStorage.getLocalStorageValues();
        console.log("storageValues ",storageValues);
        var storageKeys = LocalStorage.getLocalStorageKeys();
        console.log("storageKeys ",storageKeys);
        var eachViewStorage = LocalStorage.getEachViewStorage();
        console.log("eachViewStorage ",eachViewStorage);
        var eachViewArr = [],
            containThisView = "";

        for (var key in eachViewStorage) {
          eachViewArr.push(eachViewStorage[key]);
        }

        for (var i=0; i<= eachViewArr.length; i++) {
          if(i == $stateParams.id) {
            containThisView = eachViewArr[i];
          }
        }

        for (var key in containThisView) {
          if (Model.id == key) {
            $scope.Model.inputValue = containThisView[key];
          }
        }

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
