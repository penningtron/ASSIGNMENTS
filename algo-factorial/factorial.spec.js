const factorial = require("./factorial.js");

test("tests factorial(4) = 24", () => {
  expect(factorial(4)).toBe(24);
});