// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arr = str.split('');
    const hashmap = {};
    arr.forEach(char => {
      let re = new RegExp(char,"g");
      let count = (str.match(re) || []).length;
      hashmap[char] = count;
    });
    
    console.log(hashmap);
    let max_counter = 0;
    let winner = null;
    for (let char in hashmap){
      console.log("char is", char);
      
      if(hashmap.hasOwnProperty(char)){
        if(hashmap[char] > max_counter){
          max_counter = hashmap[char];
          winner = char;
        }
      }
      console.log(winner);
    }
    return winner;
}

module.exports = maxChar;
