
function cherryPickup(grid) {
    const n = grid.length;
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j] === -1) {
                dp[i][j] = -1; // Mark as unreachable
            } else {
                // Current cell is cherry
                let cherries = grid[i][j] === 1 ? 1 : 0;

                // Check the maximum cherries collected from the next positions
                const right = 