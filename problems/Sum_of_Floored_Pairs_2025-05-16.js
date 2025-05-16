
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
        if (k0 >= 1n) {
            sum1 = (jBigInt * k0 * (k0 + 1n) * (2n * k0 + 1n)) / 6n;
        }
        let sum2 = 0n;
        const k_start = k0 + 1n;
        if (k_start <= k_max) {
            const a = k_start;
            const b = k_max;
            // Compute S2 = sum of squares from a to b
            const S2 = (b * (b + 1n) * (2n * b + 1n) - (a - 1n) * a * (2n * (a - 1n) + 1n)) / 6n;
            // Compute S3 = sum of cubes from a to b
            con