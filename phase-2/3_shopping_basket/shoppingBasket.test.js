const ShoppingBasket = require("./shoppingBasket");

describe("ShoppingBasket", () => {
  it("returns an empty array", () => {
    const basket = new ShoppingBasket();
    expect(basket.basket).toEqual([]);
  });

  it("returns zero", () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });

  it("adds two candy objects", () => {
    const basket = new ShoppingBasket();
    const candyMock1 = {};
    const candyMock2 = {};
    basket.addItem(candyMock1);
    basket.addItem(candyMock2);
    expect(basket.basket.length).toBe(2);
  });

  it("returns the total price of 1 candy", () => {
    const basket = new ShoppingBasket();
    const candyMock1 = { getPrice: () => 4.99 };
    basket.addItem(candyMock1);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it("returns the total price of 3 candies", () => {
    const basket = new ShoppingBasket();
    const candyMock1 = { getPrice: () => 4.99 };
    const candyMock2 = { getPrice: () => 3.99 };
    const candyMock3 = { getPrice: () => 3.99 };
    basket.addItem(candyMock1);
    basket.addItem(candyMock2);
    basket.addItem(candyMock3);
    expect(basket.getTotalPrice()).toBe(12.97);
  });

  it("applies a discount and returns the total price of 3 candies", () => {
    const basket = new ShoppingBasket();
    const candyMock1 = { getPrice: () => 4.99 };
    const candyMock2 = { getPrice: () => 3.99 };
    const candyMock3 = { getPrice: () => 3.99 };
    basket.addItem(candyMock1);
    basket.addItem(candyMock2);
    basket.addItem(candyMock3);
    basket.applyDiscount(5);
    expect(basket.getTotalPrice()).toBe(7.97);
  });
});
