const Candy = require("./candy");

describe("Candy", () => {
  it("creates", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.name).toBe("Mars");
    expect(candy.price).toBe(4.99);
  });

  it("returns the name of the candy using a getter", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe("Mars");
  });

  it("returns the price of the candy using a getter", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
});
