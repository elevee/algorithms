/* 
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. 
*/

// First go
// function findSumOfEvenFibs(){
//     let arr = [1, 2],
//         sum = 2,
//         max = 4000000;
    
//     for(var i=3; i<max; i++){ 
//         if(arr.length > 2) arr.shift(); //prevent arr from growing past 2 numbers by pruning off first element
//         let num = arr[0] + arr[1] //fib it
//         if(num > max){
//             return sum;
//         }
//         arr.push(num) //add to array
//         if(num % 2 === 0){ //sum if even
//             sum += num;
//         }
//     }
//     return sum;
// }

// Without using arrays
function findSumOfEvenFibs(){
    let num1 = 1, //set defaults for first two numbers
        num2 = 2,
        fibbed, //represents fibbed number of current iteration
        sum = 2,
        max = 4000000;
    
    for(var i=3; i<max; i++){ 
        fibbed = num1 + num2; //fib it first
        // console.log(`summing ${num1} and ${num2}: ${fibbed}`);
        if(fibbed % 2 === 0){ //sum if even
            sum += fibbed;
        }
        if(fibbed > max){ //if fib value is over our limit, we're done.
            return sum;
        }
        num1 = num2;
        num2 = fibbed;
    }
    return sum;
}

console.log(findSumOfEvenFibs()); //4613732