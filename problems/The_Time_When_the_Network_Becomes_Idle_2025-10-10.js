
/*  The Time When the Network Becomes Idle
    Reference for Node.js (ECMAScript 2021)
*/

'use strict';
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(BigInt);
let idx = 0;

// first value: n
const n = Number(input[idx++]);          // n fits into normal Number (<= 10^5)

// ----- read edges -------------------------------------------------------
const adj = Array.from({length: n}, () => []);

for (let i = 0; i < n - 1; i++) {
    const u = Number(input[idx++]);          // nodes are given as 0‑based integers
    const v = Number(input[idx++]);
    const w = input[idx++];
    adj[u].push([v, w]);
    adj[v].push([u, w]);
}

// ----- read sending periods ------------------------------