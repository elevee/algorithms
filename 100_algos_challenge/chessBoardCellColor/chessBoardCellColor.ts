function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const board = { //for translating into coordinates
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    }
    const c1 = cell1.split('');
    let cell1x = board[c1[0]];
    let cell1y = c1[1];

    const c2 = cell2.split('');
    let cell2x = board[c2[0]];
    let cell2y = c2[1];
    // console.log(`${cell1x}, ${cell1y} and ${cell2x}, ${cell2y}`)
    // slope is (y2-y1)/(x2-x1)
    let slope = (cell2y - cell1y) / (cell2x - cell1x)
    if(Math.abs(slope) === 1) return true;
    return false;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
