
function divideIntoIncreasingSequences(arr) {
    if (arr.length === 0) return [];

    const result = [];
    let currentSequence = [arr[0]];