foodShop.factory('FoodFactory', function FoodFactory() {
 var factory = {};

 factory.iceCreamItems = [];
 var iceTotal = null;
 factory.pizzaItems = [];
 var pizzaTotal = null;

 factory.iceCreamOptions = [
 { name: "Chocolate", price: 2.49 },
 { name: "Cookies & Cream", price: 3.59 },
 { name: "Rocky Road", price: 2.29 },
 { name: "Mint", price: 2.19 },
 { name: "Vanilla", price: 2.29},
 ];

 factory.pizzaOptions = [
 { name: "Pepperoni", price: 10.50 },
 { name: "Cheese", price: 8.50 },
 { name: "Chicken Garlic", price: 13.50 },
 { name: "Pineapple", price: 13.50 },
 { name: "Glutenfree", price: 12.50},
 ];

 factory.addPizza = function(item) {
   factory.pizzaItems.push(item);
   pizzaTotal += factory.pizzaItems[0].price;
 };

 factory.addIceCream = function(item) {
   factory.iceCreamItems.push(item);
   iceTotal += factory.iceCreamItems[0].price;
 };

 factory.getIceTotal = function() {
   if (iceTotal === null) {
     return 0
   } else {
     return iceTotal.toFixed(2);
   }
 };

 factory.getPizzaTotal = function() {
   if (pizzaTotal === null) {
     return 0
   } else {
     return pizzaTotal.toFixed(2);
   }
 };
 return factory;
});
