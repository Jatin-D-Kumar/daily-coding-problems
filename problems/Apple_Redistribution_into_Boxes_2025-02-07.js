
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
        distribution[i]++;
    }

    return distribution;
}

// Example usage:
const n = 10; // Total number of apples
const k = 3;  // Total number of boxes
const result = redistributeApples(n, k);
console.log(result); // Output: [4, 3, 3]
