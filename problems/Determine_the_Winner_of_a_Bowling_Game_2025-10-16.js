
function calculateBowlingScore(frames) {
    let totalScore = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
        if (frames[frameIndex] === 10) { // Strike
            totalScore += 10 + frames[frameIndex + 1] + frames[frameIndex + 2];
            frameIndex++;
        } else if (frames[frameIndex] + frames[frameIndex + 1] === 10) { // Spare
            totalScore += 10 + frames[frameIndex + 2];
            frameIndex += 2;
        } else { // Open Frame
            totalScore += frames[frameIndex] + frames[frameIndex + 1];
            frameIndex += 2;
        }
    }

    return totalScore;
}

// Example usage:
const playerOneFrames = [10, 7, 3, 9, 0, 10, 0, 8, 8, 2, 10, 10, 10]; // 12 rolls (including extras in 10th)
const score = calculateBowlingScore(playerOneFrames);
console.log("Player 1 Score:", score);
