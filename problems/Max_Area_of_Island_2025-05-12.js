
function maxAreaOfIsland(grid) {
    let maxArea = 0;

    function dfs(i, j) {
        // If out of bounds or water (0), return 0
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return 0;
        }
        
        // Mark the current cell as visited
        grid[i][j] = 0;
        
        // Initialize the area for the current island
        let area = 1;

        // Explore all 4 directions: up, down, left, right
        area += dfs(i + 1, j); // down
        area += dfs(i - 1, j); // up
        area += dfs(i, j + 1); // right
        area += dfs(i, j - 1); // left

        return area;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if