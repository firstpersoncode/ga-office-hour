class Meat {
  static slot = 0;

  constructor(weight, type) {
    this.weight = weight;
    this.type = type;
    this.status = "Raw";
    this.id = 0;

    this.onCreate();
  }

  onCreate() {
    Meat.slot++;
    this.id = Meat.slot;
  }
}

module.exports = Meat;
