const Animal = require("./Animal");
/*
 Cat
 @desc:
 - class inherit dari class utama
 @fields:
 - inherit dari Animal
 @methods:
 - inherit dari Animal
 - miauw => log
*/
class Cat extends Animal {
  constructor(habitat, owner) {
    super("cat", habitat, owner);
  }

  miauw() {
    console.log("meong meong..");
  }
}

module.exports = Cat;
