const Campfire = require("./src/Campfire");
const Beef = require("./src/Beef");
const Mutton = require("./src/Mutton");

const beef1 = new Beef(500);
const beef2 = new Beef(200);
const beef3 = new Beef(300);
const beef4 = new Beef(100);

const mutton1 = new Mutton(500);
const mutton2 = new Mutton(200);
const mutton3 = new Mutton(300);
const mutton4 = new Mutton(100);

Campfire.addMeat([
  beef1,
  beef2,
  beef3,
  beef4,
  mutton1,
  mutton2,
  mutton3,
  mutton4
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
