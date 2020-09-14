const Meat = require("./Meat");

class Beef extends Meat {
  constructor(weight) {
    super(weight, "Beef");
  }
}

module.exports = Beef;
