/*
    Implement a function void reverse(char* str) in C or C++ which
    reverses a null-terminated string.
*/

// Obv not working in C here but gunna reverse a str anyway
// function reverse(str) {
//   let newStr = "";
//   for (let i = str.length-1; i > 0; i--) {
//       const char = str[i];
//       newStr += char;
//   }
//   return newStr;
// }

// or

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverse("do you know where the powder packets are?"));
