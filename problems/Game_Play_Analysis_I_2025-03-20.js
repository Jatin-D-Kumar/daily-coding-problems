
function countPlayersAboveTarget(scores, target) {
    let count = 0;  // Initialize a counter for players above target

    for (let score of scores) {  // Loop through each score in the scores array
        if (score >= target) {    // Check if the score 