const ShoppingBasket = require('../shopping_basket.js');
const assert = require('assert');


describe('ShoppingBasket', function() {
let shoppingBasket;

beforeEach( function () {
  shoppingBasket = new ShoppingBasket();
});

it('shoppingasket should start empty', function () {
   assert.strictEqual(shoppingBasket.countOfItems(), 0);
 });


});
