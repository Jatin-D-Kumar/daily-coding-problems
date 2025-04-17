
function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function countKnightMoves(x, y, remainingMoves, memo) {
    // Base case: no remaining moves
    if (remainingMoves === 0) {
        return 1;
    }

    // Check if the result is already computed
    const key = `${x},${y},${remainingMoves}`;
    if (memo[key] !== undefined) {
        return memo[key];
    }

    // Possible knight moves
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    let totalMoves = 0;

    // Explore all possible knight moves
    for (const [dx, dy] of moves) {
        const newX = x + dx;
        const newY = y + dy;
        if (isValidMove(newX, newY)) {
            totalMoves += countKnightMoves(newX, newY, remainingMoves - 1, memo);
        }
    }

    // Store the result in memoization object
    memo[key] = totalMoves;
    return totalMoves;
}

function numberOfValidMoveCombinations(startX, startY, moves) {
    const memo = {};
    return countKnightMoves(startX, startY, moves, memo);
}

// Example usage:
const startX = 0; // Starting x position
const startY = 0; // Starting y position
const moves = 2; // Number of moves to make
console.log(numberOfValidMoveCombinations(startX, startY, moves)); // Output the number of valid combinations
