
function makeElementsZero(arr) {
    // Helper function to calculate GCD of two numbers
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    // Calculate GCD of the array elemen