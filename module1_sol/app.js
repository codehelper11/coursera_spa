(function(){
    'use strict';

    console.log("welcome");

    angular.module('week1',[])
        .controller('foodController',FoodController);

    FoodController.$inject = ['$scope'];

    function FoodController($scope){
        console.log($scope);
        $scope.foodList = "";

        $scope.checkFoodList = function(){
            if(!$scope.foodList){
                $scope.message="Please enter data first"
                return;
            }
            var foodList = $scope.foodList || "";
            var foodItems = foodList.split(',');
            if(foodItems.length <= 3){
                $scope.message="Enjoy!";
            }
            if(foodItems.length > 3){
                $scope.message="Too much!";
            }
        }
    }

})();


