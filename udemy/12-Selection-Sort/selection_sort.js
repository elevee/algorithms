/*
    Like bubble sort, but instead of first placing large values into
    sorted position, it places small values into sorted position.

    Scans array looking for minimum value, then makes the swap to the beginning
    of the array.

    - Store the first element as the smallest value you've seen so far.
    - Compare this item to the next item in the array until you find a smaller number
    - If the minimum is not the value (index) you initially began with, swap the two values
    - Repeat this with thenext element until the array is sorted

    PERFORMANCE: O(n^2). The only way this is slightly preferred over bubble sort is if
    the act of swapping/writing to memory is too intensive with bubble sort, this is SLIGHTLY
    better in that it makes a maximium of one swap at the end of each loop (rather than bubble 
    sort which could involve many swaps per loop). Otherwise it's a horribly performing algorithm.

    FROM WIKIPEDIA:
    In computer science, selection sort is a sorting algorithm, specifically an in-place 
    comparison sort. It has O(n2) time complexity, making it inefficient on large lists, 
    and generally performs worse than the similar insertion sort. Selection sort is noted 
    for its simplicity, and it has performance advantages over more complicated algorithms 
    in certain situations, particularly where auxiliary memory is limited.

    The algorithm divides the input list into two parts: the sublist of items already sorted, 
    which is built up from left to right at the front (left) of the list, and the sublist of 
    items remaining to be sorted that occupy the rest of the list. Initially, the sorted 
    sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds 
    by finding the smallest (or largest, depending on sorting order) element in the unsorted 
    sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted 
    order), and moving the sublist boundaries one element to the right.

*/

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        var lowest = i; //initially set lowest to first el index
        for(let j = i+1; j<arr.length; j++){ //i+1 because we want to compare with next element
            console.log(i, j);
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        } //we want to go through the whole array looking for the lowest index before swapping
        if(i !== lowest){ //swap em! We have a new lowest element, and that element is swapped to its final place
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17]));