/* 
    We need this 2D array:
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    To look like this:
    [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ]

    rotate(given_array, n) where n is number of rows & columns.
*/

// function swap(num1, num2) {
//   let temp = num1;
//   num1 = num2;
//   num2 = temp;
// }

// function rotate(arr, n) {
//   let newArray = [...new Array(3).fill([])];

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(`Array ${arr[i][j]} and ${arr[j][i]}`);
//       newArray[j][i] = arr[i][j];
//     }
//   }
//   console.log(newArray);
//   //   arr.forEach(a => a.reverse());
//   return arr;
// }

// function rotateCoordinate(i,j,n){
//     return [j, n-1-i];
// }

function rotate(arr, n) {
  let newArray = arr;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let new_i = j;
      let new_j = n - 1 - i;
      newArray[new_i][new_j] = arr[i][j];
    }
  }
  console.log(newArray);
  return arr;
}

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3));
