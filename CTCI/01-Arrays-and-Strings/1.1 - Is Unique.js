/* 
    1.1 Implement an algorithm to determine if a string has all unique characters. 
    What if you cannot use additional data structures?
*/

//FIRST GO, uses a data structure :(
// function strUnique(str){
//     let obj = {};
//     for(letter of str){
//         // console.log(letter);
//         ciLetter = letter.toLowerCase();
//         if(obj[ciLetter]) return false;
//         obj[ciLetter] = 1;
//     }
//     // console.log(obj);
//     return true;
// }

// O(n^2) approach, no additional data structures used  
function strUnique(string){
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) { // for each character, check remaining characters for duplicates
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
}



/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found. (uses data structure)
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSet(str) {
    let chars = new Set();
  
    for (let i = 0; i < str.length; ++i) {
      if (chars.has(str[i])) {
        return false;
      }
      chars.add(str[i]);
    }
    return true;
  }
  
  /**
   * Sort the original string first then iterate through it. Repeat characters
   * will show up next to eachother so fail if any two characters in a row
   * are the same.
   *
   * Time: O(N lg N)
   * Additional space: O(1)
   *
   * @param  {string[]} str String to check, passed in as a character array
   * @return {boolean}      True if unique characters, otherwise false
   */
  export function hasUniqueCharactersSort(str) {
    // sort string using quicksort
    str.sort();
  
    for (var i = 1; i < str.length; ++i) {
      if (str[i] === str[i - 1]) {
        return false;
      }
    }
    return true;
  }

console.log(strUnique("punxatawny"));
console.log(strUnique("phil"));