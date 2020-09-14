// global variable
var hello = "Hello";

function sayHello(hello) {
  console.log("local variable hello in sayHello:", hello);
}

sayHello("Halo");
console.log("global variable hello:", hello);

function updateLocalHello(hello) {
  hello = hello + " updated";
  sayHello(hello);
}

updateLocalHello("Bonjour");
console.log("global variable hello:", hello);

hello = "Koniciwa";
console.log("global variable hello:", hello);
updateLocalHello("Hola");
console.log("global variable hello:", hello);
