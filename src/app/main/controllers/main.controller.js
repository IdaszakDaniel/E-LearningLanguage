(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, ExerciseModel, GetJson, $compile, $stateParams, $localStorage, LocalStorage) {

    $scope.data = true;

    $scope.$storage = $localStorage.$default({
      eachViews: [],
      ob: {},
      save: []
    });

    LocalStorage.setEachViewStorage($localStorage.eachViews); //wczytywanie i zapis poprzedniego storage

    for (var key in $localStorage.ob) {
      LocalStorage.setLocalStorageData(key, $localStorage.ob[key]);
    }

    //console.log(GetJson.getName());
  /*  angular.element(".content").html(GetJson.getTest());
    $compile(angular.element(".content").contents())($scope);*/

    $scope.checkAnswers = function() {
      if($scope.data){
        ExerciseModel.userAnswers();
        $localStorage.save = $localStorage.ob;
        $localStorage.eachViews[$stateParams.id] = $localStorage.save;
        ExerciseModel.listOfItems().forEach(function(element) {
          $localStorage.save[element.id] = element.inputValue;
        });
      } 
      ExerciseModel.listOfItems();
      ExerciseModel.evaluateItems();
      ExerciseModel.visibility();
      $scope.result = ExerciseModel.getScore();
      $scope.data = !$scope.data;
      if ($scope.data) {
        ExerciseModel.resetValues();
        $scope.result = 0;
      }
      $scope.$broadcast("getAnswers", ExerciseModel.listOfItems());
    };

    console.log(ExerciseModel.listOfAnswers());
    /*$scope.showAnswers = [];
    $scope.showAnswers = ExerciseModel.listOfAnswers();*/

    $scope.taskName = function(){
      return ExerciseModel.taskName();
    };

    $scope.taskQuestion = function(){
      return ExerciseModel.taskQuestion();
    };
  }

})();
