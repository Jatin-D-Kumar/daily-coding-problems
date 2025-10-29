
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

        