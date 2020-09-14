/*
 Animal
 @desc:
 - class utama
 @fields:
 - species: string
 - habitat: string
 @methods:
 - sayMySpecies => log
 - sayMyHabitat => log
 - sayMyOwner => log
*/
class Animal {
  constructor(species, habitat, owner) {
    this.species = species;
    this.habitat = habitat;
    this.owner = owner;
  }

  sayMySpecies() {
    console.log("My species is", this.species);
  }

  sayMyHabitat() {
    console.log("My habitat is", this.habitat);
  }

  sayMyOwner() {
    console.log("My owner is", this.owner);
  }
}

module.exports = Animal;
