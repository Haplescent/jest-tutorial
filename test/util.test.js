const { add, minus } = require("../util/util");
describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if either argument isn't a string", () => {
      expect(() => add("2", 2).toThrowError());
    });
  });
});
describe("Minus", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(minus(6, 3)).toBe(3);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if either argument isn't a string", () => {
      expect(() => minus("6", 3).toThrowError());
    });
  });
});
