
function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) return []; // If the length is odd, return empty array

    const count = new Map();
    const original = [];

    // Count the occurrences of each number
    for (const num of changed) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    // Sort the keys to process smaller numbers first
    const keys = Array.from(count.keys()).sort((a, b) => a - b);

    for (const num of keys) {
        if (count.get(num) > 0) {
            const doubleNum = num * 2;
            const occu