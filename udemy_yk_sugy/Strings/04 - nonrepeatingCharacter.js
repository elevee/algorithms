/* 
    Implement a function that takes a string, and returns a character that appears
    only once. In this example, the character 'c' appears only once:
        nonRepeating("aabcb");
    If given:
        nonRepeating("xxyz");
    There are two characters that appear once, 'y' and 'z'. If this happens, return the first one, 'y'.
    Return null if none appear once.

    Solve in O(n) time.
*/

function nonRepeating(str) {
  const hash = {}; //keeps track of amounts. Values can be set to either (none), 1, or "nope" if over 1
  const queue = []; //our store for valid answers
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (!hash[el]) {
      hash[el] = 1;
      queue.push(el);
    } else if (hash[el] === 1) {
      //one already exists, this would be two.
      hash[el] = "nope";
      queue.splice(queue.indexOf(el), 1);
    } else {
      //the value is 'nope', we're ignoring it.
    }
  }
  return queue.shift() || null;
}

console.log(nonRepeating("aabcb"));
console.log(nonRepeating("xxyz"));
