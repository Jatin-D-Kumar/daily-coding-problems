
function minimumMoves(target) {
    const queue = [[0, 0]]; // [current position, number of moves]
    const visited = new Set(); // To keep track of visited positions
    visited.add(0);

    while (queue.length > 0) {
        const [currentPosition, moves] = queue.shift();

        // Check if we have reached the target
        if (curre