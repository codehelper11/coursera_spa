(function(){

    'use strict';
    angular.module("mod2",[])
        .controller("ToBuyShoppingController",ToBuyShoppingController)
        .controller("AlreadyBoughtShoppingController",AlreadyBoughtShoppingController)
        .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

    ToBuyShoppingController.$inject=['$scope','ShoppingListCheckOffService'];

    function ToBuyShoppingController($scope,ShoppingListCheckOffService){

        var toBuy = this;
        toBuy.toBuyList = ShoppingListCheckOffService.getBuyList();

        toBuy.moveToBoughtList = function(index){
            ShoppingListCheckOffService.removeFromBuyAndAddToBoughtList(index);

        }
    }

    AlreadyBoughtShoppingController.$inject = ['$scope','ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController($scope,ShoppingListCheckOffService){
        var bought = this;
        bought.boughtList = ShoppingListCheckOffService.getBoughtList();

    }

    function ShoppingListCheckOffService (){

        var service = this;

        var toBuyList = [
            {name: "cookies", quantity: 10},
            {name: "choc", quantity: 1},
            {name: "candy", quantity: 2},
            {name: "icecream", quantity: 3},
            {name: "milk choc", quantity: 4}
        ];

        var boughtList = [];

        service.getBuyList = function(){
            return toBuyList;
        };

        service.removeFromBuyAndAddToBoughtList = function(index){
            boughtList.push(toBuyList[index]);
            toBuyList.splice(index,1);


        };

        service.getBoughtList = function(){
            return boughtList;
        }

    }

})();