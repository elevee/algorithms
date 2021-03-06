/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has
its corresponding value squared in the second array. The frequency
of values must be the same.    
*/

//NAIVE SOLUTION! n^2 time complexity
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

//MUCH BETTER SOLUTION: Adjacent loops instead of nested
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){ //is the correct key (not) present in 2nd array?
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ //do the amounts match? (if there are 2 '2's in the first, make sure there are 2 in the second)
            return false
        }
    }
    return true
}


same([1,2,3],[4,1,9]); //true
same([1,2,3],[1,9]); //false
same([1,2,1],[4,4,1]); //false (must be same frequency)