
function tournamentWinners(matches) {
    const teamScores = {};

    // Iterate through each match
    for (const match of matches) {
        const [teamA, scoreA, teamB, scoreB] = match;

        //