// FIRST GO - O(n)
function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let max = 0; //keep track of a max variable
  for (let i = 0; i < inputArray.length - 1; i++) {
    //loop two elements at a time through the array
    let el = inputArray[i];
    let difference = Math.abs(el - inputArray[i + 1]); //take the absolute value of the two elements' difference
    max = Math.max(difference, max);
  }
  return max; //return the max
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0, 7]));
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0, 2, 8, 0, 1, 4]));
