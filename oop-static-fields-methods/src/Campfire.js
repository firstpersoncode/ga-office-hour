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
    this.container = this.container.concat(meats);
  }

  static grill() {
    const statuses = ["Raw", "Medium", "Well done"];

    // this.container = this.container.map(meat => {
    //   meat.status = statuses[rand]
    //   return meat
    // })

    for (let i = 0; i < this.container.length; i++) {
      let rand = this.#getRandomInt(0, 2);

      if (this.container[i].weight > 300) {
        rand = this.#getRandomInt(0, 1);
      }

      this.container[i].status = statuses[rand];
    }
  }

  static eat() {
    // filter meat yang status nya "well done"
    // const meatWelldone = this.container.filter(meat => meat.status === "Well done")
    const meatWelldone = [];
    const mapType = {
      Beef: "beefs",
      Mutton: "muttons"
    };

    for (let i = 0; i < this.container.length; i++) {
      if (this.container[i].status === "Well done") {
        // masukan meat yang status welldone ke dalam this.eaten
        // sebelum dimasukkan ke this.eaten, kita validasi dlu, apakah dia sudah didalam this.eaten atau belum
        // kalau belum, baru kita masukkan
        const meatAlreadyEaten = this.eaten.find(
          meat => meat.id === this.container[i].id
        );
        if (!meatAlreadyEaten) {
          this.eaten.push(this.container[i]);
        }

        // update fullness berdasarkan type meat yang dimakan
        this.fullness[mapType[this.container[i].type]]++;
      }
    }

    // Hapus meat yang status nya "Well done" di dalam this.container
    this.container = this.container.filter(meat => meat.status !== "Well done");
  }
}

module.exports = Campfire;
