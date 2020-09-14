const Meat = require("./Meat");

class Mutton extends Meat {
  constructor(weight) {
    super(weight, "Mutton");
  }
}

module.exports = Mutton;
