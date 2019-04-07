/*
    Find common elements in two arrays and return them in an array.

    Ex: 
    A = [1, 3, 4, 6, 7, 9]
    B = [1, 2, 4, 5, 9, 10]

    // [1, 4, 9]

    do it in an O(n+m) timeframe
*/

function commonElements(a, b) {
  let output = [];
  //make two pointers, one for array A and one for array B
  var ptrA = 0;
  var ptrB = 0;
  while (ptrA < a.length && ptrB < b.length) {
    if (a[ptrA] === b[ptrB]) {
      output.push(a[ptrA]);
      ptrA++;
      ptrB++;
    } else if (a[ptrA] > b[ptrB]) {
      //if element in A is larger, just increment B's pointer
      ptrB++;
    } else {
      //if element in B is larger, just increment A's pointer
      ptrA++;
    }
  }
  return output;
}

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 4, 5, 9, 10]));
