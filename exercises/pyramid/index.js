// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//iterative
// function pyramid(n) {
//     let width = (2*n) - 1;
//     let midpoint = Math.floor(width/2);
//     // console.log(`n is ${n}`);
//     // console.log(`width is ${width}`);
//     for(let row = 0; row < n; row++){
//       // console.log(`row is ${row}`);
//       let level = '';
//       // console.log("midpoint is", midpoint);
//       for(let column = 0; column < width; column++){
//         if(midpoint - row <= column && midpoint + row >= column){
//           level += "#";
//         } else {
//           level += " ";
//         }
//         // console.log(`column is ${column}`);
//       }
//       console.log(level);
//     }
//     // console.log("_____________");
// }

//recursive
function pyramid(n, row = 0, level = ''){
    if(row === n) return;
    let width = (2*n) - 1;
    let midpoint = Math.floor(width/2);
    // console.log(`width is ${width}, midpoint is ${midpoint}`);
  
    if(level.length === width){ //we're done with this level. Log it and advance row
      console.log(level);
      return pyramid(n, row + 1);
    }
    let add;
    if(midpoint - row <= level.length && midpoint + row >= level.length){
      add = "#";
    } else {
      add = " ";
      // console.log(`level is now ${level} of length ${level.length}`);
    }
    return pyramid(n, row, level + add);
}

module.exports = pyramid;