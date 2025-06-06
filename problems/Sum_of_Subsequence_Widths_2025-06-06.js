
function sumSubseqWidths(A) {
    const n = A.length;
    // Sort the array
    A.sort((a, b) => a - b);
    
    let totalWidth = 0;
    const mod = 1e9 + 7; // To prevent overflow, we can use modulo

    // Precompute powers of 2 up to n
    const pow2 = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % mod;
    }

    // Calculate the total width
    for (let i = 0; i < n; i++) {
        // Contribution of A[i] as max and min
        totalWidth = (totalWidth + (A[i] * (pow2[i] - pow2[n - i - 1])) % mod) % mod;
    }

    return totalWidth;
}

// Example usage:
const A = [2, 1, 3];
console.log(sumSubseqWidths(A)); // Output: 6
