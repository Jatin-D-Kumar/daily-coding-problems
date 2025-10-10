
/**
 * Finds the maximum combined value of two non‑overlapping events.
 *
 * @param {number[][]} events   Each element: [start, end, value]
 * @return {number}
 */
function maxValue(events) {
    if (events.length < 2) return 0;          // not enough events

    // 1. Sort by start time (ascending)
    events.sort((a, b) => a[0] - b[0]);

    const n = events.length;
    const endTimes = new Array(n);
    const prefixMax = new Array(n);

    // 2. Build helpers
    for (let i = 0; i < n; i++) {
        endTimes[i] = events[i][1];
        const val = events[i][2];
        prefixMax[i] = i === 0 ? val : Math.max(prefixMax[i - 1], val);
    }

    let answer = 0;

    // 3. For each event, find best pair
    for (let i = 0; i < n; i++) {
        const start = events[i][0];
        const val   = events[i][2];

        // binary search for last end <= start
        let lo = 0, hi = i - 1, pos = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (endTimes[mid] <= start) {
                pos = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        let total = val;
        if (pos !== -1) total += prefixMax[pos];

        if (total > answer) answer = total;
    }

    return answer;
}

/* --------------------   Testing   -------------------- */
const tests = [
    {ev: [[1,3,4],[2,5,2],[4,6,5]], exp: 9},
    {ev: [[1,2,10],[3,4,20],[2,3,100],[4,5,30]], exp: 110},
    