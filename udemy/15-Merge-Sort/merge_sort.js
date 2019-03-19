/* 
    MERGE SORT
    A divide and conquer algorithm that splits arrays down until they are arrays of 1 or 0. By default,
    those are already sorted. Then it's just about merging the sorted arrays back together.

    
    - In order to implement merge sort, it's useful to first implement a function responsible for merging
        two sorted arrays.
    - Given 2 arrays which are sorted, this helper function should create a new array which is also sorted, 
        and consists of all the elements in the two input arrays.
    - This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed
        to it. (you should visit each item in the array one time. Dealing with 2 elements so n + m).
    
    PSEUDOCODE FOR MERGING ARRAYS
    - Create an empty array, take a look at the smallest values in each input array
    - while there are still values we haven't looked at...
        - if the value in the first array is smaller than the value in the second array, push the value
            in the first array into our results and move on to the next value in the first array.
        - if the value in the first array is larger than the value in the second array, push the value 
            in the second array into ouur results and move on to the next value in the second array
        - Once we exhaust one array, push in all remaining values from other array.
    
*/

// MERGE FUNCTION - FIRST GO
// function merge(arr1, arr2){ //arrays are assumed to be sorted
//     const output = [];
//     let i = 0, j=0; //indices of each array
//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             output.push(arr1[i]);
//             i++;
//         } else {
//             output.push(arr2[j]);
//             j++;
//         }
//     }
//     if(arr1.length - i){  //returns either negative (falsey) or positive (truthy)
//         for (let index = i; index < arr1.length; index++) {
//             output.push(arr1[index]);
//         }
//     }
//     if(arr2.length - j){
//         console.log(j)
//         for (let index = j; index < arr2.length; index++) {
//             output.push(arr2[index]);
//         }
//     }
//     return output;
// }

// MERGE FUNCTION - Simplified to using while loops
function merge(arr1, arr2){ //arrays are assumed to be sorted
    const output = [];
    let i = 0, j=0; //indices of each array
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){ 
        output.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        output.push(arr2[j]);
        j++;
    }
    return output;
}

console.log( merge([1,10,50], [2,14,99,100]) );
console.log( merge([], [44,55,73]) );

/*
    THE SORTING PART OF MERGE SORT
    ARE YOU READY FOR SOME RECURSION???

    PSEUDOCODE
    - Break up the array into halves until you have arrays that are empty or have one element
    - Once you have those smaller, sorted arrays, merge those arrays with other sorted arrays
        until you are back at the full length of the array
    - Once the array has been merged back together, return the merged (and sorted!) array.
*/

// FIRST GO
function mergeSort(arr){
    if(arr.length <= 1){ return arr } //if we have a length of 0 or 1, it's sorted. Return it.
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

//Perhaps more readable
function mergeSort(arr){
    if(arr.length <= 1){ return arr } //if we have a length of 0 or 1, it's sorted. Return it.
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

console.log( mergeSort([55,29,1,9,45,3,16,99,22]) );

/* 
    TIME COMPLEXITY - O(n log n)
        O(log n) decompositions - times we need to split arrays into subarrays. The amount n grows,
                                the amount of decompositions grows at the rate of log n timmes.
        O(n) comparisons per decomposition - (if we have 1000 input elements, it'll eventually be 1000 comparisons)
                                (this is for the merge function. Not for mergeSort)
    
        Unless an algorithm takes advantage of some quirk in the data, O(n log n) is the best we can get
        for sorting. (a data-agnostic sorting algorithm). Merge sort is always O(n log n). Best, average,
        and worst case scenario.

    SPACE COMPLEXITY - O(n)
        As we have a larger input, we have to store more arrays. Can become a concern.
*/