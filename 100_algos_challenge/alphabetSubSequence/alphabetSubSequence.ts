//for my sanity
function range(begin, end) {
  output = []; //if we want an array
  //   let obj_index = 0;
  //   output = {};
  for (let i = begin.charCodeAt(); i <= end.charCodeAt(); i++) {
    output.push(String.fromCharCode(i)); //if we want an array
    // output[obj_index] = String.fromCharCode(i);
    // obj_index++;
  }
  return output;
}

// console.log(range("a", "z"));

//FIRST GO
// function alphabetSubsequence(s: string): boolean {
//   let alphabet = range("a", "z");
//   let position = -1;
//   for (const char of s) {
//     //loop through str. Don't need indices
//     // console.log(`index of ${char} is ${alphabet.indexOf(char)}`);
//     let newPos = alphabet.indexOf(char); //find the position the letter is in
//     if (newPos <= position) return false; //make sure it's greater than our current position (this handles duplicates)
//     position = newPos; //set new position to the most recent
//   }
//   return true;
// }

/*  
    IF we wanna do this without an alphabet, we can do so by just going
    by character codes. They are in order and as long as they are not less than 
    or equal to the previous one, it's valid.
*/
function alphabetSubsequence(s: string): boolean {
  let charCodes = s.split("").map(char => char.charCodeAt(0)); //creating array of charCodes
  let set = new Set(charCodes); // push each char into set. if lengths don't match up, we have duplicates (Set items are unique)

  if (set.size !== s.length) {
    //if Set enforces uniqueness, it's got duplicates.
    return false;
  } else {
    for (let i = 0; i < charCodes.length - 1; i++) {
      if (charCodes[i] > charCodes[i + 1]) return false; // if current charCode is greater than the next one, that ain't right!
    }
  }
  return true;
}

console.log(alphabetSubsequence("zab")); //false
console.log(alphabetSubsequence("effg")); //false
console.log(alphabetSubsequence("cdce")); //false
console.log(alphabetSubsequence("ace")); //true
console.log(alphabetSubsequence("bxz")); //true
