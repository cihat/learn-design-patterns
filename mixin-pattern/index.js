//* Add functionality to objects or classes without inheritance

//! Mixins allow us to easily add functionality to objects without inheritance by injecting functionality into an object's prototype.
//! Modifying an object's prototype is seen as bad practice, as it can lead to prototype pollution and a level of uncertainty regarding the origin of our functions.

class Dog {
  constructor(name) {
    this.name = name
  }
}

const animalFunctionality = {
  walk: () => console.log("Walking..."),
  sleep: () => console.log("Sleeping..."),
}

const dogFunctionality = {
  __proto__: animalFunctionality,
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
  walk() {
    super.walk()
  },
  sleep() {
    super.sleep()
  },
}

// Object.assign(dogFunctionality, animalFunctionality)
Object.assign(Dog.prototype, dogFunctionality)

const pet1 = new Dog("Daisy")

console.log(pet1.name) // Daisy
pet1.bark() // Woof!
pet1.play() // Playing!
pet1.walk()
pet1.sleep()
