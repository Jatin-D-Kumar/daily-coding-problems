
function divideIntoIncreasingSequences(arr) {
    if (arr.length === 0) return [];

    const result = [];
    let currentSequence = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];

        // Check if the current number can be added to the last sequence
        if (num > currentSequence[currentSequence.length - 1]) {
            currentSequence.push(num);
        } else {
            // If not, push the current sequence to the result and start a new one
            result.push(currentSequence);
            currentSequence = [num];
        }
    }

    // Don't forget to add the last sequence
    result.push(currentSequence);

    return result;
}

// Example usage:
const inputArray = [1, 2, 3, 2, 5];
const result = divideIntoIncreasingSequences(inputArray);
console.log(result); // Output: [[1, 2, 3], [2, 5]]
