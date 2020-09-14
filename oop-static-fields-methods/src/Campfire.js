class Campfire {
  // private static method
  static #getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  static fullness = {
    beefs: 0,
    muttons: 0
  };

  static container = [];
  static eaten = [];

  static addMeat(meats) {
    if (!Array.isArray(meats)) {
      this.container.push(meats);
      return;
    }

    this.container = this.container.concat(meats);
  }

  static grill() {
    const statuses = ["Raw", "Medium", "Well done"];
    for (let i = 0; i < this.container.length; i++) {
      let rand = this.#getRandomInt(1, 2);

      // jika weight lebih 300, maka status meat akan lebih sulit untuk menjadi "Well done"
      if (this.container[i].weight > 300) {
        rand = this.#getRandomInt(-2, 2);
        if (rand < 0) {
          rand = 0;
        }
      }

      this.container[i].status = statuses[rand];
    }
  }

  static eat() {
    for (let i = 0; i < this.container.length; i++) {
      const meat = this.container[i];
      // jika status meat bukan lagi "Raw", maka masukan meat kedalam this.eaten
      if (meat.status !== "Raw") {
        // sebelum dimasukkan ke this.eaten, kita validasi dlu, apakah dia sudah didalam this.eaten atau belum
        let meatAlreadyEaten = false;
        for (let j = 0; j < this.eaten.length; j++) {
          const eatedMeat = this.eaten[j];
          if (eatedMeat.id === meat.id) {
            meatAlreadyEaten = true;
          }
        }
        // kalau belum, baru kita masukkan
        if (!meatAlreadyEaten) {
          this.eaten.push(meat);
        }

        // update this.fullness berdasarkan type meat yang dimakan
        if (meat.type === "Beef") {
          this.fullness.beefs++;
        } else if (meat.type === "Mutton") {
          this.fullness.muttons++;
        }
      }
    }

    // hapus meat di this.container yang ada di this.eaten
    for (let i = 0; i < this.eaten.length; i++) {
      const eatedMeat = this.eaten[i];
      this.container = this.container.filter(m => m.id !== eatedMeat.id);
    }
  }
}

module.exports = Campfire;
