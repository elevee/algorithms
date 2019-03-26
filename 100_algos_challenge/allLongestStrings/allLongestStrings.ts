function allLongestStrings(inputArray: string[]): string[] {
  let maxLength = 0;
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const el = inputArray[i];
    if (el.length > maxLength) {
      //if el length is greater than the maxLength, set a new maxLength and start a new output array
      maxLength = el.length;
      outputArray = [el];
    } else if (el.length === maxLength) {
      outputArray.push(el); //if el length equals maxLength, push it into the output
    }
    //otherwise, we do nothing and iterate. Length is less than maxLength
  }
  return outputArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(
  allLongestStrings([
    "pavel",
    "bushnievic",
    "sergei",
    "bobrovsky",
    "mikael",
    "grundstrom",
    "teppo",
    "numminen"
  ])
);
