const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  it("returns Fizz if a number is a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(18)).toBe("Fizz");
  });

  it("returns Buzz if a number is a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
  });

  it("returns FizzBuzz if a number is a multiple of both 5 and 3", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it("returns the number if not a multiple of 3 or 5", () => {
    expect(fizzBuzz(8)).toBe(8);
    expect(fizzBuzz(11)).toBe(11);
  });
});
