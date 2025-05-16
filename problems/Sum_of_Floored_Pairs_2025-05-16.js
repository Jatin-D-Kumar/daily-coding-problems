
function sumFlooredPairs(n) {
    let total = 0n;
    const max_j = Math.floor(Math.sqrt(n));
    for (let j = 1; j <= max_j; j++) {
        const jBigInt = BigInt(j);
        const m = BigInt(n) / jBigInt;
        const k_max = m / jBigInt;
        const numerator = m - (jBigInt - 1n);
        let k0;
        if (numerator < 0n) {
            k0 = 0n;
        } else {
            k0 = numerator / jBigInt;
        }
        let sum1 = 0n;
        if (k0