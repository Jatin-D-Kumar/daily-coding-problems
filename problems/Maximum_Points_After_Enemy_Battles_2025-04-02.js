
function maxPointsAfterBattles(battles) {
    let maxPoints = 0;

    for (let i = 0; i < battles.length; i++) {
        if (battles[i] > 0) {
            maxPoints += battles[i]; // Add positive points
        } else if (maxPoints + battles[i] > 0) {
            maxPoints += battles[i]; // Add negative points only if it won't 