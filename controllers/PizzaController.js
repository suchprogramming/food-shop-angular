foodShop.controller('PizzaCtrl', function PizzaCtrl($scope, FoodFactory) {
  $scope.pizzaItems = [];
  $scope.pizzaOptions = [
  { name: "Pepperoni", price: 10.50 },
  { name: "Cheese", price: 8.50 },
  { name: "Chicken Garlic", price: 13.50 },
  { name: "Pineapple", price: 13.50 },
  { name: "Glutenfree", price: 12.50},
  ];

  $scope.addPizza = function(item) {
    $scope.pizzaItems.push(item)
    console.log($scope.pizzaItems);
  };
});
