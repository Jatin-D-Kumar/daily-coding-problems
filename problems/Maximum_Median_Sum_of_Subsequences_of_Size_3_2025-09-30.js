
//  Maximum Median Sum of Subsequences of Size 3
//  ECMAScript 2021 (Node.js)

'use strict';
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const T = input[idx++];       // number of test cases
const outputs = [];

for (let tc = 0; tc < T; ++tc) {
    const N = input[idx++];
    const arr = input.slice(idx, idx + N);
    idx += N;

    arr.sort((a, b) => a - b);          // ascending
    const m = Math.floor