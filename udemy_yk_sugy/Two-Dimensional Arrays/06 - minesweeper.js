/*
    bombs: location of bombs
    Ex: mine_sweeper([[0,0], [0,1]], 3, 4)
    
    [
        [0, 0],
        [0, 1]
    ]

    These arguments returns this array:
    [
        [-1,-1,1,0],
        [2,2,1,0],
        [0,0,0,0],
    ]
*/

function mineSweeper(bombs, num_rows, num_cols) {
  //create the board
  //   let board = [];
//   for (let row = 0; row < num_rows; row++) {
//     board.push([]);
//     for (let col = 0; col < num_cols; col++) {
//       board[row][col] = 0;
//     }
//   }

//   Could also just do 
  let board = [...Array(num_rows).fill([[][][]])];

  for (bomb of bombs) {
    board[bomb[0]][bomb[1]] = -1; //place the bomb
    //now loop over the surrounding cells
    for (let row = bomb[0] - 1; row <= bomb[0] + 1; row++) {
      if (board[row]) {
        for (let col = bomb[1] - 1; col <= bomb[1] + 1; col++) {
          if (board[col]) {
            console.log(`Checking cell ${row},${col}`);
            if (board[row][col] !== -1) {
              console.log(`${row},${col} needs incrementing`);
              board[row][col]++;
            }
          }
        }
      }
    }
  }

  console.log(board);
}

mineSweeper([[0, 0], [0, 1]], 3, 4);

// draw empty board by hard-coding zeros into a literal 2-D array
// loop over bombs and insert them into the board
// loop over board and fill out remaining values
