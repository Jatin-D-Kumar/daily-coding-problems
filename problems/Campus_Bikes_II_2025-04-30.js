
const assignBikes = (workers, bikes) => {
    const m = workers.length;
    const n = bikes.length;
    const dp = new Array(1 << n).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < (1 << n); mask++) {
        const workerIndex = countBits(mask);
        if (workerIndex >= m) continue;

        for (let bikeIndex = 0; bikeIndex < n; bikeIndex++) {
            if ((mask & (1 << bikeIndex)) === 0) { // If the bike is not already assigned
                const newMask = mask | (1 << bikeIndex);
                const distance = getDistance(workers[workerIndex], bikes[bikeIndex]);
                dp[newMask] = Math.min(dp[newMask], dp[mask] + distance);
            }
        }
    }

    return dp[(1 << n) - 1];
};

const countBits = (mask) => {
    let count = 0;
    while (mask > 0) {
        count += mask & 1;
        mask >>= 1;
    }
    return count;
};

const getDistance = (worker, bike) => {
    return Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
};

// Example usage:
const workers = [[0, 0], [1, 1]];
const bikes = [[1, 0], [2, 2], [0, 1]];
console.log(assignBikes(workers, bikes)); // Output the minimum distance
