/*
    Are two strings one action away?
    
    replacing:
    S1 = "abcde"
    S2 = "abfde"
     => true

    deleting:
    S1 = "abcde"
    S2 = "abde"
     => true

    adding:
    S1 = "xyz"
    S2 = "xyaz"
     => true

     Solve in O(n) time.
*/

/* in the case where there are more than 1 elements difference between the string lengths,
    there's no way we can do less than 2 operations to mutate it. Return false right away.

    In the case where the lengths are the same, loop through all chars in str1 and check 
    them against str2. Keep track of the edits and keep looping. If it finishes without
    incident, return true. If it encounters another difference, return false.

    In the case where there's one less item in s2 than s1, when a difference arises, we
    look at the next item in s1, and if it is the current s2 value, we see if it finishes
    the loop without another error.
*/

function isOneAway(s1, s2) {
  let moves = 0;
  if (Math.abs(s1.length - s2.length) >= 2) return false;
  if (s1.length === s2.length) {
    for (let i = 0; i < s1.length; i++) {
      const char = s1[i];
      if (char !== s2[i]) {
        moves++;
        if (moves > 1) return false;
      }
    }
    return true;
  } else {
    let firstStr = s1.length > s2.length ? s1 : s2; //decide what string to use as the base string
    let secondStr = s1.length < s2.length ? s2 : s1;
    for (let i = 0; i < firstStr.length; i++) {
      const char = firstStr[i];
      if (char !== secondStr[i]) {
        moves++;
        if (firstStr[i + 1] && firstStr[i + 1] === secondStr[i]) {
          //   continue;
        } else {
          return false;
        }
        if (moves > 1) return false;
      }
    }
  }
  return true;
}

console.log(isOneAway("abcde", "abfde")); //true
console.log(isOneAway("abcde", "abde")); //true
console.log(isOneAway("xyz", "xyaz")); //true
