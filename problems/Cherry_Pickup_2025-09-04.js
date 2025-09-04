
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
                const right = (j + 1 < n && dp[i][j + 1] !== -1) ? dp[i][j + 1] : -1;
                const down = (i + 1 < n && dp[i + 1][j] !== -1) ? dp[i + 1][j] : -1;
                
                dp[i][j] = cherries + Math.max(right, down);

                // If both down and right are unreachable, set current dp to -1
                if (dp[i][j] < 0) {
                    dp