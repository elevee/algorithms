const path = require('path');
const func = require('../'+path.basename(__filename));

test('Largest Palindrome Product', () => {
  expect(func()).toEqual(4613732);
});