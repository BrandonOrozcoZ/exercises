export function add(a, b) {
  return a + b;
}

export function substract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function factorial(a) {
  var result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }

  return result;
}

export function rootN(a, b) {
    return a ** (1/b)
}

export function pow(a, b) {
  return a ** b;
}

export default {
  add,
  substract,
  multiply,
  divide,
  factorial,
  rootN,
  pow,
};
