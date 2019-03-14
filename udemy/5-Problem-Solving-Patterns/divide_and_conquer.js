/*
    Given a sorted array of integers, write a function called search, that accepts
    a value and returns the index where the value passed to the function is located.
    If the value is not found, return -1.
*/

// The naive approach is to loop through all the items in the array, asking "are you 4? Are you 4?"
// That is O(n)

// Binary search trees, a divide and conquer algorithm, finds the midpoint and decides which array to move forward with. 
// Repeats ad nauseum until the value is found or not  
// O(log n)

function search(arr, val){
    let min = 0;
    let max = arr.length - 1;
    
    while(min <= max){
        let middle = Math.floor((min+max) / 2);
        console.log(middle);
        let currentElement = arr[middle];
        console.log(currentElement)
        if(currentElement < val){
            min = middle + 1;
        } else if (currentElement > val){
            max = middle - 1;
        } else {
            return middle;
        }
    }
}

console.log(search([1,2,3,4,5,6], 4)) //3
console.log(search([1,2,3,4,5,6], 6)) //5
console.log(search([1,2,3,4,5,6], 11)) //-1