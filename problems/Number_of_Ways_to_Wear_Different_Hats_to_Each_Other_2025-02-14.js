
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function numberOfWaysToWearHats(n) {
    return factorial(n);
}

// Example usage:
const n = 5; // Number of people and hats
console.log(`Number of ways to wear different hats: ${numberOfWaysToWearHats(n)}`);
