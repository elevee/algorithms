// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return Math.sign(n) * parseInt(n.toString().split("").reverse().join(""));
}

console.log("reverse of 341 is", reverseInt(341));
console.log("reverse of -629 is", reverseInt(-629));

module.exports = reverseInt;
