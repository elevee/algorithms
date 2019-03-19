/* 
    RADIX SORT - Special sorting algorithm that works on lists of numbers. It never makes 
    comparisons! (Not a comparison sort algorithm). IT exploits the fact that information about
    the size of a number is encoded in the number of digits. More digits means a bigger number!

    
*/

// FIRST GO
// function getDigit(num, place){ //returns the digit in num at the given place value
//     const stringNum = num.toString();
//     if(place < 0 || place > parseInt(stringNum.length)-1) return null; //edge cases
//     const pos = (place * -1) - 1;
//     return stringNum.substr(pos, 1); //
// }

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log( getDigit(3784, -1) );
console.log( getDigit(3784, 0) ); //4
console.log( getDigit(3784, 1) ); //8
console.log( getDigit(3784, 2) ); //7
console.log( getDigit(3784, 3) ); //3
console.log( getDigit(3784, 4) );
console.log( getDigit(3784, 5) );

// Need to figure out how many digits the element with the maximum amount of digits has

//FIRST GO
// function digitCount(num) { //returns the number of digits in num
//     return Math.abs(num).toString().length;
// }

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(-423)); //3
console.log(digitCount(0)); //1
console.log(digitCount(1)); //1
console.log(digitCount(25)); //2
console.log(digitCount(314)); //3

function mostDigits(arr){ //given an array of numbers, returns the number of digits in the largest numbers in the list
    let max = 0;
    for (num of arr){
        max = Math.max(digitCount(num), max);
    }
    return max;
}

console.log( mostDigits([1234, 56, 7]) ); //4
console.log( mostDigits([1, 1, 11111, 1]) ); //5
console.log( mostDigits([12, 34, 56, 78]) ); //2

/* 
    RADIX SORT PSEUDOCODE:
        - Define a function that accepts list of numbers
        - Figure out how many digits the largest number has
        - Loop from k=0 up to this largest number of digits
        - For each iteration of the loop:
            - Create buckets for each digit (0 to 9)
            - place each number in the corresponding bucket based on its kth digit
        - Replace our existing array with values in our buckets, starting with 0 and going up to 9
        - Return list at the end!
      
*/

function radixSort(arr){
    let largestDigit = mostDigits(arr);
    console.log(largestDigit)
    for (let k = 0; k < largestDigit; k++) {
        let obj = {};
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let index = 0; index < arr.length; index++) { //loop through numbers
            const num = arr[index];
            let digit = getDigit(num, k);
            digitBuckets[digit].push(num); //push number into bucket
        }
        let newArray = digitBuckets.reduce((acc, cur) => acc.concat(cur), []) //concatenate numbers
        // let newArray = [].concat(...digitBuckets) // ES6 way of doing same thing:
        
        arr = newArray //reassign arr to sorted list on kth digit
        console.log(`Newly sorted arr on ${k}th digit: `, arr);
    }
    return arr;
}

console.log( radixSort([1234, 56, 7]) );
console.log( radixSort([12, 56, 300, 4999, 1, 34, 4789, 7]) );

/* 
    TIME COMPLEXITY - O(nk) 
        n = length of array
        k = number of digits (avg)
    SPACE COMPLEXITY - O(n + k)
*/