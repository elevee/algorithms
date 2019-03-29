// O(n)
function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  //loop through inputArray
  //if value === elemtoReplace, replace it with substitutionElem
  //return modified array

  inputArray.forEach((elem, i) => {
    if (elem === elemToReplace) {
      inputArray.splice(i, 1, substitutionElem);
    }
  });
  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
