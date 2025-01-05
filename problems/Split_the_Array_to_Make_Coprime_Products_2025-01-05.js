
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function product(arr) {
    return arr.reduce((acc, val) => acc * val, 1);
}