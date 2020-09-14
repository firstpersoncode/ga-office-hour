// Relative path:
// Relative dengan level nya file yang mengimport module:
// ./module.js => module 1 level dengan file yang mengimport module
// ./folder/module.js => module 2 level dengan file yang mengimport module
// ./folder/another-folder/module.js => module 3 level dengan file yang mengimport module
// ../module.js => module -1 level dengan file yang mengimport module
// ../../module.js => module -2 level dengan file yang mengimport module
// ../../../module.js => module -3 level dengan file yang mengimport module

const armyModule = require("./src/Army.js");
const { Army, Knight } = armyModule;

const army = new Army("First army");
const knight = new Knight("First knight");

console.log(army.getName());
console.log(knight.getName());
knight.attack();
