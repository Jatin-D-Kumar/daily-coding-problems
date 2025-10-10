
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
    const prefixM