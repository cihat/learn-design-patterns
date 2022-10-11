const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
}

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`)
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    obj[prop] = value
    return true
  },
})

personProxy.name
personProxy.age = 43

// With Reflect
const person2 = {
  name: "John Doe",
  age: 42,
  nationality: "American",
}

const personProxy = new Proxy(person2, {
  get: (obj, prop) => {
    if (!Reflect.has(obj, prop))
      console.log(`Hmm.. this ${prop} property name doesn't seem to exist`)
    else console.log(`The value of ${prop} is ${obj[prop]}`)
    return Reflect.get(obj, prop)
  },
  set: (obj, prop, value) => {
    console.log(
      `Changed ${prop} from ${Reflect.set(obj, prop, value)} to ${value}`
    )
    return Reflect.set(obj, prop, value)
  },
})

personProxy.test
personProxy.name
personProxy.age = 43

console.log(personProxy.name)
