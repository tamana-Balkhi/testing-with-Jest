const capitalize = require('./capital');

test('Capitalize First Letter', () => {
  expect(capitalize('afghanistan')).toBe('Afghanistan');
  expect(capitalize('balkh')).toBe('Balkh');
  expect(capitalize('kabul')).toBe('Kabul');
});