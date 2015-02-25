foodShop.controller('PizzaCtrl', function PizzaCtrl($scope, FoodFactory) {
  $scope.pizzaOptions = FoodFactory.pizzaOptions;
  $scope.pizzaItems = FoodFactory.pizzaItems;
  $scope.FoodFactory = FoodFactory;
  $scope.pizzaTotal = FoodFactory.getPizzaTotal;
});
