
//  Change Minimum Characters to Satisfy One of Three Conditions
//  ECMAScript 2021 (Node.js 12+)

'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();   // read entire stdin
const s = input;                                  // the string
const n = s.length;

/