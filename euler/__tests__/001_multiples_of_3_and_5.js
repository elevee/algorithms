const path = require('path');
const func = require('../'+path.basename(__filename));

test('sumNatural', () => {
  expect(func(10)).toEqual(23);
  expect(func(1000)).toEqual(233168);
});