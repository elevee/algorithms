// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const queue = [root, 's']; //using 's' as a delimiter of sorts. When we encounter it, it signifies the end of that row/level
    const counters = [0];
    while(queue.length){
        let current = queue.shift();
        if(typeof current === "string"){
            if(queue.length > 0){  // could also say while (queue.length > 1) above
                queue.push(current); //put delimiter/stopper back into the queue at the end
                counters.push(0); //we're done counting this row width. start a new counter for the next row
            }
        } else {
            if(current.children && current.children.length > 0){
                queue.push(...current.children);
            }
            counters[counters.length - 1]++;
        }
    }
    return counters;
}

module.exports = levelWidth;
