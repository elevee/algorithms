// FIRST GO O(n) time complexity
// function adjacentElementsProduct(inputArray: number[]): number {
//   let maxProduct = -Infinity;
//   for (let i = 0; i < inputArray.length; i++) {
//     //doing one loop for performance
//     const element = inputArray[i];
//     const nextElement = inputArray[i + 1] ? inputArray[i + 1] : null;
//     if (nextElement) {
//       let product = element * nextElement;
//       maxProduct = Math.max(maxProduct, product);
//     }
//   }
//   return maxProduct;
// }

//this one starts loop at 1 to save ourselves a loop - O(n) time
function adjacentElementsProduct(inputArray: number[]): number {
  let maxProduct = -Infinity;
  for (let i = 1; i < inputArray.length; i++) {
    //doing one loop for performance
    const element = inputArray[i];
    const elementBefore = inputArray[i - 1] ? inputArray[i + 1] : null;
    if (elementBefore) {
      let product = element * elementBefore;
      maxProduct = Math.max(maxProduct, product);
    }
  }
  return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
