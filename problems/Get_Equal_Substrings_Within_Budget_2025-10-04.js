
//  Get Equal Substrings Within Budget
//  ECMAScript 2021 (Node.js)

'use strict';
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let k, s;

// input format is assumed to be:
//   first line : integer k
//   second line: string s
// if the first line contains two integers (n k) we ignore n
if (input.length >= 2 && /^[0-9]+$/.test(input[0]) && !isNaN(parseInt(input[0], 10))) {
    k = BigInt(input[0]);   // k can be large
    if (input.length >= 3 && /^\w+$/.test(input[2])) {
        // input[0] = n, input[1] = k
        k = BigInt(input[1]);
        s = input[2];
    } else {
        // typical format: k on first line, s on second line
        s = input[1];
    }
} else {
    // fallback – not expected for this problem
    throw new Error('Unexpected