
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

function splitArrayToMakeCoprimeProducts(arr) {
    const n = arr.length;

    // Check all possible splits
    for (let i = 1; i < (1 << n); i++) {
        const part1 = [];
        const part2 = [];