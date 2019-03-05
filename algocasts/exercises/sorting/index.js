// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // from j=0 to array length - i
            // if the element at j is greater than j+1
                // swap elements at j and j+1
    // console.log(`array starts at ${arr}`);
    for(let i=0; i<arr.length; i++){
    //   console.log(`Arr[i] is ${arr[i]}`);
        for(let j=0; j<(arr.length - i - 1); j++){ //since we're moving largest numbers to the right, we don't need to touch those anymore as they are already sorted!
            // console.log(`\tArr[i] (${arr[i]}) > Arr[j+1] (${arr[j]})?  ${arr[i] > arr[j]})`);
            if(arr[j] > arr[j+1]){  // we gotta make the switch
              let lesser = arr[j+1];
              arr[j+1] = arr[j];
              arr[j] = lesser;
              // console.log(`\t\tremoved el will be ${arr.splice(i,1)}`);
              // arr.splice(i, 0, arr.splice(i, 1));
            //   console.log(`\t\tarr is now ${arr} to be inserted at position ${j}`);
            }
        }
    }
    return arr;
}

function selectionSort(arr) { //The "prove me wrong algorithm"
    for(let i=0, j=arr.length; i<j; i++){
        let indexOfMin = i; //assume current index is lowest
        for(let j=i+1; j < arr.length; j++){ //iterate through rest of array
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i){ //if the index of the current element is not equal to the index of the lowest element, swap em
            let lesser = arr[indexOfMin]; //grab lesser num
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

function mergeSort(arr) { //recursive, goal is to split arrays into smaller arrays until we end up with a sorted array (by default) of one element
    if(arr.length === 1) return arr;
    let midpoint = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, midpoint);
    let secondHalf = arr.slice(midpoint);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(left, right) { //merges two already-sorted arrays
    let results = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    // results.concat(left).concat(right);
    // return results;
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
