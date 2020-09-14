class Army {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log("returning name:", this.name);
    return this.name;
  }
}

class Knight extends Army {
  attack() {
    console.log("this is knight, so he can attack!");
  }
}

module.exports = {
  Army,
  Knight
};
