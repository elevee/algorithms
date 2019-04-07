/*
    Given an array like [1, 3, 1, 3, 2, 1], find the most frequently occurring element
    Solve in O(n) time.
*/

function mostFrequent(arr) {
  if (!arr.length) return null;
  const hash = {}; //make a hashtable
  let mostTimes = 0;
  let mostElement = null;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    hash[el] ? hash[el]++ : (hash[el] = 1);
    if (hash[el] > mostTimes) {
      mostTimes = hash[el];
      mostElement = el;
    }
  }
  return mostElement;
}

console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // 1
console.log(mostFrequent([1, 3, 1, 3, 2, 1, 3, 3])); // 3
console.log(mostFrequent([])); // null
