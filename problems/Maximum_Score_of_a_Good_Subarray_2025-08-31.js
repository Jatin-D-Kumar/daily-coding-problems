
function maximumScore(arr, k) {
    let n = arr.length;
    let maxScore = 0;

    for (let start = 0; start < n; start++) {
        let currentSum = 0;
        for (let end = start; end < n; end++) {
            currentSum += arr[end];
            // Assuming we want to maximize the score defined as:
            // score = currentSum / (end - start + 1) + k
            // You can adjust this formula based on the problem's requirements
            let score = (currentSum / (end - start + 1)) + k;
            maxScore = Math.max(maxScore, score);
        }
    }

    return maxScore;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(maximumScore(arr, k)); // Call the function with your parameters
