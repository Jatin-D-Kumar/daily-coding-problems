
function tournamentWinners(matches) {
    const teamScores = {};

    // Iterate through each match
    for (const match of matches) {
        const [teamA, scoreA, teamB, scoreB] = match;

        // Initialize scores for teams if they don't exist
        if (!teamScores[teamA]) {
            teamScores[teamA] = 0;
        }
        if (!teamScores[teamB]) {
            teamScores[teamB] = 0;
        }

        // Update scores based on match results
        if (scoreA > scoreB) {
            teamScores[teamA] += 3; // Team A wins
        } else if (scoreB > scoreA) {
            teamScores[teamB] += 3; // Team B wins
        } else {
            teamScores[teamA] += 1; // Draw
            teamScores[teamB] += 1; // Draw
        }
    }

    // Find the team(s) with the highest score
    let maxScore = -1;
    const winners = [];

    for (const [team, score] of Object.entries(teamScores)) {
        if (score > maxScore) {
            maxScore = score;
            winners.length = 0; // Clear the winners array
            winners.push(team);
        } else if (score === maxScore) {
            winners.push(team);
        }
    }

    return winners;
}

// Example usage:
const matches =