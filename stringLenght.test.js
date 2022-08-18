const stringLength = require('./stringLength');
const str = 'string';

test('string length of testing jest', () => {
  expect(stringLength(str)).toBe(str.length);
});

test('exception string', () => {
  expect(stringLength(str)).not.toEqual(0);;
  expect(stringLength(str)).not.toBeGreaterThan(10);
});