class SuperHero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }

  display() {
    console.log(`SuperHero: ${this.name}, Power: ${this.power}`);
  }

  getName() {
    return this.name;
  }

  getPower() {
    return this.power;
  }
  setName(name) {
    this.name = name;
  }
  setPower(power) {
    this.power = power;
  }
}

module.exports = SuperHero;
// This code defines a SuperHero class with properties name and power, and methods to display and get/set these properties.
