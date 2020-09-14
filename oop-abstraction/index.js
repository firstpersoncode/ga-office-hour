// Abstraction
class Person {
  constructor(firstName, lastName) {
    // private fields
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  // public method biasa
  setName(fN) {
    console.log("setting full name using setName...");
    const [firstName, lastName] = fN.split(" ");
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  // encapsulations
  // private fields
  #firstName = "";
  #lastName = "";

  get fullName() {
    console.log("returning full name..");
    return this.#firstName + " " + this.#lastName;
  }

  set fullName(fN) {
    console.log("setting full name..");
    try {
      if (!fN) {
        throw "value must be not empty";
      }

      if (fN.split(" ").length < 2) {
        throw "value must have at least 2 words, firstName and lastName";
      }

      const [firstName, lastName] = fN.split(" ");
      this.#firstName = firstName;
      this.#lastName = lastName;
    } catch (err) {
      console.error("- ERROR:", err);
    }
  }
  // end of encapsulations
}

// Inheritance
class Agus extends Person {
  sayHello() {
    console.log("hello my full name is", this.fullName);
  }
}
// end of Inheritance
// end of Abstraction

const person = new Person("John", "Doe");
console.log(person.firstName); // undefined, cannot return private field
console.log(person.fullName);
person.setName("Jane Doe");
console.log(person.fullName);
var fullName = person.fullName;
console.log(fullName);
person.fullName = "Nasser Maronie";
console.log(person.fullName);
person.fullName = "Nasser"; // error, set fullName should have at least 2 words
person.fullName = ""; // error, cannot set empty name

const agus = new Agus("Agus", "Priyatin");
agus.sayHello();
