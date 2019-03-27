// O(n) time, O(1) space
function alternatingSums(a: number[]): number[] {
  //loop through weights
  const firstTotal = 0,
    secondTotal = 0; //create two variables, firstTotal and secondTotal, set to 0.
  for (let i = 0; i < a.length; i++) {
    const weight = a[i];
    i % 2 === 0 ? (firstTotal += weight) : (secondTotal += weight); //if index is even, add it to first, else, second.
  }
  return [firstTotal, secondTotal];
  //return an array of two integers
  //first el - total weight of team1
  //second el - total weight of team2
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
