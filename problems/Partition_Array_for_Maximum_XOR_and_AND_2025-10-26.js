
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
const pref