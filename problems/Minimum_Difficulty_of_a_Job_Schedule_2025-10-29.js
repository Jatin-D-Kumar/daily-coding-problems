
/**
 * Minimum Difficulty of a Job Schedule
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
function mnd(jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) return -1;             // impossible

    const INF = Number.POSITIVE_INFINITY;

    // dpPrev[i] – optimal cost for first i jobs in day-1 days
    let dpPrev = new Array(n + 1).fill(INF);
    dpPrev[0] = 0;                    // base case

    // iterate over days
    for (let day = 1; day <= d; day++) {
        const dpCurr = new Array(n + 1).fill(INF);

        // i = number of jobs already scheduled
        for (let i = day; i <= n; i++) {
            let maxJob = 0;

            // walk j backwards, compute max job in jobs[j … i-1]
            for (let j = i; j >= day; j--) {
                const job = jobDifficulty[j - 1];
                if (job > maxJob) maxJob = job;

                const prev = dpPrev[j - 1];
                if (prev !== INF) {
                    const candidate = prev + maxJob;
                    if (candidate < dpCurr[i]) dpCurr[i] = candidate;
                }
            }
        }
        dpPrev = dpCurr;  // prepare for next day
    }
    return dpPrev[n];
}

/* ----- Quick tests ----- */
console.log(mnd([6, 5, 4, 3, 2, 1], 2)); // 7
console.log(mnd([9, 9, 9], 4));          // -1
console.log(mnd([1, 1, 1], 3));          // 3
console.log(mnd([4, 3, 2, 1], 2));       // 5
