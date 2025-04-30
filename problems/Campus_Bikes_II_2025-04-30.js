
const assignBikes = (workers, bikes) => {
    const m = workers.length;
    const n = bikes.length;
    const dp = new Array(1 << n).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < (1 << n); mask++) {
        const workerIndex = countBits(mask);
        if (workerIndex >= m) c