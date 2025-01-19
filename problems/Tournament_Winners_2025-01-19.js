
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
            teamScores[tea