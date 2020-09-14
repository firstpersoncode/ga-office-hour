const Meat = require("./Meat");

class Mutton extends Meat {
  constructor(weight, status = "Raw", type = "Mutton") {
    super(weight, type);
    this.status = status;

    this.onCreate();
  }
}

module.exports = Mutton;
