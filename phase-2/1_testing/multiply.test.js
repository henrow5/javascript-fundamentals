const multiply = require("./multiply");

describe("multiply", () => {
  it("multiplies 3 and 2", () => {
    expect(multiply(3, 2)).toBe(6);
  });

  it("multiplies 5 and 3", () => {
    expect(multiply(5, 3)).toBe(15);
  });
});
