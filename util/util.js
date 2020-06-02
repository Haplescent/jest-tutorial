const add = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number") {
    throw new Error("Both parameter must be a number");
  }

  return num1 + num2;
};

const minus = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number") {
    throw new Error("Both parameter must be a number");
  }

  return num1 - num2;
};

const multiple = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number") {
    throw new Error("Both parameter must be a number");
  }

  return num1 * num2;
};

const divide = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number") {
    throw new Error("Both parameter must be a number");
  }

  return num1 / num2;
};

const power = (num1, num2) => {
  if (typeof num1 != "number" || typeof num2 != "number") {
    throw new Error("Both parameter must be a number");
  }

  return Math.pow(num1, num2);
};

// multiple, divide, power

module.exports = { add, minus, multiple, divide, power };
