/*
    Given an example of this:
    [
        [-1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, -1]
    ]

    We want to expand any clicks on cells marked '0' by expanding them 
    if the cells are close to each other/contiguous/however we wanna describe it. 
    The resulting array will look like this when we click cell [1,2]:

    [
        [-1, 1, -2, -2],
        [1, 1, -2, -2],
        [-2, -2, 1, 1],
        [-2, -2, 1, -1]
    ]


*/

//UNFINISHED!!!!
function click(field, num_rows, num_cols, given_i, given_j) {
  const queue = []; //where we'll put the cells that need to be processed
  if (field[given_i][given_j] === 0) {
    field[given_i][given_j] = -2;
    queue.push([given_i, given_j]);
  } else {
    return field;
  }

  // function search(board, cell) {
  //   console.log("checking", cell);
  //   return board;
  // }
  while (queue.length) {
    console.log("Queue ain't empty just yet!", queue);
    let cell = queue.shift();
    for (let row = cell[0] - 1; row < cell[0] + 1; row++) {
      for (let col = cell[1] - 1; col < cell[1] + 1; col++) {
        console.log(`row(${row}) >= 0? ${row >= 0}`);
        // if (row >= 0 && row <= num_rows && col >= 0 && col <= num_cols) {
        //   if (col >= 0 && col <= num_cols) {
        console.log(field[row][col]);
        if (field[row][col] === 0) {
          queue.push([row, col]);
        }
        // }
        //   }
      }
    }
  }
  console.log("field is");
  console.log(field);
}

console.log(
  click([[-1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, -1]], 4, 4, 1, 2)
);
