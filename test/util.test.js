const { add, minus, multiple, divide, power } = require("../util/util");

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

describe("Multiple", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(multiple(2, 3)).toBe(6);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if either argument isn't a string", () => {
      expect(() => multiple("2", 2).toThrowError());
    });
  });
});

describe("Divide", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(divide(10, 5)).toBe(2);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if either argument isn't a string", () => {
      expect(() => divide("2", 2).toThrowError());
    });
  });
});

describe("Power", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(power(2, 3)).toBe(8);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if either argument isn't a string", () => {
      expect(() => power("2", 2).toThrowError());
    });
  });
});
