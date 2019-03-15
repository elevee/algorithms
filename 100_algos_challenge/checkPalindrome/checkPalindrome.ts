function checkPalindrome(inputString: string): boolean {
    let str = inputString.toLowerCase();
    return str.split('').reverse().join('') === str;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
