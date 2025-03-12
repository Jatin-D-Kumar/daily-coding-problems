
function maxTotalFruits(fruits, startPos, k) {
    const n = fruits.length;
    let maxFruits = 0;

    // Iterate over possible leftmost and rightmost positions
    for (let left = 0; left < n; left++) {
        const minPos = fruits[left][0]; // leftmost position
        const maxPos = Math.min(fruits[left][0] + k, fruits[n-1][0]); // furthest right based on k steps

        // Binary search to find the rightmost position we can collect fruits from
        let right = left;
        while (right < n - 1 && fruits[right + 1][0] <= maxPos) {
            right++;
        }

        // Calculate the number of steps needed to