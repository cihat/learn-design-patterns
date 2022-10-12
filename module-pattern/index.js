import addValues, { multiply as multiplyValues, subtract, square } from "./math.js"

function add(...args) {
  return args.reduce((acc, cur) => cur + acc)
}

function multiply(...args) {
  return args.reduce((acc, cur) => cur * acc)
}

/* From math.js module */
addValues(7, 8)
multiplyValues(8, 9)
subtract(10, 3)
square(3)

/* From index.js file */
add(8, 9, 2, 10)
multiply(8, 9, 2, 10)
