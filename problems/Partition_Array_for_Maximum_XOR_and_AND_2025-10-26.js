
/*  Partition Array for Maximum XOR and AND
    ----------------------------------------------------
    Reads:  n  followed by n integers
    Prints: maximal value of prefix XOR XOR suffix AND ----------------------------------------------------
*/

'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

if (data.length === 0) process.exit(0);

const n = data[0];
const A = data.slice(1, n + 1);

// 1. prefix XOR
const prefixXor = new Array(n);
prefixXor[0] = A[0];
for (let i = 1; i < n; ++i) {
    prefixXor[i] = prefixXor[i - 1] ^ A[i];
}

// 2. suffix AND
const suffixAnd = new Array(n);
suffixAnd[n - 1] = A[n - 1];
for (let i = n - 2; i >= 0; --i) {
    suffixAnd[i] = suffixAnd[i + 1] & A[i];
}

// 3. evaluate all split points
let best = -Infinity;
for (let i = 0; i < n - 1; ++i) {
    const val = prefixXor[i] ^ suffixAnd[i + 1];
    if (val > best) best = val;
}

console.log(best.toString());
