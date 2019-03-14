function bishopAndPawn(bishop: string, pawn: string): boolean {
    //first, we turn the board into coordinates
    const board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    }

    const bishopX = board[bishop[0]];
    const bishopY = parseInt(bishop[1]);
    console.log(bishopX, bishopY)

    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1]);
    console.log(pawnX, pawnY)

    // now, we find the slope of the two coords. Slope is (y2-y1) / (x2-x1)
    const slope = (pawnY - bishopY) / (pawnX - bishopX);

    if(Math.abs(slope) === 1) return true; //if slope is either 1 or -1 (bishop movements), we're in business
    return false;
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('a2', 'c3'));
console.log(bishopAndPawn('f1', 'a6'));