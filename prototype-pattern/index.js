class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Woof!`
  }
}

const dog1 = new Dog("Daisy")
const dog2 = new Dog("Max")
const dog3 = new Dog("Spot")

dog1.__proto__.play = () => console.log("Playing now!")
Dog.prototype.play = () => console.log("Playing now!")

console.log('test', dog1.__proto__ === Dog.prototype) // true

dog3.play()

class SuperDog extends Dog {
  constructor(name) {
    super(name)
  }

  fly() {
    console.log("Flying!")
    return "Flying!"
  }
}

console.log('test2', SuperDog.prototype.__proto__ === Dog.prototype) // true

const dog4 = new SuperDog("Daisy")
dog4.bark()
dog4.fly()