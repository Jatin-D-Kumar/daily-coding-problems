
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
            grid[x][y] === grid[parentX][parentY] && // same character
            (x !== parentX || y !== parentY) // not the parent
        );
    }

    function dfs(x, y, parentX, parentY) {
        if (visited[x][y]) return true;
        
        visited[x][y] = true;

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (isValid(newX, newY, x, y)) {
                if (visited[newX][newY] || dfs(newX, newY, x, y)) {
                    return true;
                }
            }
        }
        return false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1)) {
                    return true; // cycle detected
                }
            }
        }
    }

    return false; // no cycles found
}

// Example Usage
const grid = [
    ['a', 'b', 'b', 'a'],
    ['a', 'b', 'b', 'a'],
    ['b', 'a', 'a', 'a']
];

console.log(containsCycle(grid)); // Output: True or False based on cycle detection
