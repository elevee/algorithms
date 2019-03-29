/*
    We wnat to loop through the array, but modify it in place as we keep track
    of things like index, previous element, and move count. 
    
    Make sure the worst case scenario is still O(n) time complexity by not
    simply blindly iterating by 1 and checking, but iterating by 1 more than
    the previous element.
*/
function arrayChange(inputArray: number[]): number {
  let moveCount = 0;
  for (let i = 1; i < inputArray.length; i++) {
    const el = inputArray[i];
    const previousEl = inputArray[i - 1];
    if (previousEl >= el) {
      console.log(`previous El is larger!`);
      //the amount of moves it takes to surpass our current element if we
      //can only increment one at a time
      const amountOfMoves = previousEl - el + 1;
      inputArray.splice(i, 1, previousEl + 1); //replace current element with element 1 higher than previous
      moveCount += amountOfMoves;
    }
  }
  return moveCount;
}

console.log(arrayChange([1]));
console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([4, 1, 9, 44, 55]));
console.log(arrayChange([4, 1, 9, 44, 55, 38, 2]));
