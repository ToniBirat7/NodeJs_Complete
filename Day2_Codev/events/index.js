const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (data) => {
  console.log("Pizza is Ordered", data);
});

emitter.on("order-pizza", (size, topping) => {
  console.log(`We are baking a pizza of ${size} with the ${topping} over`);
});

emitter.emit("order-pizza", "3 cm", "Tomato");
