
function maxStrength(arr) {
    // Filter out negative numbers
    const positiveStrengths = arr.filter(num => num > 0);

    // If there are no positive strengths, we can consider the maximum strength as 0
    if (positiv