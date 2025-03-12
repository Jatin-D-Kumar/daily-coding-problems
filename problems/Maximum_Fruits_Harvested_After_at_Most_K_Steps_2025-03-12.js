
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

        // Calculate the number of steps needed to reach the leftmost position
        const stepsToLeft = Math.abs(startPos - minPos);
        const remainingSteps = k - stepsToLeft;

        // If we can reach this position and still collect fruits
        if (remainingSteps >= 0) {
            let totalFruits = 0;
            for (let i = left; i <= right; i++) {
                totalFruits += fruits[i][1];
            }
            maxFruits = Math.max(maxFruits, totalFruits);
        }
    }

    return maxFruits;
}

// Example usage:
const fruits = [[0,3],[6,4],[8,5]];
const startPos = 3;
const k = 2;
console.log(maxTotalFruits(fruits, startPos, k)); // Output: 0
