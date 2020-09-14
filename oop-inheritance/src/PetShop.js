/*
 PetShop
 @desc:
 - class untuk menyimpan instance dari class Dog dan Cat
 @fields:
 - dogs: Dog[]
 - cats: Cat[]
 @methods:
 - addDog => void
 - addCat => void
*/
class PetShop {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  // method untuk mengisi this.dogs dengan instance Dog
  addDog(dog) {
    this.dogs.push(dog);
  }

  // method untuk mengisi this.cats dengan instance Cat
  addCat(cat) {
    this.cats.push(cat);
  }
}

module.exports = PetShop;
