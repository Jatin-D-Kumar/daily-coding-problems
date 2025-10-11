
//  Convert the Temperature
//  Compatible with Node.js (ECMAScript 2021)

'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let idx = 0;
const t = Number(input[idx++]);           // number of test cases
const out =