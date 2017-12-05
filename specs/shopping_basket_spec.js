const ShoppingBasket = require('../shopping_basket.js');
const Item = require('../item.js');
const assert = require('assert');


describe('ShoppingBasket', function() {
let shoppingBasket;
let item1;
let item2;

beforeEach( function () {
  shoppingBasket = new ShoppingBasket();
  item1 = new Item('chocolate', 2, true);
  item2 = new Item('honey', 3, false);
});

it('shoppingBasket should start empty', function () {
   assert.strictEqual(shoppingBasket.countOfItems(), 0);
 });

 it('shoppingBasket should accept items', function () {
    shoppingBasket.addItem(item1);
    shoppingBasket.addItem(item2);
    assert.strictEqual(shoppingBasket.countOfItems(), 2);
  });

});
