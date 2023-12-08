import caesarCipher from "../scripts/caesarCipher";

test('Easy', () => {
  expect(caesarCipher('ABC', 1)).toBe('BCD');
});

test('Mixed cases', () => {
  expect(caesarCipher('helloWorld', 5)).toBe('MJQQTBTWQI');
});

test('Limits', () => {
  expect(caesarCipher('z', 3)).toBe('C');
});

test('Big shift', () => {
  expect(caesarCipher('zaza', 29)).toBe('CDCD');
});
