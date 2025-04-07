
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function simplifiedFractions(n) {
    const result = [];
    
    for (let denominator = 2; denominator <= n; denominator++) {
        for (let numerator = 1; numerator < denominator; numerator++) {
            if (gcd(numerator, denominator) === 1) {
                result.push(`${numerator}/${denominator}`);
            }
        }
    }
    
    return result;
}

// Example usage:
const n = 5; // You can change this value to test with different denominators
console.log(simplifiedFractions(n));
