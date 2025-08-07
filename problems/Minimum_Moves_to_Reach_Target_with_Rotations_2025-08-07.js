
function minimumMoves(target) {
    const queue = [[0, 0]]; // [current position, number of moves]
    const visited = new Set(); // To keep track of visited positions
    visited.add(0);

    while (queue.length > 0) {
        const [currentPosition, moves] = queue.shift();

        // Check if we have reached the target
        if (currentPosition === target) {
            return moves;
        }

        // Possible next positions
        const nextPositions = [currentPosition + 1, -currentPosition];

        for (const nextPosition of nextPositions) {
            // We only consider positions that haven't been visited
            if (!visited.has(nextPosition)) {
                visited.add(nextPosition);
                queue.push([nextPosition, moves + 1]);
            }
        }
    }

    return -1; // In case there's no way to reach the target (shouldn't happen in this problem)
}

// Example usage:
const target = 5;
console.log(minimumMoves(target)); // Output: Minimum moves to reach the target
