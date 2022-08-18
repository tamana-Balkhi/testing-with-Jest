const Calculator = require('./calculator');

const calc = new Calculator();

describe('addition', () => {
  test('Add numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(10, 20)).toBe(30);
    expect(calc.add(-10, 5)).toBe(-5);
  });
});

describe('substraction', () => {
  test('subtract numbers', () => {
    expect(calc.subtracte(2, 3)).toBe(-1);
    expect(calc.subtracte(20, 10)).toBe(10);
    expect(calc.subtracte(-10, 5)).toBe(-15);
  });
});

describe('multiolication', () => {
  test('Multiply numbers', () => {
    expect(calc.multiply(2, 3)).toBe(6);
    expect(calc.multiply(10, 20)).toBe(200);
    expect(calc.multiply(-10, 5)).toBe(-50);
  });
});

describe('division', () => {
  test('division of numbers', () => {
    expect(calc.division(2, 0)).toBeUndefined();
    expect(calc.division(10, 20)).toBe(0.5);
    expect(calc.division(-10, 5)).toBe(-2);
  });
});