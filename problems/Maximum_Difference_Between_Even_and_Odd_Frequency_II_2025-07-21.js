
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

    // Calculate frequency of even 