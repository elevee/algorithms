// O(n) time, O(1) space
function areSimilar(a: number[], b: number[]): boolean {
  // Initialize a counter to zero
  // loop over first array
  // check for the first condition where the value at i in the
  // first array doesn't equals the one in second array at the
  // same index. Increment counter.
  // If counter increments a 2nd time, we swap these elements
  // and check for equality. If counter ever goes over 2,
  // return false to stop looping.
  // if we finish looping and counter <= 2, return true as we are
  // under or at our max allowed 2 elements to swap.
  const counter = 0;

  if (a.toString() === b.toString()) {
    return true; //return immediately if arrays are the same
  }
  for (let i = 0; i < a.length && counter <= 2; i++) {
    if (a[i] !== b[i]) counter++;
    if (counter > 2) return false;
  }
  return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
