//FIRST GO
// function arrayConversion(inputArray: number[]): number {
//   console.log(`inputArray starts at ${inputArray}`);
//   let iteration = 1;
//   while (inputArray.length > 1) {
//     for (let i = 0; i < inputArray.length; i++) {
//       const num = inputArray[i];
//       if (inputArray.length < 2) return inputArray[0]; //we're done if length is 1
//       if (iteration % 2 === 0) {
//         let product = num * inputArray[i + 1];
//         console.log(
//           `${i} is even. Multiplying ${num} by ${
//             inputArray[i + 1]
//           }   = ${product}`
//         );
//         inputArray.splice(i, 2, product);
//         // console.log(`inputArray after splice ${inputArray}`);
//         // console.log(`inputArray after mult push ${inputArray}`);
//       } else {
//         let sum = num + inputArray[i + 1];
//         console.log(
//           `${iteration} is odd. Adding ${num} to ${inputArray[i + 1]} =  ${sum}`
//         );
//         inputArray.splice(i, 2, sum);
//         // inputArray.push(sum);
//         // console.log(`inputArray after add push ${inputArray}`);
//       }
//       console.log(`inputArray is now ${inputArray}`);
//     }
//     iteration++;
//   }
//   return inputArray[0];
// }

//ANOTHER WAY - A SEPARATE FUNCTION THAT ASSEMBLES A NEW ARRAY AND REASSIGNS INPUT ARRAY
// O(log N) I believe...we end up halving the array to be looped on
function arrayConversion(inputArray: number[]): number {
  let isOdd = true;
  while (inputArray.length !== 1) {
    inputArray = sumOrProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }
  return inputArray[0];
}

function sumOrProduct(arr, isOdd) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArray.push(isOdd ? arr[i] + arr[i + 1] : arr[i] * arr[i + 1]);
  }
  return newArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
