function avoidObstacles(inputArray: number[]): number {
  const sorted = inputArray.sort((x, y) => x - y);
  const largestValue = inputArray[inputArray.length - 1];
  for (let i = 1; i < largestValue + 1; i++) {
    // const element = array[i];
    if (
      sorted.every(element => {
        return element % i !== 0;
      })
    ) {
      return i;
    }
  }
  return -1;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([5, 3, 2, 1, 4]));
console.log(avoidObstacles([5]));
console.log(avoidObstacles([5, 0]));
