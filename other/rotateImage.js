/*
    FIRST GO: Awful O(n^2) time complexity but the typical way to solve this. 
    To rotate 90deg right, you have to transpose (turn rows to columns), then reverse the arrays.
*/
// function rotateImage(a) {
//TO ROTATE: transpose the array rows to columns
//reverse rows
//instantiate newArray
//loop over arrays
//  loop over numbers
//  insert numbers into new arrays
//reverse each array

//   let newArray = [];
//   for (let i = 0; i < a.length; i++) {
//     newArray[i] = Array(a.length); //make 3 empty arrays
//   }

//   for (let i = 0; i < a.length; i++) {
//     //row
//     for (let j = 0; j < a[0].length; j++) {
//       // console.log(i, j);
//       newArray[j][i] = a[i][j];
//     }
//   }
//   return newArray.map(row => row.reverse());
// }

//Better memory would be to do all of this in place.

//Ninja solution. Takes advantage of XOR swap. More of a programmoing trick than a real-life strategy. Only works for sure with integers.
function rotateImage(a) {
  //Transpose
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
      a[i][j] ^= a[j][i];
      a[j][i] ^= a[i][j];
      a[i][j] ^= a[j][i];
    }
  }

  //Reverse columns
  for (let i in a) {
    a[i] = a[i].reverse();
  }
  return a;
}

console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// => [[7, 4, 1],[8, 5, 2],[9, 6, 3]]

var a = 4;
var b = 6;

console.log(c);
