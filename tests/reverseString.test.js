import reverseString from "../scripts/reverseString";

test('All small', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('All big', () => {
  expect(reverseString('ABC')).toBe('CBA');
});

test('Palindrome', () => {
  expect(reverseString('abccba')).toBe('abccba');
});

test('Capitalized', () => {
  expect(reverseString('Hello')).toBe('olleH');
});
