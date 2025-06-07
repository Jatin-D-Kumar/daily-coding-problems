
function maxQuestions(questions) {
    const n = questions.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const [points, brainpower] = questions[i];
        // Iterate backwards to avoid overwriting the 