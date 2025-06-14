import math from "./math-esm.mjs"; // Importing the default export from math-esm.mjs

// Or

// import { add, subtract } from "./math-esm.mjs"; // Importing named exports directly

console.log(`The Sum is : ${math.add(5, 3)}`); // This line calls the add function with arguments 5 and 3 from the ES module
console.log(`The Difference is : ${math.subtract(5, 3)}`); // This line calls the subtract function with arguments 5 and 3 from the ES module
