const Animal = require("./Animal");
/*
 Dog
 @desc:
 - class inherit dari class utama
 @fields:
 - inherit dari Animal
 @methods:
 - inherit dari Animal
 - bark => log
*/
class Dog extends Animal {
  constructor(habitat, owner) {
    super("dog", habitat, owner);
  }

  bark() {
    console.log("guk guk...");
  }
}

module.exports = Dog;
