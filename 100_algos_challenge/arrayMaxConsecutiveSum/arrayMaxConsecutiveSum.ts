/*
    FIRST GO with refactor - O(n^2) worst case time complexity with reduce call potentially looping
    again another n times but usually less.
*/
// function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
//   const max = 0; //set a max value to return at the end
//   if (inputArray.length === 1) return inputArray[0];
//   for (let i = 0; i < inputArray.length && inputArray[i + k - 1]; i++) {
//     //added another constraint to stay in-bounds with respects to k elements
//     const subArray = inputArray.slice(i, i + k); //make subarray to sum
//     const sum = subArray.reduce((acc, cur) => acc + cur, 0); //sum arbitrary amt of #s
//     max = Math.max(max, sum);
//   }
//   return max;
// }

/*
    SECOND GO with much better time complexity - O(n) now as we're only looping through
    once.
*/

function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    //sum up to the kth value to initialize our max
    sum += inputArray[i];
  }
  max = sum;

  /*
    now we just loop through the remainder of the array (starting i at k), subtracting the 
    first value off of the range, and adding the current one in. Checking after each time 
    to see if we have a new max. This has been explained as the "floating window" strategy.
  */
  for (let i = k; i < inputArray.length; i++) {
    const current = inputArray[i];
    sum -= inputArray[i - k];
    sum += current;
    max = Math.max(max, sum);
  }
  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 0));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 1));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 5));
