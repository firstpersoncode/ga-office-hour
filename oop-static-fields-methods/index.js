const Campfire = require("./src/Campfire");
const Beef = require("./src/Beef");
const Mutton = require("./src/Mutton");

Campfire.addMeat([
  new Beef(500),
  new Beef(200),
  new Beef(300),
  new Beef(100),
  new Mutton(500),
  new Mutton(200),
  new Mutton(300),
  new Mutton(100),
  new Beef(400),
  new Beef(390),
  new Beef(280),
  new Beef(290)
]);

console.log("---------------sebelum di grill---------------");
console.log("container", Campfire.container);
console.log("eaten", Campfire.eaten);
console.log("fullness", Campfire.fullness);
Campfire.grill();
console.log("---------------setelah di grill---------------");
console.log("container", Campfire.container);
console.log("eaten", Campfire.eaten);
console.log("fullness", Campfire.fullness);
console.log("---------------sebelum di eat---------------");
console.log("container", Campfire.container);
console.log("eaten", Campfire.eaten);
console.log("fullness", Campfire.fullness);
Campfire.eat();
console.log("---------------setelah di eat---------------");
console.log("container", Campfire.container);
console.log("eaten", Campfire.eaten);
console.log("fullness", Campfire.fullness);
