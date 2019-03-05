// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let output = [];
//     for (let num of array){
//         console.log(num);
//     }
// }

function chunk(array, size) {
    let output = [];
    let sub_array = [];
    for (let i = 0, j=array.length; i <= j; i++){
      console.log(array[i]);
      if(sub_array.length >= size || i == j){
        output.push(sub_array);
        sub_array = [];
      }
      sub_array.push(array[i]);
    }
    return output;
}

module.exports = chunk;
