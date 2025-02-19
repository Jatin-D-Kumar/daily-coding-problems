
function climbStairs(n) {
    if (n <= 2) {
        return n; // If there are 1 or 2 steps, return n directly
    }

    let dp =