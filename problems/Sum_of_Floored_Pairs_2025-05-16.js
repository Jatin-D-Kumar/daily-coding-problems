
function sumFlooredPairs(n) {
    let total = 0n;
    const max_j = Math.floor(Math.sqrt(n));
    for (let j = 1; j <= max_j; j++) {
        const jBigInt = BigInt(j);
        const m = BigInt(n) / jBigInt;
        const k_max =