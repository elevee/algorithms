function isCaseInsensitivePalindrome(inputString: string): boolean {
    let lowerStr = inputString.toLowerCase(); //lowercase everything for consistency
    return lowerStr.split('').reverse().join('') === lowerStr;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));