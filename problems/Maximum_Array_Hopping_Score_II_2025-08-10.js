
function maxHoppingScore(arr) {
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return arr[0];
    if (n === 2) return Math.max(arr[0], arr[1]);

    // Create a dp array to store the maximum score at each index
    const dp = new Array(n);
    dp[0