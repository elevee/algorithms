//FIRST GO. Feels brutal.
// function alphabeticShift(inputString: string): string {
//   let output = "";
//   let alphaArray = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z"
//   ];
//   for (let i = 0; i < inputString.length; i++) {
//     const char = inputString[i];
//     console.log(alphaArray[i + 1]);
//     let nextIndex = alphaArray.indexOf(char) + 1;
//     output += alphaArray[nextIndex] ? alphaArray[nextIndex] : alphaArray[0];
//   }
//   return output;
// }

//Second Try. Map function. Made alphaArray instantiation less miserable
// function alphabeticShift(inputString: string): string {
//   let output = "";
//   let alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   ];

//   return inputString
//     .split("")
//     .map(char => {
//       let nextIndex = alphaArray.indexOf(char) + 1;
//       return alphaArray[nextIndex] ? alphaArray[nextIndex] : alphaArray[0];
//     })
//     .join("");
// }

//Another faster solution, but more tedious
function alphabeticShift(inputString: string): string {
  let output = "";
  let alphaObj = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a"
  };
  for (let i = 0; i < inputString.length; i++) {
    output += alphaObj[inputString[i]];
  }
  return output;
}

console.log(alphabeticShift("crazy"));
