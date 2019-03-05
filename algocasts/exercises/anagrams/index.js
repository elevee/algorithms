// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const charMapA = characterMap(stringA);
    const charMapB = characterMap(stringB);
    
    console.log("CHARMAP A is %o", charMapA);
    console.log("CHARMAP B is %o", charMapB);
  
    if(Object.keys(charMapA).length !== Object.keys(charMapB).length){
        return false;
    }

    for(let char in charMapA){
        if(charMapA[char] !== charMapB[char]){
            return false;
        }
    };
    
    return true;
  }

  function characterMap(str){
    let charMap = {};
    for(let char of str.replace(/[^\w]/g, "").toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap;
  }

module.exports = anagrams;
