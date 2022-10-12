const privateValue = "This is a value private to the module!"

export default function add(x, y) {
  return x + y
}

export function multiply(x) {
  return x * 2
}

export function subtract(x, y) {
  return x - y
}

export function square(x) {
  return x * x
}
