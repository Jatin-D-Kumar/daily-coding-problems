
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function maxPrimeDifference(arr) {
    let primes = arr.filter(isPrime);
    
    if (primes.length < 2) {
        return -1; // Not enough primes to calculate a difference
    }
    
    let maxPrime = Math.max(...primes);
    let minPrime = Math.min(...primes);
    
    return maxPrime - minPrime;
}

// Example usage:
const numbers = [10, 15, 3, 7, 2, 11, 13, 17];
const result = maxPrimeDifference(numbers);
console.log(result); // Output: 15 (17 - 2)
