const SuperHero = require("./module_caching.js");

const batman = new SuperHero("Batman", "Gotham City", "Martial Arts");
console.log(`SuperHero Name: ${batman.getName()}`); // This line retrieves the name of the SuperHero
batman.setName("Bruce Wayne");
console.log(`Updated SuperHero Name: ${batman.getName()}`); // This line retrieves the updated name of the SuperHero

// New Implementation

const superman = new SuperHero("Superman", "Metropolis", "Flight");
console.log(`SuperHero Name: ${superman.getName()}`); // This line retrieves the name of the SuperHero
superman.setName("Clark Kent");
console.log(`Updated SuperHero Name: ${superman.getName()}`); // This line retrieves the updated name of the SuperHero

// This code demonstrates the use of a class to create SuperHero objects with methods to get and set their names.
// It also shows how to create multiple instances of the SuperHero class and manipulate their properties.

// Exports vs Modules Exports

const add = require("./exports_vs_modules_exports.js");

console.log(`The Sum is: ${add.add(5, 3)}`); // This line calls the add function with arguments 5 and 3 from the common module
console.log(`The Difference is: ${add.subtract(5, 3)}`); // This line calls the subtract function with arguments 5 and 3 from the common module
