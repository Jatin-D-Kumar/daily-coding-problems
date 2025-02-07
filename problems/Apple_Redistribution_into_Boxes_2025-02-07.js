
function redistributeApples(n, k) {
    // If there are no boxes, we can't distribute apples
    if (k === 0) return [];

    // Calculate the number of apples per box and the remainder
    const applesPerBox = Math.floor(n / k);
    const remainder = n % k;

    // Create an array to hold the distribution
    const distribution = new Array(k).fill(applesPerBox);

    // Distribute the remainder apples
    for (let i = 0; i < remainder; i++) {
        distr