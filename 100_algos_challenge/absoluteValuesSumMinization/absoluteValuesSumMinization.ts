function absoluteValuesSumMinimization(a: number[]): number {
    // Apparently from the video explainer, the hardest part about this one is
    // understanding the question. This is apparently asking for the median (?).
    
    // ????? ok...

    // check if array has an even amount of elements, then find the median element
    return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));