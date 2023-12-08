import capitalize from "../scripts/capitalize";

test('All small', () => {
  expect(capitalize('zaza')).toBe('Zaza');
});

test('All big', () => {
  expect(capitalize('BAUBAU')).toBe('BAUBAU');
});

test('Mixed', () => {
    expect(capitalize('hElLo')).toBe('HElLo');
});

test('Empty', () => {
    expect(capitalize('')).toBe('');
});

test('Number', () => {
    expect(capitalize(11)).toBe('');
});

test('Boolean', () => {
    expect(capitalize(false)).toBe('');
});