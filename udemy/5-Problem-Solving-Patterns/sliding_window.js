/* 
    Write a function called maxSubarraySum which accepts an array of integers and a number called n.
    The function should calculate the maximum sum of n consecutive elements in the array.
*/

//FIRST GO, looks like n^2 though with the reduce.
// function maxSubarraySum(arr, n){
//     if(n > arr.length) return null;
//     let i = 0,
//         sum = -Infinity; //gotta start with an impossibly low number in event of negative numbers
//     // console.log(arr.slice(i+1,j+1));
//     for(let j=n; j<=arr.length; j++){
//         workingSum = arr.slice(i,j).reduce((acc,cur) => acc+cur);
//         // console.log(workingSum);
//         if(workingSum > sum) sum = workingSum;
//         i++;
//     }
//     return sum;
// }

//Let's do some sliding windows! This is O(n) as we're only looping once! (even if there are two for loops)
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) { //grab only the first sum of num digits
      maxSum += arr[i];
    }
    tempSum = maxSum; //save this sum and compare the rest to it moving on
    for (let i = num; i < arr.length; i++) { //iterate through the rest of the numbers
      tempSum = tempSum - arr[i - num] + arr[i]; //subtract the first number (arr[i-num]), while adding the next number (arr[i])
      maxSum = Math.max(maxSum, tempSum); //keep whichever is largest as the new max
    }
    return maxSum;
}
  
  

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)) //19

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)); //10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)); //17
console.log(maxSubarraySum([4,2,1,6], 1)); //6
console.log(maxSubarraySum([4,2,1,6,2], 4)); //13
console.log(maxSubarraySum([], 4)); //null
