class Calculator {
  add(a, b) {
    if (b < 0) {
      return "value shoulbe possitive"
    } else {
      return a + b;
    }
  }
  subtracte(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b === 0) {
      return undefined;
    } else {
      return a / b;
    }
  }
}

module.exports = Calculator;