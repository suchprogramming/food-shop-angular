foodShop.controller('IceCreamCtrl', function IceCreamCtrl($scope, FoodFactory) {
  $scope.iceCreamOptions = FoodFactory.iceCreamOptions;
  $scope.iceCreamItems = FoodFactory.iceCreamItems;
  $scope.FoodFactory = FoodFactory;
  $scope.iceTotal = FoodFactory.getIceTotal;
});
