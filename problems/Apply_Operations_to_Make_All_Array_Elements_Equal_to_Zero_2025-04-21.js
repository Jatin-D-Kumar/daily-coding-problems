
function makeElementsZero(arr) {
    // Helper function to calculate GCD of two numbers
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    // Calculate GCD of the array elements
    let currentGCD = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentGCD = gcd(currentGCD,