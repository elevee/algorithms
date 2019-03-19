/*
    INSERTION SORT
    Builds up the sort by gradually creating a larger left half which
    is always sorted.

    PSEUDOCODE
    - Start by picking the second element in the array 
        (1st el is automatically sorted regardless of value)
    - Compare the second element with the one before it and swap if nec.
    - Continue to the next element and if it is in the incorrect order,
        iterate through the sorted portion (i.e. the left side) to place
        the element in the correct place.
    - Repeat until the array is sorted.

    PERFORMANCE - O(n^2)
    - One strength of insertion sort is if you're dealing with number sorting
    live, it sorts as it goes with an incomplete data set. So if 

*/

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) { //Start by picking the second element in the array 
        const current = arr[i];
        for (var j = i-1; j >= 0 && arr[j] > current; j--) { //we HAVE to use let here, as we try to access j outside the loop later
            arr[j+1] = arr[j]; //move number to the right
            console.log("arr is now", arr);
        }
        // when loop is done, we're at the position where the current value should be inserted (arr[j] is not > current anymore)
        arr[j+1] = current; //this won't work with 'let j'
    }
    return arr;
}

console.log( insertionSort([2,1,9,76,4]) );