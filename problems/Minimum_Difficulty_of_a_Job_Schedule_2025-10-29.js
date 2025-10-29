
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