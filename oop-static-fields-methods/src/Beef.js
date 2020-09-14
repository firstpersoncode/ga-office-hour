const Meat = require("./Meat");

class Beef extends Meat {
  constructor(weight, status = "Raw", type = "Beef") {
    super(weight, type);
    this.status = status;

    this.onCreate();
  }
}

module.exports = Beef;
