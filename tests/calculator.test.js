import Calculator from "../scripts/calculator";

const calc = new Calculator();

test('Add', () => {
  expect(calc.add(2, 2)).toBe(4);
});

test('Subtract', () => {
  expect(calc.subtract(2, 2)).toBe(0);
});

test('Subtract negative', () => {
  expect(calc.subtract(2, 4)).toBe(-2);
});

test('Multiply', () => {
  expect(calc.multiply(3, 3)).toBe(9);
});

test('Divide', () => {
  expect(calc.divide(2, 2)).toBe(1);
});

test('Divide by zero', () => {
  expect(calc.divide(2, 0)).toBe('No divide by zero');
});
