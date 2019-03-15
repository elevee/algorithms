function absoluteValuesSumMinimization(a: number[]): number {
    // Apparently from the video explainer, the hardest part about this one is
    // understanding the question. This is apparently asking for the median (?).
    
    // ????? ok...
    let lowest = Infinity;
    let lowestElement = null;
    for(num of a){
        console.log(`num: ${num}`);
        let sum = a.reduce((acc, cur) => {
            // console.log(`${acc} + ${Math.abs(cur-num)}`)
            return acc + Math.abs(cur-num)
        }, 0); 
        console.log(`Sum: ${sum}`)
        if(sum < lowest){
            lowest = sum;
            lowestElement = num;
        } else if(sum === lowest) { // If there are several possible answers, output the smallest one.
            lowestElement = Math.min(lowestElement, num)
        } else {
            console.log(`Lowest element is still: ${lowestElement}`)
        }
        // Math.min(sum, lowest);
        console.log(`Lowest element is now: ${lowestElement}`)
    }
    console.log(lowest)
    return lowestElement;

    // check if array has an even amount of elements, then find the median element
    // return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));