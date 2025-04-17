
function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function countKnightMoves(x, y, remainingMoves, memo) {
    // Base case: no remaining moves
    if (remainingMoves === 0) {
        return 1;
    }

    // Check if the result is already