
function shortestBridge(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let queue = [];
    let visited = new Set();

    // Directions for moving up, down, left, right
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Helper function to perform DFS and mark the first island
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0 || visited.has(`${r},${c}`)) {
            return;
        }
        visited.add(`${r},${c}`);
        queue.push([r, c]); // Add the land cell to the queue for BFS
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    // Fi