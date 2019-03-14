// First go
// function binarySearch (arr, value) { //array is sorted
//     let left = 0, //left pointer
//         right = arr.length - 1;
//     // console.log(right);
//     while(left < right){
//         let i = Math.floor((left+right)/2);
//         if(arr[i] == value){
//             return i;
//         } else if (arr[i] > value){
//             right = i;
//         } else {
//             left = i;
//         }
//     }
//     return -1;
// }

//Another way of phrasing: (I like my solution better...😏)
function binarySearch (arr, value) { //array is sorted
    let left = 0, //left pointer
        right = arr.length - 1,
        middle = Math.floor((left+right)/2);

    while(arr[middle] !== value && left <= right){
        if (arr[middle] > value){
            right = middle-1; //we already tested middle so go to next adjacent element
        } else {
            left = middle+1;
        }
        middle = Math.floor((left+right)/2);
    }
    return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([1,3,4,6,8,9,11,12,15,16,17,18,19], 6));
console.log(binarySearch([2,5,6,9,13,15,28,30], 15));
console.log(binarySearch([2,5,6,9,13,15,28,30], 10));