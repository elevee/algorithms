/*
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
    There can be negative numbers in the array, but it will always be sorted.
*/

//First go (obviously not using multiple pointers, but this was the first implementation that came to mind)
// function countUniqueValues(sorted){
//     let uniques = sorted.reduce(function(acc, cur){
//         if(acc.indexOf(cur) === -1){
//             acc.push(cur)
//         }
//         return acc;
//     }, []);
//     // console.log(uniques);
//     return uniques.length;
// }

// USING MULTIPLE POINTERS - a bit less intuitive at first, but if you use i to represent the current number being worked on,
// and j as the scout pointer looking for duplicates, you can mutate the array in place (not nec) and just return the value of i
// at the end
// function countUniqueValues(arr){
//     let i = 0,
//         j = 1;
//         console.log(arr.length)
//     while(j <= arr.length){
//         // console.log(val)
//         if(arr[i] === arr[j]){ //it's a duplicate, iterate scout pointer only
//             j++;
//         } else { //unique value finished. Increment counter pointer (i) and scout pointer.
//             i++; //iterate (and therefore count) the value
//             arr[i] = arr[j]; //overwrite next value with new value for following comparisons
//             j++; //scout on!
//         }
//     }
//     return i;
// }

//another way to write this:
function countUniqueValues(arr){
    let i = 0;
    for(let j=1; j <= arr.length; j++){
        if(arr[i] !== arr[j]){ //it's a duplicate, iterate scout pointer only
            i++; //iterate (and therefore count) the value
            arr[i] = arr[j]; //overwrite next value with new value for following comparisons
        }
    }
    return i;
}

console.log(countUniqueValues([1,1,1,1,1,2])); //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2,-1,-1,0,1])); //4
console.log(countUniqueValues([1,2])); //2