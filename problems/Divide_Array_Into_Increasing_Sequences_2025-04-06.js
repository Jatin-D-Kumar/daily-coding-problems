
function divideIntoIncreasingSequences(arr) {
    if (arr.length === 0) return [];

    const result = [];
    let currentSequence = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];

        // Check if the current number can be added to the last seque