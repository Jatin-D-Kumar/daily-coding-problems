
function minimumMoves(target) {
    const queue = [[0, 0]]; // [current position, number of moves]
    const visited = new Set(); // To keep track of visited positions
  