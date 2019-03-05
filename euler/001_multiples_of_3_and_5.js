/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

//First go
function sumNatural(upperLimit){
    nums = Array.from(Array(upperLimit).keys());
    nums.shift(); //get rid of 0

    console.log(nums.reduce(function(acc, cur){
        // if (cur % 3 === 0) {
        //     console.log(`${cur} is a multiple of 3`)
        // }
        // if (cur % 5 === 0) {
        //     console.log(`${cur} is a multiple of 5`)
        // }
        return cur % 3 === 0 || cur % 5 === 0 ? acc+=cur : acc;
    }, 0))
}

// sumNatural(10)
sumNatural(1000)


