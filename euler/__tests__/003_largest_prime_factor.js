var path = require('path');

const func = require('../'+path.basename(__filename));

// describe('hello', () => {
//     it('should output hello', () => {
//         expect(func()).toEqual('hello')
//     })
// })

test('prime numbers to be true', () => {
  expect(func.isPrime(2)).toEqual(true);
  expect(func.isPrime(3)).toEqual(true);
  expect(func.isPrime(5)).toEqual(true);
  expect(func.isPrime(47)).toEqual(true);
});

test('nonprime numbers to be false', () => {
  expect(func.isPrime(1)).toEqual(false);
  expect(func.isPrime(4)).toEqual(false);
  expect(func.isPrime(12)).toEqual(false);
  expect(func.isPrime(24)).toEqual(false);
});

test('highest primes', () => {
  expect(func.highestPrimeDivisor(13195)).toEqual(29);
  expect(func.highestPrimeDivisor(600851475143)).toEqual(6857);
});

// test('primes for 13195 are', () => {
//   expect(func(13195)).toEqual([5, 7, 13, 29]);
// });