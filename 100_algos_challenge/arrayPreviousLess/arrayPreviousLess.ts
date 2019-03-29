// FIRST GO: I hate to do nested loops but here we go
function arrayPreviousLess(items: number[]): number[] {
  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      //loop again from the previous element toward the beginning finding the first
      //value that satisfies the less-than comparison.
      if (items[j] < items[i]) {
        items.splice(i, 1, items[j]);
        break; //we're done looking for element i
      }
      items.splice(i, 1, -1);
    }
    if (i === 0) {
      //out of bounds edge case where we never enter nested loop because we're on the first el
      items.splice(i, 1, -1);
    }
  }
  return items; // return modified array
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
