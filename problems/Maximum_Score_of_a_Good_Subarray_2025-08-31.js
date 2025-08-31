
function maximumScore(arr, k) {
    let n = arr.length;
    let maxScore = 0;

    for (let start = 0; start < n; start++) {
        let currentSum = 0;
        fo