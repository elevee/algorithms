const path = require('path');
const func = require('../'+path.basename(__filename));

test('sumNatural', () => {
  expect(func()).toEqual(4613732);
});