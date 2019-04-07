/*
    You are given two arrays:
    A = [1,2,3,4,5,6,7]
    B = [4,5,6,7,1,2,3]
    
    * no duplicates
    Write a function that takes two arrays and returns true 
    if one is a rotation of the other.

    A rotation means that both arrays have the same elements in the same
    order, but start at different indices.

    Solve in O(n) time, assuming A & B have the same length.
*/

function isRotation(a, b) {
  if (a.length !== b.length) return false;
  ptrA = 0;
  ptrB = b.indexOf(a[ptrA]);
  if (!ptrB) {
    return false;
  } else {
    while (ptrA < a.length) {
      if (a[ptrA] !== b[ptrB]) {
        return false;
      } else {
        ptrA++;
        ptrB++;
        if (ptrB === a.length) {
          //we're at the end of array b and have to reset
          ptrB = 0;
        }
      }
    }
  }
  return true;
}

console.log(isRotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3])); //true
console.log(isRotation([1, 2, 3, 3, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3])); //false
