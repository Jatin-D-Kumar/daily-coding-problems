
function maxStrength(arr) {
    // Filter out negative numbers
    const positiveStrengths = arr.filter(num => num > 0);

    // If there are no positive strengths, we can consider the maximum strength as 0
    if (positiveStrengths.length === 0) {
        return 0;
    }

    // Calculate the product of all positive strengths
    let product = 1;
    for (let strength of positiveStrengths) {
        product *= strength;
    }

    // Check 