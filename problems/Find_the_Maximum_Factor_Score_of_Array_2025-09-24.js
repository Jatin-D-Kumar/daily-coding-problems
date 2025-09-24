
function sumOfDivisors(n) {
    let sum = 0;
    
    // Loop through numbers to find divisors
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i; // i is a divisor
            if (i !== 1 && i !== n / i) {
                sum += n / i; // Add the corresponding divisor
       