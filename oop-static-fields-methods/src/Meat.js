class Meat {
  static slot = 0;

  constructor(weight, type) {
    this.weight = weight;
    this.type = type;
    this.id = 0;
  }

  onCreate() {
    Meat.slot++;
    this.id = Meat.slot;
  }
}

module.exports = Meat;
