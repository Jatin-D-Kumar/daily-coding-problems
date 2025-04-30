
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
                const distance = getDistance(workers[workerIndex], bikes[