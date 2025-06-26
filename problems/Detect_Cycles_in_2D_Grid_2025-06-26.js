
function containsCycle(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [
        [1, 0], // down
        [-1, 0], // up
        [0, 1], // right
        [0, -1] // left
    ];

    function isValid(x, y, parentX, parentY) {
        return (
            x >= 0 &&
            x < rows &&
            y >= 0 &&
            y < cols &&
            grid[x][y] === grid[parentX][parentY] && // s