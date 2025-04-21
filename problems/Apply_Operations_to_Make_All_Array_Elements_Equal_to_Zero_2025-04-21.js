
function makeElementsZero(arr) {
    // Helper function to calculate GCD of two numbers
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    // Calculate GCD of the array elements
    let currentGCD = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentGCD = gcd(currentGCD, arr[i]);
    }

    // Subtract the GCD from each element until all elements are zero
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] > 0) {
            arr[i] -= currentGCD;
        }
    }

    return a