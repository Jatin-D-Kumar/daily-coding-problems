
function calculateBowlingScore(frames) {
    let totalScore = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
        if (frames[frameIndex] === 10) { // Strike
            totalScore += 10 + frames[frameIndex + 1] + frames[frameIndex + 2];
            frame