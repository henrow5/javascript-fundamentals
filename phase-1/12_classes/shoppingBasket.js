class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  getTotalPrice() {
    return this.basket.reduce((total, candy) => total + candy.price, 0);
  }

  addItem(candy) {
    this.basket.push(candy);
  }
}

module.exports = ShoppingBasket;
