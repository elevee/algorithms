// O(n^2) solution
// function almostIncreasingSequence(sequence: number[]): boolean {
//   let isPossible = true;
//   //loop over sequence. For each number, we need to
//     // remove that number, loop over rest to see if each number is smaller than the following.
//     // if that remains the case, return true.
//   sequence.forEach((number, i) => {
//     isPossible = true;
//     let rest = [...sequence.slice(0, i), ...sequence.slice(i + 1)]; //concatenate slice before i, and after i to the end
//     rest.forEach((num, i) => {
//       if (rest[i + 1]) {
//         //avoid going out of bounds
//         if (num > rest[i + 1]) isPossible = false; //if number is greater than the next number
//       }
//     });
//   });
//   return isPossible;
// }

// UNSOLVED: In search of an O(n) solution...
function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0; //keep track of how many are out of sequence. If it's larger than 1, return false.
  //loop over sequence. For each number, we need to
  for (let i = 0; i < sequence.length; i++) {
    let el = sequence[i];
    el;
    //fake el removal by testing if el before and el after are in sequence
    let elBefore = sequence[i - 1];
    let elAfter = sequence[i + 1];
    elBefore;
    elAfter;
    console.log(el > elAfter);
    if (elBefore > el || el > elAfter) {
      count += 1;
    }
  }
  count;
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
