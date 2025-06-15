const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (toppings, size) => {
  console.log(`We are ordering pizza with ${toppings} and ${size}`);
});

emitter.on("order-pizza", (size) => {
  console.log(`The size of the pizza ${size}`);
});

emitter.emit("order-pizza", "Tomato", "2 Cm");
