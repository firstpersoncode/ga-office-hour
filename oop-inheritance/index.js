// Import class class yang dibutuhkan
const Dog = require("./src/Dog");
const Cat = require("./src/Cat");
const petShop = require("./src/PetShop");

const petShop = new PetShop();

// mengisi result dengan 3 dog berdasarkan habitat nya
const dogHabitats = ["kintamani", "makassar", "jakarta"];
for (var i = 0; i < dogHabitats.length; i++) {
  // loop semua habitat
  const newDog = new Dog(dogHabitats[i], "Andika");
  petShop.addDog(newDog);
}

// mengisi result dengan 3 cat berdasarkan habitat nya
const catHabitats = ["hutan", "kota", "desa"];
for (var i = 0; i < catHabitats.length; i++) {
  // loop semua habitat
  const newCat = new Cat(catHabitats[i], "Dini");
  petShop.addCat(newCat);
}

console.log("-----------------DOG-----------------------");
for (var i = 0; i < petShop.dogs.length; i++) {
  const dog = petShop.dogs[i];
  dog.sayMyHabitat();
  if (dog.habitat === "makassar") {
    // kalau habitat dog dari makassar, maka panggil method dog.bark()
    console.log("anjing dari makassar mau guk guk..");
    dog.bark();
  }
}
console.log("-----------------CAT-----------------------");
for (var i = 0; i < petShop.cats.length; i++) {
  const cat = petShop.cats[i];
  cat.sayMyOwner();
  cat.miauw();
  try {
    console.log("Kucing mau coba menggonggong..");
    // instace cat tidak mempunyai method "bark", maka ini akan error
    cat.bark(); // error
  } catch {
    console.error("- ERROR: Kucing tidak bisa menggonggong..");
  }
}
