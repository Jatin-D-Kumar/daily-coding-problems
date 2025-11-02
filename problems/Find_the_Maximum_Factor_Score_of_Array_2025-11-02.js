
/*  Find the Maximum Factor Score of Array
 *  ECMAScript 2021 (Node.js v12+)
 */

'use strict';
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;

// ----- read input ---------------------------------------------------------
const T = input[idx++] || 0;          // number of test cases
const tests = [];
let globalMaxVal = 0;

for (let t = 0; t < T; ++t) {
    const n = input[idx++];
    const arr = input.slice(idx, idx + n);
    idx += n;
    tests.push({ n, arr });
    for (const v of arr) {
        const absv = Math.abs(v);
        if (absv > globalMaxVal) globalMaxVal = absv    }
}

// ----- pre‑compute smallest prime factors up to globalMaxVal ---------------
const SPF = new Uint32Array(globalMaxVal + 1);
for (let i = 2; i <= globalMaxVal; ++i) {
    if (SPF[i] === 0) {                // i is prime
        SPF[i] = i;
        if (i * i <= globalMaxVal) {
            for (let j = i * i; j <= globalMaxVal; j += i) {
                if (SPF[j] === 0) SPF[j] = i;
            }
        }
    }
}
SPF[0] = 0;  // unused
SPF[1] = 1;

// helper: number of distinct prime factors of x (x >= 0)
function factorScore(x) {
    if (x === 0 || x === 1) return 0;
    let cnt = 0;
    while (x > 1) {
        const p = SPF[x];
        cnt++;
        while (x % p === 0) x = Math.trunc(x / p);
    }
    return cnt;
}

// ----- solve each test case -----------------------------------------------
const outLines = [];
for (const { n, arr