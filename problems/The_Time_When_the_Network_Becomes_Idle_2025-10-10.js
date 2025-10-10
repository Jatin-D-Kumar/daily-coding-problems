
/*  The Time When the Network Becomes Idle
    Reference for Node.js (ECMAScript 2021)
*/

'use strict';
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(BigInt);
let idx = 0;

// first value: n
const n 