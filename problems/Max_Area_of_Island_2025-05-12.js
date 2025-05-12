
function maxAreaOfIsland(grid) {
    let maxArea = 0;

    function dfs(i, j) {
        // If out of bounds or water (0), return 0
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return 0;
        }
        
        // Mark the current cell as visited
        grid[i][j] = 0;
        
        // Initialize the area for the curr