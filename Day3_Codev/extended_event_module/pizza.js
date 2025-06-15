// Event Emitter

const EventEmitter = require("node:events");

class Pizza extends EventEmitter {
  constructor() {
    super(); // Call the parent constructor
    this.orderNumber = 0;
  }

  order(size, toppings) {
    this.orderNumber++;
    this.emit("Order", size, toppings); // Call the Event Listner
  }

  displayOrderNumber() {
    console.log(`Order is ${this.orderNumber}`);
  }
}

module.exports = Pizza;
