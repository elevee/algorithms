/*
    QUICK SORT
    Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.

    Works by selecting one element (pivot) and finding the index where the pivot should end
    up in the sorted array.

    Once the pivot is positioned appropriately, quick sort can be applied on either side of
    the pivot.


    Demo that never happened:
    [5, 2, 1, 8, 4, 7, 6, 3]

*/

/* 
    PICKING A PIVOT
        - The runtime of quick sort depends in part on how one selects the pivot
        - Ideally, the pivot should be chosen so that it's roughly the median value in the dataset
            you're sorting.    

    PIGOT HELPER
    - In order to implement quick sort, it's useful to first implement a function responsible
        for arranging elements in an array on either side of a pivot
    - Given an array, this helper function should designate an element as the pivot
    - It should then rearrange elements in the array so that all values less than the pivot are
        moved to the left of the pivot, and all values greater than the pivot are moved to the
        right of the pivot.
    - The order of elements on either side of the pivot doesn't matter!
    - The helper should do this in place, that is, it should not create a new array.
    - When complete, the helper should return the index of the pivot.

    PIVOT PSEUDOCODE
    - It will help to accept three arguments: an array, a start index, and an end index
        (these can default to 0 and the array length minus 1, respectively)
    - Grab the pivot from the start of the array
    - Store the current pivot index in a variable (keeping track of where the pivot should end up)
    - Loop through the array
        - if the pivot is greater than the current element, increment the pivot index variable and
        then swap the current element with the element at the pivot index
    - Swap the starting element (i.e. the pivot) with the pivot index.
    - Return the pivot index.
*/ 

//FIRST GO
// function pivot(arr, start = 0, end = arr.length){
//     let pivot_placement_i = start; //Store the current pivot index in a variable (keeping track of where the pivot should end up)
//     let pivot_value = arr[start]; //Grab the pivot from the start of the array
//     for (let i = start; i < end; i++) { 
//         const element = arr[i];
//         if(pivot_value > element){ //if the pivot is greater than the current element
//             pivot_placement_i++; //increment the pivot index
            
//             let temp = arr[i];
//             arr[i] = arr[pivot_placement_i]; //swap the current element with the element at the pivot index
//             console.log(temp);
//             arr[pivot_placement_i] = temp;
//         }
//     }
//     let temp = arr[pivot_placement_i];
//     arr[pivot_placement_i] = pivot_value;
//     arr[start] = temp;
//     console.log(arr);
//     return pivot_placement_i;
// }


function pivot(arr, start = 0, end = arr.length-1){
    function swap(arr, i, j){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // FANCY ES6 VERSION OF SWAP:
    // const swap = (arr, idx1, idx2) {
    //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    // };

    let swapIdx = start; //Store the current pivot index in a variable (keeping track of where the pivot should end up)
    let pivot = arr[start]; //Grab the pivot from the start of the array
    for (let i = start+1; i <= end; i++) { //no need to loop over first el
        if(pivot > arr[i]){ //if the pivot is greater than the current element
            swapIdx++; //increment the pivot index
            swap(arr, swapIdx, i); //swap the current element with the element at the pivot index
        }
    }
    swap(arr, start, swapIdx) //Swap the starting element (i.e. the pivot) with the pivot index.
    console.log(arr);
    return swapIdx;
}

console.log(pivot([5,2,1,8,4,7,6,3])); //4 
console.log(pivot([4,8,2,1,5,7,6,3])); //3

/* 
    QUICKSORT PSEUDOCODE
    - Call the pivot helper on the array
    - When the helper returns the updated pivot index, recursively call the pivot helper on the subarray
        to the left of that index, and the subarray to the right of that index
    - Base case occurs when you consider a subarray with less than 2 elements
*/

function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){ //base case. Right is getting smaller until it's no longer greater than left, exits.
        let pivotIndex = pivot(arr, left, right);
        //left 
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));

/* 
  TIME COMPLEXITY - O(n log n) best case,     O(n^2) worst case
  SPACE COMPLEXITY - O(log n)

*/          