
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
if (input.length >= 2 && /^[0-9]+$/.test(input[0]) && !isNaN(parseI