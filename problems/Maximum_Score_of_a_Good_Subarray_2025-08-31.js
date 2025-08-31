
function maximumScore(arr, k) {
    let n = arr.length;
    let maxScore = 0;

    for (let start = 0; start < n; start++) {
        let currentSum = 0;
        for (let end = start; end < n; end++) {
            currentSum += arr[end];
            // Assuming we want to maximize the score defined as:
            // score = currentSum / (end - start + 1) + k
            // You can adjust this formula based