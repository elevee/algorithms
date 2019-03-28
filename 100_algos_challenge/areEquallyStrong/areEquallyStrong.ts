// this is the solution, although the wording of the question was so
// confusing that it was tough to glean what they were asking.
function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return yourWeakest === friendsWeakest && yourStrongest === friendsStrongest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
