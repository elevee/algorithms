// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const output = str.split(' ').map(word => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(' ');
    // console.log(output);
    return output;
}

module.exports = capitalize;
