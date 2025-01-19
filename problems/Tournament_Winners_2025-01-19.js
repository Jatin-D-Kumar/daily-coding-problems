
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
    