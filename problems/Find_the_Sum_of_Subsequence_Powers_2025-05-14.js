
const MOD = 1000000007;

function sumOfSubsequencePowers(arr) {
    let n = arr.length;
    
    // Calculate (1 + x)^n using the binomial expansion.
    // Precompute powers of 2 mod MOD
    let powerOfTwo = 1;
    let result = 0;
    
    // Iterate over the array and calculate the sum
    for (let i = 0; i < n; i++) {
        // Current number contribution to all subse