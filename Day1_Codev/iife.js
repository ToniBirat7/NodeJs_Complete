(function (message) {
  console.log(message);
})("Hello, World!");

(function (a, b) {
  console.log(`The Sum is : ${a + b}`);
})(5, 3);
// This IIFE (Immediately Invoked Function Expression) prints "Hello, World!" and the sum of 5 and 3 to the console.
