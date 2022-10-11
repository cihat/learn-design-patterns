const dog = {
  bark() {
    console.log(`Woof!`)
  },
}

const pet1 = Object.create(dog)

pet1.bark() // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1))
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__))

pet1.__proto__.meaw = () => console.log(`Meow!`)

pet1.meaw() // Meow!
dog.meaw() // Meow!
