function addTwoDigits(n: any): number {
    return n.toString().split('').reduce((acc, cur) => parseInt(acc)+parseInt(cur), 0);
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(77));
console.log(addTwoDigits(456)); //adds more than 2 digits