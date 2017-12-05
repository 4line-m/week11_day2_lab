const ShoppingBasket = function () {
  this.basket = [];
}

ShoppingBasket.prototype.countOfItems = function () {
  return this.basket.length;
}

module.exports = ShoppingBasket;
