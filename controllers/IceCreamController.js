foodShop.controller('IceCreamCtrl', function IceCreamCtrl($scope, FoodFactory) {
  $scope.iceCreamItems = [];
  $scope.iceCreamOptions = [
  { name: "Chocolate", price: 2.49 },
  { name: "Cookies & Cream", price: 3.59 },
  { name: "Rocky Road", price: 2.29 },
  { name: "Mint", price: 2.19 },
  { name: "Vanilla", price: 2.29},
  ]

  $scope.addIceCream = function(item) {
    $scope.iceCreamItems.push(item)
    console.log($scope.iceCreamItems);
  };
});
