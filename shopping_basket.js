const ShoppingBasket = function () {
  this.basket = [];
}

ShoppingBasket.prototype.countOfItems = function () {
  return this.basket.length;
}

ShoppingBasket.prototype.addItem = function (item) {
  this.basket.push(item);
}

ShoppingBasket.prototype.removeItem = function (item) {
  this.basket.pop(item);
}

module.exports = ShoppingBasket;
