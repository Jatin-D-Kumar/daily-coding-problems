
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
    
    for (let denominat