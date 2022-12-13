class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }

  getTotalPrice() {
    let total = this.basket.reduce(
      (total, candy) => total + candy.getPrice(),
      0
    );

    return parseFloat((total - this.discount).toFixed(2));
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }
}

module.exports = ShoppingBasket;
