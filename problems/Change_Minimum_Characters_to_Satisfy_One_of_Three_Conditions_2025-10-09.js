
//  Change Minimum Characters to Satisfy One of Three Conditions
//  ECMAScript 2021 (Node.js 12+)

'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();   // read entire stdin
const s = input;                                  // the string
const n = s.length;

// ---------- Condition 1 : all equal ----------
const freq = new Array(26).fill(0);
for (let i = 0; i < n; ++i) {
    const idx = s.charCodeAt(i) - 97