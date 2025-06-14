const add = (a, b) => {
  return a + b;
};
// This function takes two numbers as arguments and returns their sum.
// It is exported as a module so that it can be used in other files.

const subtract = (a, b) => {
  return a - b;
};
// This function takes two numbers as arguments and returns their difference.
// It is exported as a module so that it can be used in other files.

exports = {
  add,
  subtract,
};
