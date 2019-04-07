/* 
    Given two strings, write a method to decide if one 
    is a permutation of the other.
*/

function permutation(str1, str2) {
  const hash = {};
  for (const char of str1) {
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }
  for (const char of str2) {
    if (hash[char]) {
      hash[char]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(permutation("constitution", "conq"));
