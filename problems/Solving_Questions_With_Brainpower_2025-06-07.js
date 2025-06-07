
function maxQuestions(questions) {
    const n = questions.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const [points, brainpower] = questions[i];
        // Iterate backwards to avoid overwriting the dp array
        for (let j = n; j >= 0; j--) {
            if (j + brainpower <= n) {
                dp[j + brainpower] = Math.max(dp[j + brainpower], dp[j] + points);
            }
        }
    }

    return Math.max(...dp);
}

// Example usage:
const questions = [
    [5, 2], // 5 points, 2 brainpower
    [3, 1], // 3 points,