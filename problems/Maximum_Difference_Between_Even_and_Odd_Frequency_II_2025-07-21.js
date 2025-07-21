
function maxDifference(arr) {
    const freqMap = {};

    // Count the frequencies of each number
    for (let num of arr) {
        if (freqMap[num]) {
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }
    }

    let evenCount = 0;
    let oddCount = 0;

    // Calculate frequency of even and odd numbers
    for (let key in freqMap) {
        if (Number(key) % 2 === 0) {
            evenCount += freqMap[key];
        } else {
            oddCount += freqMap[key];
        }
    }

    // Return the maximum difference
    return Math.abs(evenCount - oddCount);
}

// Example usage
const arr = [1, 2, 2, 3, 4, 4, 4]