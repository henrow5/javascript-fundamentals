const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("returns an array with Mars and Maltesers", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it("returns an array with Mars", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("returns an array with Skitties, Skittles and Starburst", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });

  it("returns an array with Skitties and Skittles", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });

  it("returns candies when given a lowercase search prefix", () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});
