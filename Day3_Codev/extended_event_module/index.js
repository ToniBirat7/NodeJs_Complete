const PizzaClass = require("./pizza");

const pizzaObj = new PizzaClass();

// Attach the Event Listner to the Extended Object
pizzaObj.on("Order", (size, toppings) => {
  console.log(
    `The ordered pizza has the size of ${size} with topppings ${toppings}`
  );
});

// Envoke the listener through the Order method.
pizzaObj.order("3 Cm", "Tomato");
