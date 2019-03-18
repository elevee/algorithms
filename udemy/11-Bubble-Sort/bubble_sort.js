/*
    Write a function that sorts an unsorted array of numbers. Returns sorted array.

    Start looping with a variable called i from the end of the array towards the beginning

    Start an inner loop with a variable called j from the beginning until i-1
    if arr[j] > arr[j+1], swap those two values!
    Return the sorted array.

    O(n^2) with 2 loops, best-case scenario it ends up being 2n or O(n).

    FROM WIKIPEDIA:
    Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm 
    that repeatedly steps through the list, compares adjacent pairs and swaps them if 
    they are in the wrong order. The pass through the list is repeated until the list 
    is sorted. The algorithm, which is a comparison sort, is named for the way smaller 
    or larger elements "bubble" to the top of the list. Although the algorithm is simple, 
    it is too slow and impractical for most problems even when compared to insertion 
    sort.[2] Bubble sort can be practical if the input is in mostly sorted order with 
    some out-of-order elements nearly in position.

*/

function bubbleSort(arr){
    let noSwaps = false; //optimization
    for(let i = arr.length; i>0; i--){
        noSwaps = true;
        for(let j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([23,45,6,12,13]))

/* 
    DON'T DO THIS - DUMBER VERSION

    By doing it this way, we're comparing out-of-bounds elements, 
    and we're also comparing elements towards the end of the array 
    (like the very last element) which we KNOW are already sorted.
    They're done. A lot of wasted time/resources.

*/
function dumbBubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(dumbBubbleSort([23,45,6,12,13]));