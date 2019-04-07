/*
    Write a method to replace all spaces in a string with '%20'.
    You may assume that the string has sufficient space at the end 
    of the string to hold the additional characters, and that you
    are given the "true" length of the string. (Note: if implementing
    in Java, please use a character array so that you can perform this
    operation in place).
    EXAMPLE:
    Input:  "Mr John Smith    "
    Output "Mr%20John%20Smith"
*/

//Doing with a new str;
// function replaceSpaces(str) {
//   //loop through str, if char is "_", replace the char at that index with "%20"
//   // EDGE CASE: If current char is "_" && next char doesn't exist, or is another "_",
//   // delete/don't include that char.
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char === " " && !str[i+1] || (char === " " && str[i + 1] && str[i + 1] === " ")) {
//       break;
//     } else if (char === " ") {
//       newStr += "%20";
//     } else {
//       newStr += char;
//     }
//   }
//   return newStr;
// }

// Doing it in place

// function replaceAt(string, index, replacement) {
//   return string.substring(0, index) + replacement + string.substring(index);
// }

function replaceSpaces(str) {
  //loop through str, if char is "_", replace the char at that index with "%20"
  // EDGE CASE: If current char is "_" && next char doesn't exist, or is another "_",
  // delete/don't include that char.
  str = str.trimRight();
  let re = new RegExp(" ", "gi");
  str = str.replace(re, "%20");
  return str;
}

// console.log(replaceAt("hello moto", 2, "y"));

console.log(replaceSpaces("Mr John Smith    "));
console.log(replaceSpaces("Mr John Smith "));
