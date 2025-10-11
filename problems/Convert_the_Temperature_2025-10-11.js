
//  Convert the Temperature
//  Compatible with Node.js (ECMAScript 2021)

'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let idx = 0;
const t = Number(input[idx++]);           // number of test cases
const out = [];

for (let caseNo = 0; caseNo < t; caseNo++) {
  const value = Number(input[idx++]);     // temperature value
  const scale = input[idx++];             // 'C' or 'F'

  let ans;
  if (scale === 'C') {
    // Celsius to Fahrenheit
    ans = Math.trunc((9 * value) / 5