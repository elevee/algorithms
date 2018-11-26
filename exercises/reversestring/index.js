// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const output = str.split('').reduce((_acc, num) => {
        _acc.unshift(num);
        return _acc;
    }, []);
    return output.join('');
}

console.log(reverse("holla"));

module.exports = reverse;
