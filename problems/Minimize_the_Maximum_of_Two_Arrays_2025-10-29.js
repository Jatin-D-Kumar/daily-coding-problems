
//  Minimize the Maximum of Two Arrays
//  ECMAScript 2021 (Node.js)

'use strict';
const fs = require('fs');

// ----- Input -----
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const N = data[idx++];
const A = new Array(N);
const B = new Array(N);
for (let i = 0; i < N; ++i) A[i] = data[idx++];
for (let i = 0; i < N; ++i) B[i] = data[idx++];

// ----- Algorithm -----
A.sort((x, y) => x - y);            // ascending
B.sort((x, y) => x - y);   